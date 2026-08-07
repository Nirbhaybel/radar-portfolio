import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        <Link
          to="/"
          className="text-2xl font-bold text-white"
        >
          Nirbhay Kumar Singh
        </Link>

        <div className="flex gap-8 text-white">

          <Link to="/">Home</Link>

          <Link to="/publications">Publications</Link>

          <Link to="/patents">Patents</Link>

          <Link to="/projects">Projects</Link>

          <Link to="/contact">Contact</Link>

        </div>

        <div className="flex gap-4 text-xl text-white">

          <a
            href="https://github.com/nirbhaybel"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/nirbhay-kumar-singh-01354256"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>
    </nav>
  );
}