import { z } from "zod";

export const jobApplicationFormSchema = z.object({
  name: z.string().min(1, "Campo obrigatório"),
  lastname: z.string().min(1, "Campo obrigatório"),
  phone: z.string().min(14, "Telefone inválido").max(15, "Telefone inválido"),
  email: z.string().email("E-mail inválido"),
  city: z.string().min(1, "Campo obrigatório"),
  state: z.string().min(1, "Campo obrigatório"),
  message: z.string().max(120, "Máximo de 120 caracteres").optional(),
  file: z
    .instanceof(File, { message: "Arquivo obrigatório" })
    .refine((file) => file.size > 0, "Arquivo obrigatório")
    .refine(
      (file) =>
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
