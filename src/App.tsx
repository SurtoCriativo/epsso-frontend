import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import FloatingWhatsapp from "./pages/Home/_components/FloatingWhatsapp/FloatingWhatsapp";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <FloatingWhatsapp /> {/* Botão visível em todas as rotas */}
    </BrowserRouter>
  );
}

export default App;
