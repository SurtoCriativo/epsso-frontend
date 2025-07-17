import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/ServicesEpsso/Services";
import TrabalheConoscoSection from "./pages/TrabalheConoscoSection/TrabalheConoscoSection";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import TrainingPage from "./pages/TrainingPage/TrainingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/seguranca-trabalho" element={<Services />} />
          <Route
            path="/trabalhe-conosco"
            element={<TrabalheConoscoSection />}
          />
          <Route path="/fale-conosco" element={<ContactUsPage />} />
          <Route path="/cursos-e-treinamentos" element={<TrainingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
