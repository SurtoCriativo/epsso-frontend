import { Outlet } from "react-router-dom";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
