import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Star } from "lucide-react";
import {
  type TrainingFormSchema,
  trainingFormSchema,
} from "../../../schemas/trainingFormSchema";
import { useContactForm } from "../../../hooks/email/useContactForm";

const testimonials = [
  {
    name: "Juliana Martins",
    date: "21/06/2025",
    avatar: "/trainingpage/avatar-juliana.png",
    quote:
      "Os cursos da EPSSO são excelentes! O conteúdo é atualizado e a plataforma é muito fácil de usar. Eu recomendo bastante.",
  },
  {
    name: "Carlos Henrique",
    date: "03/04/2025",
    avatar: "/trainingpage/avatar-carlos.png",
    quote:
      "Fizemos os treinamentos com a EPSSO e ficamos impressionados com a qualidade e a clareza do conteúdo. A equipe toda aprendeu muito!",
  },
];

interface TrainingSectionProps {
  preSelectedSolution?: string;
  pageSource?: string;
  onSuccess?: () => void;
  successMessage?: string;
}

export default function TrainingSection({
  preSelectedSolution,
  pageSource = "TrainingPage",
  onSuccess,
  successMessage = "Obrigado pelo contato! Retornaremos em breve.",
}: TrainingSectionProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setValue,
  } = useForm<TrainingFormSchema>({
    resolver: zodResolver(trainingFormSchema),
    mode: "onBlur",
    defaultValues: {
      solutions: preSelectedSolution || "",
      name: "",
      lastname: "",
      phone: "",
      email: "",
      company: "",
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

  // keep preSelectedSolution in sync
  useEffect(() => {
    if (preSelectedSolution) {
      setValue("solutions", preSelectedSolution);
    }
  }, [preSelectedSolution, setValue]);

  const onSubmit = (data: TrainingFormSchema) => {
    sendContactEmail(data);
  };

  const handleSendAnother = () => {
    reset();
    resetMutation();
  };

  return (
    <section className="w-full bg-[linear-gradient(0deg,#007A2B_0%,#005B27_100%)] py-20 px-4">
      <div className="max-w-[1128px] mx-auto grid grid-cols-1 md:grid-cols-2 items-start gap-12">
        {/* Depoimentos */}
        <div className="text-white flex flex-col">
          <h2 className="text-xl font-semibold mb-8 px-4 md:px-0">
            Depoimentos
          </h2>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="mb-10 px-4 md:px-0 max-w-[456px]">
              <div className="flex items-center gap-4 mb-2">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium leading-tight">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-white/70 leading-tight">
                    {testimonial.date}
                  </p>
                </div>
              </div>
              <div className="flex gap-[2px] mb-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-[#7FBC53] text-[#7FBC53]"
                    />
                  ))}
              </div>
              <p className="text-sm text-white/90 leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>

        {/* Formulário / Sucesso */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white text-gray-800 w-full max-w-[456px] min-h-[765px] rounded-2xl shadow-lg p-[32px_24px] flex flex-col items-center justify-center text-center mx-auto"
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
                  Nossa equipe analisará sua solicitação e entrará em contato
                  nas próximas 24 horas úteis.
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
                className="bg-white text-gray-800 w-full max-w-[456px] min-h-[756px] rounded-2xl shadow-lg p-[32px_24px] flex flex-col justify-between overflow-hidden mx-auto relative"
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

                {/* Campos do formulário */}
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
                      className="input w-full py-3 px-4 h-[48px]"
                      disabled={isLoading}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">
                        {errors.name.message}
                      </p>
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
                      <p className="text-red-500 text-sm">
                        {errors.lastname.message}
                      </p>
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
                      className="input w-full py-3 px-4 h-[48px]"
                      disabled={isLoading}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  {/* E-mail */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      E-mail corporativo
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="exemplo@seuemail.com.br"
                      className="input w-full py-3 px-4 h-[48px]"
                      disabled={isLoading}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  {/* Empresa */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      {...register("company")}
                      placeholder="Sua Empresa"
                      className="input w-full py-3 px-4 h-[48px]"
                      disabled={isLoading}
                    />
                    {errors.company && (
                      <p className="text-red-500 text-sm">
                        {errors.company.message}
                      </p>
                    )}
                  </div>
                  {/* Site */}
                  <div>
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
                      <p className="text-red-500 text-sm">
                        {errors.website.message}
                      </p>
                    )}
                  </div>
                  {/* Setor */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                      Setor
                    </label>
                    <select
                      {...register("job_role")}
                      className="input w-full h-[48px]"
                      disabled={isLoading}
                    >
                      <option value="">Selecione</option>
                      <option value="rh">RH</option>
                      <option value="gestor">Gestor</option>
                      <option value="outro">Outro</option>
                    </select>
                    {errors.job_role && (
                      <p className="text-red-500 text-sm">
                        {errors.job_role.message}
                      </p>
                    )}
                  </div>
                  {/* Solução */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                      Solução
                    </label>
                    <select
                      {...register("solutions")}
                      className="input w-full h-[48px]"
                      disabled={isLoading}
                    >
                      <option value="">Selecione</option>
                      <option value="treinamentos">Treinamentos</option>
                      <option value="plataforma">Plataforma</option>
                      <option value="ambos">Ambos</option>
                    </select>
                    {errors.solutions && (
                      <p className="text-red-500 text-sm">
                        {errors.solutions.message}
                      </p>
                    )}
                  </div>
                  {/* Mensagem */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">
                      Mensagem <span className="text-gray-500">(opcional)</span>
                    </label>
                    <textarea
                      rows={4}
                      maxLength={120}
                      {...register("message")}
                      placeholder="Gostaria de nos informar mais algum detalhe?"
                      className="input resize-none w-full py-3 px-4 h-[121px]"
                      disabled={isLoading}
                    />
                    <p className="text-right text-xs text-gray-500 mt-1">
                      {messageValue.length}/120
                    </p>
                    {errors.message && (
                      <p className="text-red-500 text-sm">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-dark-green-300 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-full w-[169px] h-[48px] mx-auto mt-8 text-white transition"
                >
                  {isLoading ? "Enviando..." : "Solicitar contato"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
