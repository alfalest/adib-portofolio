import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import CodeRainBackground from "./code-rain-bg";
import CursorGlow from "./cursor-glow";

export default function Layout() {
  return (
    <div className="relative">
      <CodeRainBackground />
      <CursorGlow />
      <Navbar />
      <main className="container relative z-10 mx-auto mt-5 max-w-6xl p-4 md:mt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
