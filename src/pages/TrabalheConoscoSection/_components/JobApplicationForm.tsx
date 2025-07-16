import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobApplicationFormSchema } from "../../../schemas/jobApplicationFormSchema";
import type { JobApplicationFormSchema } from "../../../schemas/jobApplicationFormSchema";

export default function JobApplicationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<JobApplicationFormSchema>({
    resolver: zodResolver(jobApplicationFormSchema),
    mode: "onBlur",
  });

  const messageValue = watch("message") || "";

  const onSubmit = (data: JobApplicationFormSchema) => {
    console.log(data);
    alert("Formulário enviado com sucesso!");
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white text-gray-800 w-full max-w-none min-h-[756px] md:min-h-[756px] rounded-2xl shadow-lg p-[32px_24px] flex flex-col justify-between overflow-y-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-[16px]">
        <div>
          <label className="block text-sm font-medium mb-2">Nome</label>
          <input
            type="text"
            {...register("name")}
            placeholder="Seu Nome"
            className="input w-full py-3 px-4 h-[48px]"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Sobrenome</label>
          <input
            type="text"
            {...register("lastname")}
            placeholder="Seu Sobrenome"
            className="input w-full py-3 px-4 h-[48px]"
          />
          {errors.lastname && (
            <span className="text-red-500 text-sm">
              {errors.lastname.message}
            </span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Telefone (WhatsApp)
          </label>
          <input
            type="text"
            {...register("phone")}
            placeholder="(00) 00000-0000"
            className="input w-full py-3 px-4 h-[48px]"
            maxLength={11}
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone.message}</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">E-mail</label>
          <input
            type="email"
            {...register("email")}
            placeholder="exemplo@seuemail.com.br"
            className="input w-full py-3 px-4 h-[48px]"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Cidade</label>
          <input
            type="text"
            {...register("city")}
            placeholder="Sua cidade"
            className="input w-full py-3 px-4 h-[48px]"
          />
          {errors.city && (
            <span className="text-red-500 text-sm">{errors.city.message}</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Estado</label>
          <select {...register("state")} className="input w-full h-[48px]">
            <option value="">Selecione</option>
            <option value="AC">Acre (AC)</option>
            <option value="AL">Alagoas (AL)</option>
            <option value="AP">Amapá (AP)</option>
            <option value="AM">Amazonas (AM)</option>
            <option value="BA">Bahia (BA)</option>
            <option value="CE">Ceará (CE)</option>
            <option value="DF">Distrito Federal (DF)</option>
            <option value="ES">Espírito Santo (ES)</option>
            <option value="GO">Goiás (GO)</option>
            <option value="MA">Maranhão (MA)</option>
            <option value="MT">Mato Grosso (MT)</option>
            <option value="MS">Mato Grosso do Sul (MS)</option>
            <option value="MG">Minas Gerais (MG)</option>
            <option value="PA">Pará (PA)</option>
            <option value="PB">Paraíba (PB)</option>
            <option value="PR">Paraná (PR)</option>
            <option value="PE">Pernambuco (PE)</option>
            <option value="PI">Piauí (PI)</option>
            <option value="RJ">Rio de Janeiro (RJ)</option>
            <option value="RN">Rio Grande do Norte (RN)</option>
            <option value="RS">Rio Grande do Sul (RS)</option>
            <option value="RO">Rondônia (RO)</option>
            <option value="RR">Roraima (RR)</option>
            <option value="SC">Santa Catarina (SC)</option>
            <option value="SP">São Paulo (SP)</option>
            <option value="SE">Sergipe (SE)</option>
            <option value="TO">Tocantins (TO)</option>
          </select>
          {errors.state && (
            <span className="text-red-500 text-sm">{errors.state.message}</span>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">Solução</label>
          <select {...register("solutions")} className="input w-full h-[48px]">
            <option value="">Selecione</option>
            <option value="seguranca">Segurança do Trabalho</option>
            <option value="medicina">Medicina do Trabalho</option>
            <option value="cursos">Cursos e Treinamentos</option>
          </select>
          {errors.solutions && (
            <span className="text-red-500 text-sm">
              {errors.solutions.message}
            </span>
          )}
        </div>

        {/* Currículo */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">
            Currículo (PDF ou DOC)
          </label>
          <input
            type="file"
            accept="application/pdf"
            {...register("file")}
            className="
    w-full text-sm text-gray-700 
    file:mr-4 file:py-2 file:px-4 file:rounded-full 
    file:border-[1.5px] file:border-dark-green-300 
    file:bg-white file:text-dark-green-300 
    hover:file:bg-gray-100
    file:text-sm file:font-semibold 
    file:cursor-pointer
    transition
  "
          />

          {errors.file && (
            <span className="text-red-500 text-sm">
              {Array.isArray(errors.file)
                ? errors.file[0]?.message
                : errors.file.message}
            </span>
          )}
        </div>

        {/* Mensagem */}
        <div className="md:col-span-2 relative">
          <label className="block text-sm font-medium mb-2">
            Mensagem <span className="text-gray-500">(opcional)</span>
          </label>
          <textarea
            rows={5}
            maxLength={120}
            {...register("message")}
            placeholder="Gostaria de nos informar mais algum detalhe?"
            className="input resize-none w-full py-3 px-4 h-[121px]"
          />
          <div className="absolute bottom-2 right-4 text-right text-xs text-gray-400">
            {messageValue.length}/120
          </div>
          {errors.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message}
            </span>
          )}
        </div>
      </div>

      {/* Botão Enviar */}
      <button
        type="submit"
        className="bg-dark-green-300 hover:bg-green-700 rounded-full w-[169px] h-[48px] mx-auto mt-8 text-white transition cursor-pointer"
      >
        Enviar
      </button>
    </motion.form>
  );
}
