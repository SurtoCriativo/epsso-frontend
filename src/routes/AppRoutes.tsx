import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import SpinnerLoader from "../components/SpinnerLoader";

const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const WorkSafety = lazy(() => import("../pages/OurSolutions/WorkSafety"));
const TrabalheConoscoSection = lazy(
  () => import("../pages/WorkWithUsSection/WorkWithUsSection")
);
const ContactUsPage = lazy(
  () => import("../pages/ContactUsPage/ContactUsPage")
);
const TrainingPage = lazy(() => import("../pages/TrainingPage/TrainingPage"));
const BlogPage = lazy(() => import("../pages/Blog/BlogPage"));
const PostDetails = lazy(
  () => import("../pages/Blog/_components/PostDetails/PostDetails")
);
const OccupationalMedicine = lazy(
  () => import("../pages/OurSolutions/OccupationalMedicine")
);
const ErgonomicsAndPhysiotherapy = lazy(
  () => import("../pages/OurSolutions/ErgonomicsAndPhysiotherapy")
);
const OutsourcedManagement = lazy(
  () => import("../pages/OurSolutions/OutsourcedManagement")
);
const InformationManagement = lazy(
  () => import("../pages/OurSolutions/InformationManagement")
);
const LegalAdvice = lazy(() => import("../pages/OurSolutions/LegalAdvice"));

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<SpinnerLoader message="Carregando..." />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/sobre-a-epsso"
          element={
            <Suspense fallback={<SpinnerLoader message="Carregando..." />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/servicos/seguranca-trabalho"
          element={
            <Suspense fallback={<SpinnerLoader message="Carregando..." />}>
              <WorkSafety />
            </Suspense>
          }
        />
        <Route
          path="/servicos/medicina-trabalho"
          element={
            <Suspense fallback={<SpinnerLoader message="Carregando..." />}>
              <OccupationalMedicine />
            </Suspense>
          }
        />
        <Route
          path="/servicos/ergonomia-fisioterapia"
          element={
            <Suspense fallback={<SpinnerLoader message="Carregando..." />}>
              <ErgonomicsAndPhysiotherapy />
            </Suspense>
          }
        />
        <Route
          path="/servicos/gestao-terceirizados"
          element={
            <Suspense fallback={<SpinnerLoader message="Carregando..." />}>
              <OutsourcedManagement />
            </Suspense>
          }
        />
        <Route
          path="/servicos/gestao-informacoes"
          element={
            <Suspense fallback={<SpinnerLoader message="Carregando..." />}>
              <InformationManagement />
            </Suspense>
          }
        />
        <Route
          path="/servicos/assessoria-juridica"
          element={
            <Suspense fallback={<SpinnerLoader message="Carregando..." />}>
              <LegalAdvice />
            </Suspense>
          }
        />
        <Route
          path="/trabalhe-conosco"
          element={
            <Suspense fallback={<SpinnerLoader message="Carregando..." />}>
              <TrabalheConoscoSection />
            </Suspense>
          }
        />
        <Route
          path="/fale-conosco"
          element={
            <Suspense fallback={<SpinnerLoader message="Carregando..." />}>
              <ContactUsPage />
            </Suspense>
          }
        />
        <Route
          path="/cursos-e-treinamentos"
          element={
            <Suspense fallback={<SpinnerLoader message="Carregando..." />}>
              <TrainingPage />
            </Suspense>
          }
        />
        <Route
          path="/blog"
          element={
            <Suspense fallback={<SpinnerLoader message="Carregando..." />}>
              <BlogPage />
            </Suspense>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <Suspense fallback={<SpinnerLoader message="Carregando..." />}>
              <PostDetails />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
