import HeroSectionCursos from "./_components/HeroSectionCursos";
import CoursesSection from "./_components/CoursesSection";
import TrainingSection from "./_components/TrainingSection";
import WhyChooseEpsso from "./_components/WhyChooseEpsso";
import useHtmlMetaData from "../../hooks/useHtmlMetaData";

export default function TrainingPage() {
  useHtmlMetaData({
    title: "EPSSO | Cursos e Treinamentos",
    metaDescription: "Capacite sua equipe com certificações atualizadas.",
  });

  return (
    <main className="w-full">
      <HeroSectionCursos />
      <CoursesSection />
      <WhyChooseEpsso />
      <TrainingSection />
    </main>
  );
}
