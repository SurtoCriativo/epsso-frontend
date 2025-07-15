import HeroSection from "./_components/HeroSection/HeroSection";
// import BlogSection from "./_components/BlogSection";
import { BusinessSolutions } from "./_components/BusinessSolutions";
import { PlayerSolution } from "./_components/PlayerSolution/PlayerSolution";
import ContactForm from "../../components/ContactForm";
// import CourseSection from "./_components/CourseSection";
// import ErgonomicsSection from "./_components/ErgonomicsSection";
import Testimonials from "./_components/Testimonials/Testimonial";
import ClientLogosCarousel from "./_components/ClientLogosCarousel/ClientLogosCarousel";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BusinessSolutions />
      <PlayerSolution />
      {/* <ErgonomicsSection /> */}
      {/* <CourseSection /> */}
      <Testimonials />
      {<ClientLogosCarousel />}
      <ContactForm />
    </>
  );
}
