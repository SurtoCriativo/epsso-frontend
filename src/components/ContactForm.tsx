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
    getValues,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: ContactFormSchema) => {
    console.log(data);
    alert("Formulário enviado com sucesso!");
  };

  return (
    <div className="bg-gradient-to-r from-green-800 to-green-600 py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 flex flex-col md:flex-row items-start justify-between gap-16">
        {/* Texto lateral */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-lg text-white"
        >
          <button className="bg-green-soft-300 text-green-accents-600 font-medium rounded-full px-3 py-2 mb-6 flex items-center gap-2 text-sm shadow">
            FALE COM A EPSSO
          </button>
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Pronto para cuidar da saúde e segurança da sua empresa?
          </h2>
          <p className="text-white text-opacity-90 text-base leading-relaxed">
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
          className="bg-white text-gray-800 p-8 md:p-10 w-full max-w-xl rounded-2xl shadow-lg space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nome</label>
              <input
                type="text"
                {...register("name")}
                placeholder="Seu Nome"
                className="input"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Sobrenome
              </label>
              <input
                type="text"
                {...register("lastname")}
                placeholder="Seu Sobrenome"
                className="input"
              />
              {errors.lastname && (
                <span className="text-red-500 text-sm">
                  {errors.lastname.message}
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Telefone</label>
              <input
                type="text"
                {...register("phone")}
                placeholder="(00) 00000-0000"
                className="input"
                maxLength={11}
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                E-mail corporativo
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="exemplo@seuemail.com.br"
                className="input"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Empresa</label>
              <input
                type="text"
                {...register("company")}
                placeholder="Sua Empresa"
                className="input"
              />
              {errors.company && (
                <span className="text-red-500 text-sm">
                  {errors.company.message}
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Site da empresa
              </label>
              <input
                type="url"
                {...register("website")}
                placeholder="https://www.site.com.br"
                className="input"
              />
              {errors.website && (
                <span className="text-red-500 text-sm">
                  {errors.website.message}
                </span>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Cargo</label>
              <select {...register("job_role")} className="input">
                <option value="">Escolha uma opção</option>
                <option value="rh">Recursos Humanos</option>
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
              <label className="block text-sm font-medium mb-1">Mensagem</label>
              <textarea
                rows={4}
                maxLength={120}
                {...register("message")}
                placeholder="Fale um pouco mais sobre seu desafio ou dúvida..."
                className="input resize-none"
              />
              <div className="text-right text-sm text-gray-500">
                {getValues("message")?.length}/120
              </div>
              {errors.message && (
                <span className="text-red-500 text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>

            <div className="md:col-span-2 flex justify-center pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="bg-green-700 text-white font-semibold rounded-full px-8 py-3 transition-colors hover:bg-green-800"
              >
                Solicitar contato
              </motion.button>
            </div>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
