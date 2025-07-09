import React, { useState, useEffect } from "react";
import TestimonialsDesktop from "./TestimonialsDesktop";
import TestimonialsMobile from "./TestimonialsMobile";

const Testimonials: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Função pra checar largura
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Checar ao montar
    checkScreenSize();

    // Checar em resize
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isMobile ? <TestimonialsMobile /> : <TestimonialsDesktop />;
};

export default Testimonials;
