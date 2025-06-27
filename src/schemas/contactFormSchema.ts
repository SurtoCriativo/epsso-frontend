import { z } from "zod";

// Common regex patterns
const nameRegex = /^[A-Za-zÀ-ÿ\s]+$/; // Allows letters (including accents) and spaces
const companyRegex = /^[A-Za-zÀ-ÿ0-9\s,.&'-]+$/; // Allows letters, numbers, spaces, and some common punctuation
const phoneRegex = /^\d{10,11}$/; // Ensures 10 to 11 digits (useful for common phone numbers)
const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/; // A simple URL pattern

export const contactFormSchema = z.object({
  name: z
    .string()
    .nonempty("Campo obrigatório")
    .regex(nameRegex, "Nome inválido"),
  lastname: z
    .string()
    .nonempty("Campo obrigatório")
    .regex(nameRegex, "Sobrenome inválido"),
  phone: z
    .string()
    .nonempty("Campo obrigatório")
    .max(11)
    .length(11)
    .regex(phoneRegex, "Telefone inválido"),
  email: z.string().nonempty("Campo obrigatório").email("E-mail inválido"),
  company: z
    .string()
    .nonempty("Campo obrigatório")
    .regex(companyRegex, "Nome da empresa inválido"),
  website: z
    .string()
    .optional()
    .refine((val) => !val || urlRegex.test(val), { message: "Site inválido" }),
  job_role: z.enum(["rh", "gestor", "outro"], {
    errorMap: () => ({ message: "Selecione um cargo" }),
  }),
  message: z
    .string()
    .nonempty("Campo obrigatório")
    .max(120, "Máximo de 120 caracteres"),
});

// Infer the TypeScript type for use in your form component
export type ContactFormSchema = z.infer<typeof contactFormSchema>;
