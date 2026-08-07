import { useState } from "react";
import { Menu, X } from "lucide-react";

const menuItems = [
  "Home",
  "About",
  "Projects",
  "Publications",
  "Patents",
  "Gallery",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <a href="/" className="text-2xl font-bold text-cyan-400">
          Nirbhay Singh
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-400 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700">

          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-6 py-4 text-gray-300 hover:bg-slate-800"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}

        </div>
      )}

    </nav>
  );
}