import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactHeroForm() {
  return (
    <div className="bg-gray-100">
      {" "}
      {/* wrapper com o fundo cinza */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="h-[240px] px-[64px] max-w-[1128px] mx-auto text-center flex flex-col justify-center"
      >
        <p className="text-dark-green-300 text-sm font-medium mb-2 flex items-center justify-center">
          <MessageSquare className="w-4 h-4 mr-2" /> CONTATO
        </p>
        <h1 className="text-[40px] font-medium text-gray-800 leading-tight w-[358px] mx-auto">
          Como nós podemos <br className="md:hidden" /> te ajudar hoje?
        </h1>
      </motion.div>
    </div>
  );
}
