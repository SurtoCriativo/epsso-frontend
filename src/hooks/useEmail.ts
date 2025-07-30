import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import type {
  EmailConfig,
  EmailData,
  EmailError,
  EmailResponse,
} from "../types/email.types";
import type { EmailTemplateType } from "../config/email.config";
import { emailService } from "../services/email/emailService";

interface UseEmailOptions
  extends Omit<
    UseMutationOptions<EmailResponse, EmailError, EmailData>,
    "mutationFn"
  > {
  templateType: EmailTemplateType;
  config?: Partial<EmailConfig>;
  onSuccess?: (data: EmailResponse) => void;
  onError?: (error: EmailError) => void;
}

export const useEmail = ({
  templateType,
  config,
  onSuccess,
  onError,
  ...mutationOptions
}: UseEmailOptions) => {
  return useMutation<EmailResponse, EmailError, EmailData>({
    mutationFn: (data: EmailData) =>
      emailService.send(templateType, data, config),
    onSuccess: (data) => {
      console.log("Email sent successfully:", data);
      onSuccess?.(data);
    },
    onError: (error) => {
      console.error("Email sending failed:", error);
      onError?.(error);
    },
    ...mutationOptions,
  });
};

// Custom hook for sending emails with custom configuration
interface UseCustomEmailOptions
  extends Omit<
    UseMutationOptions<
      EmailResponse,
      EmailError,
      { config: EmailConfig; data: EmailData }
    >,
    "mutationFn"
  > {
  onSuccess?: (data: EmailResponse) => void;
  onError?: (error: EmailError) => void;
}

export const useCustomEmail = ({
  onSuccess,
  onError,
  ...mutationOptions
}: UseCustomEmailOptions = {}) => {
  return useMutation<
    EmailResponse,
    EmailError,
    { config: EmailConfig; data: EmailData }
  >({
    mutationFn: ({ config, data }) => emailService.sendCustom(config, data),
    onSuccess: (data) => {
      console.log("Custom email sent successfully:", data);
      onSuccess?.(data);
    },
    onError: (error) => {
      console.error("Custom email sending failed:", error);
      onError?.(error);
    },
    ...mutationOptions,
  });
};
