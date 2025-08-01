import { useEmail } from "../useEmail";
import type { JobApplicationFormSchema } from "../../schemas/jobApplicationFormSchema";
import type { EmailError, EmailResponse } from "../../types/email.types";
import { uploadService } from "../../services/upload/uploadService";

interface UseJobApplicationFormOptions {
  onSuccess?: () => void;
  onError?: (error: EmailError) => void;
  pageSource?: string;
}

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

  const sendJobApplication = async (formData: JobApplicationFormSchema) => {
    try {
      const file = formData.file as File;

      // Upload file to WordPress
      console.log("Uploading file to WordPress...");
      const uploadResult = await uploadService.uploadToWordPress(file);
      console.log("Upload result:", uploadResult);

      if (!uploadResult.url) {
        throw new Error("Upload successful but no URL returned");
      }

      const emailPayload = {
        name: formData.name,
        lastname: formData.lastname,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        state: formData.state,
        solutions: formData.solutions,
        message: formData.message || "Sem mensagem adicional",
        file: uploadResult.url, // This is the URL that should be in the payload
        file_url: uploadResult.url, // Alternative field name for the template
        file_name: uploadResult.filename || file.name,
        file_size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
        file_type: file.type,
        page_source: options.pageSource || "Trabalhe Conosco",
        submitted_at: new Date().toLocaleString("pt-BR"),
      };

      console.log("Email payload being sent:", emailPayload);
      console.log("File URL in payload:", emailPayload.file);

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
