import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobApplicationFormSchema } from "../../../schemas/jobApplicationFormSchema";
import type { JobApplicationFormSchema } from "../../../schemas/jobApplicationFormSchema";
import { ufConstants } from "../../../contants/ufConstants";
import { useJobApplicationForm } from "../../../hooks/email/useJobApplicationForm";

export default function JobApplicationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset: resetForm,
    setValue,
  } = useForm<JobApplicationFormSchema>({
    resolver: zodResolver(jobApplicationFormSchema),
    mode: "onBlur",
  });

  const messageValue = watch("message") || "";

  const {
    sendJobApplication,
    isLoading,
    isSuccess,
    isError,
    error,
    reset: resetMutation,
  } = useJobApplicationForm({
    onSuccess: () => {
      resetForm();
    },
  });

  const onSubmit = (data: JobApplicationFormSchema) => {
    sendJobApplication(data);
  };

  const handleSendAnother = () => {
    resetForm();
    resetMutation();
  };

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("file", file, { shouldValidate: true });
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isSuccess ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="bg-white text-gray-800 w-full max-w-none min-h-[756px] rounded-2xl shadow-lg p-[32px_24px] flex flex-col items-center justify-center text-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">
            Obrigado pelo seu interesse em fazer parte do time EPSSO!
          </h3>
          <p className="text-gray-600 mb-8">
            Seu currículo foi recebido com sucesso e será incluído em nosso
            Banco de Talentos para oportunidades futuras.
          </p>
          <button
            onClick={handleSendAnother}
            className="text-green-600 hover:text-green-700 underline text-sm font-medium cursor-pointer"
          >
            Enviar outra candidatura
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white text-gray-800 w-full max-w-none min-h-[597px] rounded-2xl shadow-lg p-[32px_24px] flex flex-col justify-between overflow-y-auto relative"
        >
          {/* Loading overlay */}
          {isLoading && (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                <p className="text-gray-600 text-sm">Enviando candidatura...</p>
              </div>
            </div>
          )}

          {/* Error message */}
          {isError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <p className="text-red-600 text-sm">
                {error?.message ||
                  "Erro ao enviar. Por favor, tente novamente."}
              </p>
            </div>
          )}

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
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Sobrenome
              </label>
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
                maxLength={15}
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
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
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
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
                <span className="text-red-500 text-sm">
                  {errors.city.message}
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Estado</label>
              <select
                {...register("state")}
                className="custom-select w-full h-[48px] px-3"
              >
                <option value="">Selecione</option>
                {ufConstants.map((uf) => (
                  <option key={uf.value} value={uf.value}>
                    {uf.label} ({uf.value})
                  </option>
                ))}
              </select>
              {errors.state && (
                <span className="text-red-500 text-sm">
                  {errors.state.message}
                </span>
              )}
            </div>

            {/* Currículo */}
            <div className="mt-3.5 mb-3.5 md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                Currículo (PDF ou DOC)
              </label>
              <input
                type="file"
                accept="application/pdf,.doc,.docx"
                onChange={handleFileChange}
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

              {errors.message && (
                <span className="text-red-500 text-sm">
                  {errors.message?.message}
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
            disabled={isLoading}
            className="bg-dark-green-300 cursor-pointer hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-full w-[169px] h-[48px] mx-auto mt-8 text-white transition"
          >
            {isLoading ? "Enviando..." : "Enviar"}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
