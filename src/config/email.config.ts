export interface EmailTemplateConfigProps {
  templateId: string;
  defaultTo?: string;
  defaultSubject?: string;
  requiredFields: string[];
}

export const EMAIL_TEMPLATES: Record<string, EmailTemplateConfigProps> = {
  contact: {
    templateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
    defaultTo: "contact@yourcompany.com",
    defaultSubject: "Novo contato recebido",
    requiredFields: [
      "name",
      "lastname",
      "email",
      "phone",
      "job_role",
      "solutions",
    ],
  },
};

export type EmailTemplateType = keyof typeof EMAIL_TEMPLATES;

export const EMAIL_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  defaultTimeout: 30000, // 30 seconds
  retryAttempts: 3,
  retryDelay: 1000, // 1 second
} as const;
