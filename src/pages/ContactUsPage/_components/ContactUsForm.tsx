import { Clock, MapPin, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactUsFormSchema,
  type ContactUsFormSchema,
} from "../../../schemas/contactUsFormSchema";
import type { ContactFormSchema as EmailFormSchema } from "../../../schemas/contactFormSchema";
import { useContactForm } from "../../../hooks/email/useContactForm";
import { formatPhone } from "../../../utils/formatters";

export default function ContactUsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<ContactUsFormSchema>({
    resolver: zodResolver(contactUsFormSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      lastname: "",
      phone: "",
      email: "",
      subject: "",
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
    pageSource: "Fale Conosco",
    onSuccess: () => {
      reset();
    },
  });

  const onSubmit = (data: ContactUsFormSchema) => {
    // build the exact shape the hook expects:
    const payload: EmailFormSchema = {
      name: data.name,
      lastname: data.lastname,
      phone: data.phone,
      email: data.email,
      // here we map your "subject" dropdown into one of the required fields:
      solutions: data.subject,
      // if you don’t collect job_role on this form, give it a default
      job_role: "Não informado",
      // the hook will itself fill `website` and `submitted_at` if missing,
      // and you can pass the free-text message along too (it’s optional)
      message: data.message,
      // website is optional on EmailFormSchema so we can omit it
    };

    sendContactEmail(payload);
  };

  const handleSendAnother = () => {
    reset();
    resetMutation();
  };

  return (
    <div className="py-12 px-4 md:px-0 w-full">
      <div className="max-w-[1128px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-16">
        {/* Formulário / Sucesso */}
        <div className="relative w-full max-w-[456px]">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white text-gray-800 rounded-2xl p-[32px_24px] min-h-[648px] flex flex-col items-center justify-center text-center"
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
                  Obrigado pelo seu interesse em relação à EPSSO.
                </h3>
                <p className="text-gray-600 mb-8">
                  Nossa equipe analisará sua mensagem e retornará este contato
                  em breve!
                </p>
                <button
                  onClick={handleSendAnother}
                  className="text-green-600 hover:text-green-700 underline text-sm font-medium"
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
                className="bg-white text-gray-800 rounded-2xl p-[32px_24px] flex flex-col justify-between overflow-y-auto relative"
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

                {/* Error banner */}
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

                <h2 className="text-xl font-semibold text-dark-green-800">
                  Deixe sua mensagem
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  Vamos te responder o quanto antes!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-[16px]">
                  {/* Nome */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      {...register("name")}
                      placeholder="Seu Nome"
                      className="input w-full py-3 px-4 h-[48px] rounded-md focus:outline-none border border-gray-300"
                      disabled={isLoading}
                    />
                    {errors.name && (
                      <span className="text-red-500 text-sm mt-1 block">
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
                      className="input w-full py-3 px-4 h-[48px] rounded-md focus:outline-none border border-gray-300"
                      disabled={isLoading}
                    />
                    {errors.lastname && (
                      <span className="text-red-500 text-sm mt-1 block">
                        {errors.lastname.message}
                      </span>
                    )}
                  </div>

                  {/* Telefone */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Telefone
                    </label>
                    <input
                      type="text"
                      {...register("phone")}
                      placeholder="(00) 00000-0000"
                      maxLength={15}
                      className="input w-full py-3 px-4 h-[48px] rounded-md focus:outline-none border border-gray-300"
                      disabled={isLoading}
                      onChange={(e) => {
                        const formatted = formatPhone(e.target.value);
                        setValue("phone", formatted);
                      }}
                    />
                    {errors.phone && (
                      <span className="text-red-500 text-sm mt-1 block">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>

                  {/* E-mail */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="comercial@epsso.com.br"
                      className="input w-full py-3 px-4 h-[48px] rounded-md focus:outline-none border border-gray-300"
                      disabled={isLoading}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm mt-1 block">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {/* Assunto */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                      Qual o assunto?
                    </label>
                    <select
                      {...register("subject")}
                      className="custom-select w-full h-[48px] rounded-md focus:outline-none px-4 border border-gray-300"
                      disabled={isLoading}
                    >
                      <option value="">Selecione</option>
                      <option value="duvida_geral">Dúvida Geral</option>
                      <option value="suporte_tecnico">Suporte Técnico</option>
                      <option value="orcamento">Orçamento</option>
                      <option value="parceria">Parceria</option>
                      <option value="outros">Outros</option>
                    </select>
                    {errors.subject && (
                      <span className="text-red-500 text-sm mt-1 block">
                        {errors.subject.message}
                      </span>
                    )}
                  </div>

                  {/* Mensagem */}
                  <div className="md:col-span-2 relative">
                    <label className="block text-sm font-medium mb-2">
                      Como podemos te ajudar?
                    </label>
                    <textarea
                      rows={5}
                      maxLength={120}
                      {...register("message")}
                      placeholder="Gostaria de nos informar mais algum detalhe?"
                      className="input resize-none w-full py-3 px-4 h-[121px] rounded-md focus:outline-none border border-gray-300"
                      disabled={isLoading}
                    />
                    <div className="absolute bottom-2 right-4 text-right text-xs text-gray-400">
                      {messageValue.length}/120
                    </div>
                    {errors.message && (
                      <span className="text-red-500 text-sm mt-1 block">
                        {errors.message.message}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="cursor-pointer bg-dark-green-300 hover:bg-green-700 rounded-full w-[169px] h-[48px] mx-auto mt-8 text-white transition flex items-center justify-center"
                >
                  {isLoading ? "Enviando..." : "Enviar mensagem"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Detalhes de contato */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-gray-800 w-full max-w-[456px] rounded-2xl p-[32px_24px] flex flex-col justify-start"
        >
          <h2 className="text-xl font-semibold mb-6 text-dark-green-800">
            Detalhes de contato
          </h2>

          <div className="flex items-start mb-6">
            <Clock className="text-dark-green-300 mr-3 mt-1" size={20} />
            <div>
              <h3 className="font-medium text-gray-700 text-base">
                Horário de atendimento
              </h3>
              <p className="text-sm text-gray-600">
                De segunda à sexta, das 8h às 17h
              </p>
            </div>
          </div>

          <div className="flex items-start mb-6">
            <MapPin className="text-dark-green-300 mr-3 mt-1" size={20} />
            <div>
              <h3 className="font-medium text-gray-700 text-base">Endereço</h3>
              <p className="text-sm text-gray-600">
                R. Pedro Álvares Cabral, 12B - Bosque,
              </p>
              <p className="text-sm text-gray-600">Campinas - SP, 13026-070</p>
            </div>
          </div>

          <div className="flex items-start mb-6">
            <Mail className="text-dark-green-300 mr-3 mt-1" size={20} />
            <div>
              <h3 className="font-medium text-gray-700 text-base">E-mail</h3>
              <p className="text-sm text-gray-600">comercial@epsso.com.br</p>
            </div>
          </div>

          <div className="flex items-start mb-6">
            <Phone className="text-dark-green-300 mr-3 mt-1" size={20} />
            <div>
              <h3 className="font-medium text-gray-700 text-base">Telefone</h3>
              <p className="text-sm text-gray-600">(19) 3579-4812</p>
            </div>
          </div>

          <hr className="border-t border-gray-200 my-4" />

          <a
            href="https://wa.me/5519971723110"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-gray-100 mt-[15px] hover:text-dark-green-700 rounded-full w-full py-3 px-4 text-dark-green-300 transition cursor-pointer flex items-center justify-start text-base font-semibold"
          >
            <img
              src="/trabalhe-conosco/whatsapp-icon.svg"
              alt="WhatsApp"
              className="w-5 h-5 mr-2"
            />
            Estamos no WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  );
}
