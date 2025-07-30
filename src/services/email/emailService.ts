/* eslint-disable @typescript-eslint/no-explicit-any */
import emailjs from "@emailjs/browser";

import {
  EMAIL_CONFIG,
  EMAIL_TEMPLATES,
  type EmailTemplateType,
} from "../../config/email.config";
import type {
  EmailData,
  EmailConfig,
  EmailResponse,
  EmailError,
} from "../../types/email.types";

class EmailService {
  private initialized = false;

  constructor() {
    this.init();
  }

  private init(): void {
    if (!this.initialized && EMAIL_CONFIG.publicKey) {
      emailjs.init(EMAIL_CONFIG.publicKey);
      this.initialized = true;
    }
  }

  private validateRequired(data: EmailData, requiredFields: string[]): void {
    const missingFields = requiredFields.filter((field) => !data[field]);

    if (missingFields.length > 0) {
      throw new Error(`Missing required fields: ${missingFields.join(", ")}`);
    }
  }

  private async retryOperation<T>(
    operation: () => Promise<T>,
    attempts: number = EMAIL_CONFIG.retryAttempts,
    delay: number = EMAIL_CONFIG.retryDelay
  ): Promise<T> {
    try {
      return await operation();
    } catch (error) {
      if (attempts > 1) {
        await new Promise((resolve) => setTimeout(resolve, delay));
        return this.retryOperation(operation, attempts - 1, delay * 2);
      }
      throw error;
    }
  }

  async send(
    templateType: EmailTemplateType,
    data: EmailData,
    config?: Partial<EmailConfig>
  ): Promise<EmailResponse> {
    try {
      const template = EMAIL_TEMPLATES[templateType];

      if (!template) {
        throw new Error(`Invalid template type: ${templateType}`);
      }

      // Validate required fields
      this.validateRequired(data, template.requiredFields);

      const finalConfig: EmailConfig = {
        serviceId: config?.serviceId || EMAIL_CONFIG.serviceId,
        templateId: config?.templateId || template.templateId,
        publicKey: config?.publicKey || EMAIL_CONFIG.publicKey,
      };

      if (!finalConfig.serviceId || !finalConfig.templateId) {
        throw new Error("Missing email service configuration");
      }

      // Prepare template parameters
      const templateParams = {
        ...data,
        to_email: template.defaultTo,
        subject: template.defaultSubject,
        sent_at: new Date().toLocaleString("pt-BR"),
      };

      // Send email with retry logic
      const response = await this.retryOperation(() =>
        emailjs.send(
          finalConfig.serviceId!,
          finalConfig.templateId,
          templateParams,
          finalConfig.publicKey
        )
      );

      return response;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async sendCustom(
    config: EmailConfig,
    data: EmailData
  ): Promise<EmailResponse> {
    try {
      if (!config.serviceId || !config.templateId) {
        throw new Error("Service ID and Template ID are required");
      }

      const response = await this.retryOperation(() =>
        emailjs.send(
          config.serviceId!,
          config.templateId,
          data,
          config.publicKey || EMAIL_CONFIG.publicKey
        )
      );

      return response;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: any): EmailError {
    if (error instanceof Error) {
      return {
        message: error.message,
        code: "EMAIL_SERVICE_ERROR",
        details: error,
      };
    }

    if (typeof error === "string") {
      return {
        message: error,
        code: "EMAIL_SERVICE_ERROR",
      };
    }

    return {
      message: "Algo inesperado aconteceu. Tente novamente mais tarde!",
      code: "UNKNOWN_ERROR",
      details: error,
    };
  }
}

export const emailService = new EmailService();
