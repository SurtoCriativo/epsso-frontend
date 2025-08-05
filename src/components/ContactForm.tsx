import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import {
  type ContactFormSchema,
  contactFormSchema,
} from "../schemas/contactFormSchema";
import { useContactForm } from "../hooks/email/useContactForm";
import { formatPhone } from "../utils/formatters";

const serviceOptions = [
  {
    id: "assessoria-juridica",
    value: "assessoria-juridica",
    label: "Assessoria Jurídica",
  },
  { id: "e-social", value: "esocial", label: "e-Social" },
  { id: "ergonomia", value: "ergonomia", label: "Ergonomia" },
  {
    id: "gestao-de-informacoes",
    value: "gestao-de-informacoes",
    label: "Gestão de Informações",
  },
  {
    id: "gestao-de-terceirizados",
    value: "gestao-de-terceirizados",
    label: "Gestão de Terceirizados",
  },
  {
    id: "medicina-do-trabalho",
    value: "medicina-do-trabalho",
    label: "Medicina do Trabalho",
  },
  {
    id: "seguranca-do-trabalho",
    value: "seguranca-do-trabalho",
    label: "Segurança do Trabalho",
  },
  {
    id: "servicos-in-company",
    value: "servicos-in-company",
    label: "Serviços In Company",
  },
  // "Outros" sempre por último
  { id: "outros", value: "outros", label: "Outros" },
];

const sectorOptions = [
  { value: "compliance", label: "Compliance" },
  { value: "financeiro", label: "Financeiro" },
  { value: "juridico", label: "Jurídico" },
  { value: "manutencao", label: "Manutenção" },
  { value: "operacoes", label: "Operações" },
  { value: "rh", label: "RH" },
  { value: "seguranca", label: "Segurança" },
  { value: "outro", label: "Outro" },
];

interface ContactFormProps {
  // Optional props for customization
  preSelectedSolution?: string;
  pageSource?: string;
  onSuccess?: () => void;
  successMessage?: string;
  className?: string;
}

