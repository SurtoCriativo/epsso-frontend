import { Clock, MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactUsFormSchema,
  type ContactUsFormSchema,
} from "../../../schemas/contactUsFormSchema";

export default function ContactUsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ContactUsFormSchema>({
    resolver: zodResolver(contactUsFormSchema),
    mode: "onBlur",
  });

  const messageValue = watch("message") || "";

  const onSubmit = (data: ContactUsFormSchema) => {
    console.log(data);
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <div className="py-12 px-4 md:px-0 w-full">
      <div className="max-w-[1128px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-16">
        {/* Formulário */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-gray-800 w-full max-w-[456px] min-h-[756px] rounded-2xl p-[32px_24px] flex flex-col justify-between overflow-y-auto"
        >
          <h2 className="text-xl font-semibold text-dark-green-800">
            Deixe sua mensagem
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Vamos te responder o quanto antes!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-[16px]">
            <div>
              <label className="block text-sm font-medium mb-2">Nome</label>
              <input
                type="text"
                {...register("name")}
                placeholder="Seu Nome"
                className="input w-full py-3 px-4 h-[48px] rounded-md focus:outline-none border border-gray-300"
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1 block">
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
                className="input w-full py-3 px-4 h-[48px] rounded-md focus:outline-none border border-gray-300"
              />
              {errors.lastname && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.lastname.message}
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Telefone</label>
              <input
                type="text"
                {...register("phone")}
                placeholder="(00) 00000-0000"
                maxLength={11}
                className="input w-full py-3 px-4 h-[48px] rounded-md focus:outline-none border border-gray-300"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm mt-1 block">
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
                className="input w-full py-3 px-4 h-[48px] rounded-md focus:outline-none border border-gray-300"
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                Qual o assunto?
              </label>
              <select
                {...register("subject")}
                className="input w-full h-[48px] rounded-md focus:outline-none px-4 border border-gray-300"
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
            className="cursor-pointer bg-dark-green-300 hover:bg-green-700 rounded-full w-[169px] h-[48px] mx-auto mt-8 text-white transition flex items-center justify-center"
          >
            Enviar mensagem
          </button>
        </motion.form>

        {/* Detalhes de contato */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-gray-800 w-full rounded-2xl p-[32px_24px] flex flex-col justify-start max-w-[456px]"
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
              <p className="text-sm text-gray-600">suporte@exemplo.com.br</p>
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

          {/* ✅ Botão atualizado com novo ícone */}
          <a
            href="https://wa.me/5519999999999"
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
