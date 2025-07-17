import CoursesSection from "./_components/CoursesSection";
import TrainingSection from "./_components/TrainingSection";
import WhyChooseEpsso from "./_components/WhyChooseEpsso";

export default function TrainingPage() {
  return (
    <main className="w-full">
      <CoursesSection />
      <WhyChooseEpsso />
      <TrainingSection />
    </main>
  );
}
