import { z } from "zod";

export const contactUsFormSchema = z.object({
  name: z.string().min(1, "Campo obrigatório"),
  lastname: z.string().min(1, "Campo obrigatório"),
  phone: z.string().min(14, "Telefone inválido").max(15, "Telefone inválido"),
  email: z.string().email("E-mail inválido"),
  subject: z.string().min(1, "Campo obrigatório"), // Campo para "Qual o assunto?"
  message: z.string().max(120, "Máximo de 120 caracteres").optional(),
});

export type ContactUsFormSchema = z.infer<typeof contactUsFormSchema>;
