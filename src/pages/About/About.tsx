import { motion } from "framer-motion";
import PurposeSection from "./_components/AboutSection";
import TeamVoicesSection from "./_components/TeamVoicesSection";
import ValuesSection from "./_components/ValuesSection";
import WhoWeAreSection from "./_components/WhoWeAreSection";
import WorkWithUsSection from "./_components/WorkWithUsSection";
import useHtmlMetaData from "../../hooks/useHtmlMetaData";

export default function About() {
  useHtmlMetaData({
    title: "EPSSO | Sobre a Epsso",
    metaDescription:
      "Na EPSSO, nosso propósito é claro e inspirador: proteger o hoje das empresas e de seus colaboradores para construir um amanhã mais seguro, saudável e sustentável.",
  });

  return (
    <motion.main
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <PurposeSection />
      <WhoWeAreSection />
      <ValuesSection />
      <TeamVoicesSection />
      <WorkWithUsSection />
    </motion.main>
  );
}
