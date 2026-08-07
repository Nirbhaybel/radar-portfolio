//import { Github, Linkedin, Mail } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-8">

        <div className="flex flex-col md:flex-row justify-between items-center">

          <div>
            <h2 className="text-white text-2xl font-bold">
              Nirbhay Kumar Singh
            </h2>

            <p className="text-gray-400 mt-2">
              Principal FPGA & Embedded Systems Engineer
            </p>
          </div>

          <div className="flex gap-6 mt-6 md:mt-0">

           <a href="https://nirbhaybel.github.io/radar-portfolio/" target="_blank" rel="noopener noreferrer">
  <FaGithub className="text-gray-400 hover:text-cyan-400 text-2xl" />
</a>

<a href="https://www.linkedin.com/in/nirbhay-kumar-singh-01354256/" target="_blank" rel="noopener noreferrer">
  <FaLinkedin className="text-gray-400 hover:text-cyan-400 text-2xl" />
</a>

<a href="mailto:nirbhaysingh.iitm@gmail.com">
  <FaEnvelope className="text-gray-400 hover:text-cyan-400 text-2xl" />
</a>

          </div>

        </div>

        <hr className="border-slate-800 my-8"/>

        <p className="text-center text-gray-500">
          © 2026 Nirbhay Kumar Singh. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}