export default function ContactForm({
  preSelectedSolution,
  pageSource = "Home",
  onSuccess,
  successMessage = "",
  className,
}: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setValue,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
    defaultValues: {
      solutions: preSelectedSolution || "",
      name: "",
      lastname: "",
      phone: "",
      email: "",
      website: "",
      job_role: "",
      message: "",
    },
  });

  const messageValue = watch("message") || "";

  const {
    sendContactEmail,
    isLoading,
    isSuccess,
    isError,
    error,
    reset: resetMutation,
  } = useContactForm({
    pageSource,
    onSuccess: () => {
      reset();
      onSuccess?.();
    },
  });

  // Update solutions if preSelectedSolution changes
  useEffect(() => {
    if (preSelectedSolution) {
      setValue("solutions", preSelectedSolution);
    }
  }, [preSelectedSolution, setValue]);

  const onSubmit = (data: ContactFormSchema) => {
    sendContactEmail(data);
  };

  // Reset form when user wants to send another message
  const handleSendAnother = () => {
    reset();
    resetMutation();
  };

  return (
    <div
      className={`py-24 px-4 md:px-0 bg-[linear-gradient(0deg,_#007A2B_0%,_#005B27_100%)] ${
        className || ""
      }`}
    >
      <div className="max-w-[1128px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-16">
        {/* Left text section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-lg text-white text-left w-full md:w-auto"
        >
          <button
            className="bg-green-soft-300 text-green-accents-600 rounded-full shadow mx-auto md:mx-0 flex items-center gap-2 w-[134px] h-[28px] px-3 text-[10px]"
            style={{ fontWeight: 500, margin: 0 }}
          >
            <img
              src="/about/message-square.svg"
              alt="Mensagem"
              className="w-3 h-3 text-green-600"
              aria-hidden="true"
            />
            <span>FALE COM A EPSSO</span>
          </button>

          <h2 className="text-[32px] md:text-4xl mb-4 leading-tight mt-6">
            Pronto para cuidar da saúde e segurança da sua empresa?
          </h2>
          <p className="text-white text-opacity-90 text-[14px] leading-relaxed">
            Preencha o formulário e um dos nossos especialistas entrará em
            contato com você. Juntos, encontraremos a melhor solução para a sua
            empresa.
          </p>
        </motion.div>

        {/* Form section with AnimatePresence for smooth transitions */}
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white text-gray-800 w-full max-w-[456px] min-h-[765px] rounded-2xl shadow-lg p-[32px_24px] flex flex-col items-center justify-center text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
              >
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
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {successMessage}
              </h3>
              <p className="text-gray-600 mb-8">
                Nossa equipe comercial retornará este contato em breve!
              </p>
              <button
                onClick={handleSendAnother}
                className="text-green-600 hover:text-green-700 underline text-sm font-medium cursor-pointer"
              >
                Enviar outra mensagem
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
              className="bg-white text-gray-800 w-full max-w-[456px] min-h-[756px] rounded-2xl shadow-lg p-[32px_24px] flex flex-col justify-between overflow-y-auto relative"
            >
              {/* Loading overlay */}
              {isLoading && (
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 text-sm">
                      Enviando mensagem...
                    </p>
                  </div>
                </div>
              )}

              {/* Error message */}
              {isError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4"
                >
                  <p className="text-red-600 text-sm">
                    {error?.message ||
                      "Erro ao enviar mensagem. Por favor, tente novamente."}
                  </p>
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-[16px]">
                {/* Nome */}
                <div>
                  <label className="block text-sm font-medium mb-2">Nome</label>
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Seu Nome"
                    className="input w-full py-3 px-4 h-[48px]"
                    disabled={isLoading}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Sobrenome */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Sobrenome
                  </label>
                  <input
                    type="text"
                    {...register("lastname")}
                    placeholder="Seu Sobrenome"
                    className="input w-full py-3 px-4 h-[48px]"
                    disabled={isLoading}
                  />
                  {errors.lastname && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.lastname.message}
                    </span>
                  )}
                </div>

                {/* Telefone */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Telefone (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder="(00) 00000-0000"
                    className="input w-full py-3 px-4 h-[48px]"
                    maxLength={15} // Updated to account for formatting
                    onChange={(e) => {
                      const formatted = formatPhone(e.target.value);
                      setValue("phone", formatted);
                    }}
                    disabled={isLoading}
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.phone.message}
                    </span>
                  )}
                </div>

                {/* E‑mail */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    E‑mail corporativo
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="exemplo@seuemail.com.br"
                    className="input w-full py-3 px-4 h-[48px]"
                    disabled={isLoading}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Site */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">
                    Site da empresa
                  </label>
                  <input
                    type="url"
                    {...register("website")}
                    placeholder="https://www.site.com.br"
                    className="input w-full py-3 px-4 h-[48px]"
                    disabled={isLoading}
                  />
                  {errors.website && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.website.message}
                    </span>
                  )}
                </div>

                {/* Setor */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">
                    Setor
                  </label>
                  <select
                    {...register("job_role")}
                    className="custom-select w-full h-[48px] px-4"
                    disabled={isLoading}
                  >
                    <option value="">Selecione</option>
                    {sectorOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.job_role && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.job_role.message}
                    </span>
                  )}
                </div>

                {/* Solutions */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">
                    Estou procurando soluções em:{" "}
                  </label>
                  <select
                    {...register("solutions")}
                    className="custom-select w-full h-[48px] px-4"
                    disabled={isLoading}
                  >
                    <option value="">Selecione</option>
                    {serviceOptions.map((option) => (
                      <option key={option.id} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.solutions && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.solutions.message}
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
                    disabled={isLoading}
                  />
                  <div className="absolute bottom-2 right-4 text-right text-xs text-gray-500">
                    {messageValue.length}/120
                  </div>
                  {errors.message && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.message.message}
                    </span>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="bg-dark-green-300 hover:bg-green-700 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed rounded-full w-[169px] h-[48px] mx-auto mt-8 text-white transition"
              >
                {isLoading ? "Enviando..." : "Solicitar Contato"}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
