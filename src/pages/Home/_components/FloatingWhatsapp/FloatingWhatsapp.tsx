import { motion } from "framer-motion";

export default function FloatingWhatsapp() {
  return (
    <motion.a
      href="https://wa.me/5519997697385" // <-- Substitua pelo número real com DDI
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg flex items-center justify-center transition-colors"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
    >
      <img
        src="/trabalhe-conosco/whatsapp-floating-icon.svg"
        alt="WhatsApp"
        className="w-8 h-8"
      />
    </motion.a>
  );
}
