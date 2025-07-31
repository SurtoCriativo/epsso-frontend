/* eslint-disable @typescript-eslint/no-explicit-any */
export interface EmailConfig {
  serviceId?: string;
  templateId: string;
  publicKey?: string;
}

export interface EmailResponse {
  status: number;
  text: string;
}

export interface BaseEmailData {
  [key: string]: any;
}

export interface ContactEmailData extends BaseEmailData {
  name: string;
  lastname: string;
  phone: string;
  email: string;
  website?: string;
  job_role?: string;
  solutions: string;
  message?: string;
  file?: string;
  // Additional fields for tracking
  page_source?: string;
  submitted_at?: string;
}

export type EmailData = ContactEmailData;

export interface EmailError {
  message: string;
  code?: string;
  details?: any;
}
