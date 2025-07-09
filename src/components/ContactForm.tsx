import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type ContactFormSchema,
  contactFormSchema,
} from "../schemas/contactFormSchema";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  });

  const messageValue = watch("message") || "";

  const onSubmit = (data: ContactFormSchema) => {
    console.log(data);
    alert("Formulário enviado com sucesso!");
  };

  return (
    <div className="py-24 px-4 md:px-0 bg-[linear-gradient(0deg,_#007A2B_0%,_#005B27_100%)]">
      <div className="max-w-[1128px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-16">
        {/* Texto lateral */}
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

        {/* Formulário */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white text-gray-800 w-full max-w-[456px] min-h-[756px] md:min-h-[756px] rounded-2xl shadow-lg p-[32px_24px] flex flex-col justify-between overflow-y-auto"
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
                maxLength={11}
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                E-mail corporativo
              </label>
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

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                Site da empresa
              </label>
              <input
                type="url"
                {...register("website")}
                placeholder="https://www.site.com.br"
                className="input w-full py-3 px-4 h-[48px]"
              />
              {errors.website && (
                <span className="text-red-500 text-sm">
                  {errors.website.message}
                </span>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Setor</label>
              <select
                {...register("job_role")}
                className="input w-full h-[48px]"
              >
                <option value="">Selecione</option>
                <option value="rh">RH</option>
                <option value="gestor">Gestor</option>
                <option value="outro">Outro</option>
              </select>
              {errors.job_role && (
                <span className="text-red-500 text-sm">
                  {errors.job_role.message}
                </span>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                Estou procurando soluções em:
              </label>
              <select
                {...register("solutions")}
                className="input w-full h-[48px]"
              >
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

          <button
            type="submit"
            className="bg-dark-green-300 hover:bg-green-700 rounded-full w-[169px] h-[48px] mx-auto mt-8 text-white transition"
          >
            Solicitar Contato
          </button>
        </motion.form>
      </div>
    </div>
  );
}
