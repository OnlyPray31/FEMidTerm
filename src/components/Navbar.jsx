import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-pink-400 text-white px-6 py-3 flex justify-center gap-6 shadow-md">
      <Link to="/" className="hover:text-yellow-300">Home</Link>
      <Link to="/about" className="hover:text-yellow-300">About</Link>
      <Link to="/projects" className="hover:text-yellow-300">Projects</Link>
      <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
    </nav>
  );
}
