import { z } from "zod";

export const jobApplicationFormSchema = z.object({
  name: z.string().min(1, "Campo obrigatório"),
  lastname: z.string().min(1, "Campo obrigatório"),
  phone: z.string().min(10, "Telefone inválido").max(11, "Telefone inválido"),
  email: z.string().email("E-mail inválido"),
  website: z.string().url("URL inválida"),
  city: z.string().min(1, "Campo obrigatório"),
  state: z.string().min(1, "Campo obrigatório"),
  job_role: z.string().min(1, "Campo obrigatório"),
  solutions: z.string().min(1, "Campo obrigatório"),
  message: z.string().max(120, "Máximo de 120 caracteres").optional(),
  file: z
    .any()
    .refine((file) => file instanceof File && file.size > 0, {
      message: "Arquivo obrigatório",
    })
    .refine(
      (file) =>
        file instanceof File &&
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file.type),
      {
        message: "Envie um arquivo PDF ou DOC",
      }
    ),
});

export type JobApplicationFormSchema = z.infer<typeof jobApplicationFormSchema>;
