import { useEmail } from "../useEmail";
import type { JobApplicationFormSchema } from "../../schemas/jobApplicationFormSchema";
import type { EmailError, EmailResponse } from "../../types/email.types";

interface UseJobApplicationFormOptions {
  onSuccess?: () => void;
  onError?: (error: EmailError) => void;
  pageSource?: string;
}

// Configure your Cloudinary account
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

export const useJobApplicationForm = (
  options: UseJobApplicationFormOptions = {}
) => {
  const mutation = useEmail({
    templateType: "jobApplication",
    onSuccess: (data: EmailResponse) => {
      console.log("Job application submitted:", data);
      options.onSuccess?.();
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (err: any) => {
      console.error("Job application failed:", err);
      options.onError?.(err);
    },
  });

  const uploadToCloudinary = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  };

  const sendJobApplication = async (formData: JobApplicationFormSchema) => {
    try {
      const file = formData.file as File;

      // Upload file to Cloudinary
      const fileUrl = await uploadToCloudinary(file);

      const emailPayload = {
        name: formData.name,
        lastname: formData.lastname,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        state: formData.state,
        solutions: formData.solutions,
        message: formData.message || "Sem mensagem adicional",
        file: fileUrl, // Now sending the URL instead of the file object
        file_name: file.name,
        file_size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
        file_type: file.type,
        page_source: "Trabalhe Conosco",
        submitted_at: new Date().toLocaleString("pt-BR"),
      };

      mutation.mutate(emailPayload);
    } catch (error) {
      console.error("Error processing application:", error);
      options.onError?.({
        message: "Erro ao processar candidatura",
        code: "FILE_UPLOAD_ERROR",
        details: error,
      });
    }
  };

  return {
    sendJobApplication,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
    reset: mutation.reset,
  };
};
