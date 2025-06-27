import PurposeSection from "./_components/AboutSection";
import TeamVoicesSection from "./_components/TeamVoicesSection";
import ValuesSection from "./_components/ValuesSection";
import WhoWeAreSection from "./_components/WhoWeAreSection";
import WorkWithUsSection from "./_components/WorkWithUsSection";

export default function About() {
  return (
    <main>
      <PurposeSection />
      <WhoWeAreSection />
      <ValuesSection />
      <TeamVoicesSection />
      <WorkWithUsSection />
    </main>
  );
}
