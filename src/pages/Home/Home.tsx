import ContactForm from "../../components/ContactForm";
import BlogSection from "./_components/BlogSection";
import BusinessSolutions from "./_components/BusinessSolutions";
import CompleteManagementSection from "./_components/CompleteManagementSection";
import CourseSection from "./_components/CourseSection";
import ErgonomicsSection from "./_components/ErgonomicsSection";
import HeroSection from "./_components/HeroSection";
import TestimonialsSection from "./_components/TestimonialSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BusinessSolutions />
      <CompleteManagementSection />
      <ErgonomicsSection />
      <CourseSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactForm />
    </>
  );
}
