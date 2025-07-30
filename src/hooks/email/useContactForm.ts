import type { ContactFormSchema } from "../../schemas/contactFormSchema";
import type { ContactEmailData } from "../../types/email.types";
import { useEmail } from "../useEmail";

interface UseContactFormOptions {
  onSuccess?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onError?: (error: any) => void;
  pageSource?: string; // Track which page the form was submitted from
}

export const useContactForm = (options?: UseContactFormOptions) => {
  const mutation = useEmail({
    templateType: "contact",
    onSuccess: (data) => {
      console.log("Contact form submitted successfully:", data);
      options?.onSuccess?.();
    },
    onError: (error) => {
      console.error("Contact form submission failed:", error);
      options?.onError?.(error);
    },
  });

  const sendContactEmail = (data: ContactFormSchema) => {
    // Transform form data to email data
    const emailData: ContactEmailData = {
      ...data,
      website: data.website || "Não informado",
      message: data.message || "Sem mensagem adicional",
      page_source: options?.pageSource || "Página não identificada",
      submitted_at: new Date().toLocaleString("pt-BR"),
    };

    mutation.mutate(emailData);
  };

  return {
    sendContactEmail,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
    reset: mutation.reset,
  };
};
