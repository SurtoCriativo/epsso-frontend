import HeroSection from "./_components/HeroSection/HeroSection";
// import BlogSection from "./_components/BlogSection";
import { BusinessSolutions } from "./_components/BusinessSolutions";
import { PlayerSolution } from "./_components/PlayerSolution/PlayerSolution";
import ContactForm from "../../components/ContactForm";
import Testimonials from "./_components/Testimonials/Testimonial";
import ClientLogosCarousel from "./_components/ClientLogosCarousel/ClientLogosCarousel";
import useHtmlMetaData from "../../hooks/useHtmlMetaData";

export default function Home() {
  useHtmlMetaData({
    title: "EPSSO | Home",
    metaDescription:
      "Na EPSSO, nosso propósito é claro e inspirador: proteger o hoje das empresas e de seus colaboradores para construir um amanhã mais seguro, saudável e sustentável.",
  });

  return (
    <>
      <HeroSection />
      <BusinessSolutions />
      <PlayerSolution />
      <Testimonials />
      <ClientLogosCarousel />
      <ContactForm pageSource="Home" />
    </>
  );
}
