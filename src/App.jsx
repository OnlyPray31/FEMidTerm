import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function Layout() {
  const location = useLocation();

  const backgrounds = {
    "/": "bg-[#fdf9f3]",
    "/about": "bg-[url('/about-bg.jpg')] bg-cover bg-center",
    "/projects": "bg-[#fdf9f3]",
    "/contact": "bg-pink-200"
  };

  const currentBg = backgrounds[location.pathname] || "bg-[#fdf9f3]";

  return (
    <div className={`min-h-screen text-white flex flex-col ${currentBg}`}>
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
