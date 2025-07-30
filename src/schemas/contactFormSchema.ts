import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Campo obrigatório"),
  lastname: z.string().min(1, "Campo obrigatório"),
  phone: z.string().min(14, "Telefone inválido").max(15, "Telefone inválido"),
  email: z.string().email("E-mail inválido"),
  company: z.string().optional(),
  website: z.string().url("URL inválida").optional().or(z.literal("")),
  job_role: z.string().min(1, "Campo obrigatório"),
  solutions: z.string().min(1, "Campo obrigatório"),
  message: z.string().max(120, "Máximo de 120 caracteres").optional(),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
