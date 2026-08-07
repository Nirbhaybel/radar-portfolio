import { motion } from "framer-motion";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

import profile from "../../assets/profile.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 flex items-center">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-cyan-400 font-semibold tracking-widest uppercase">
            Welcome to my Portfolio
          </p>

          <h1 className="mt-4 text-5xl lg:text-7xl font-extrabold leading-tight text-white">
            Nirbhay
            <br />
            Kumar Singh
          </h1>

          <h2 className="mt-6 text-3xl text-cyan-400 font-semibold">
            Principal FPGA & Embedded Systems Engineer
          </h2>

          <div className="flex flex-wrap gap-6 mt-8 text-gray-300">

            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-cyan-400" />
              Bengaluru, India
            </div>

            <div className="flex items-center gap-2">
              <FaBriefcase className="text-cyan-400" />
              11+ Years Experience
            </div>

            <div className="flex items-center gap-2">
              <FaGraduationCap className="text-cyan-400" />
              IIT Madras
            </div>

          </div>

          <p className="mt-10 text-lg text-gray-300 leading-9 max-w-2xl">
            FPGA and Embedded Systems Engineer with more than 11 years of
            experience designing high-performance digital hardware, Direct RF
            Sampling systems, AMD RFSoC platforms, high-speed interfaces,
            aerospace electronics, and mission-critical defence systems.

            <br /><br />

            Author of IEEE publications, inventor of multiple patents, and
            passionate about transforming advanced research into real-world
            engineering products.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="/publication/resume/resume.pdf"
              target="_blank"
              className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition"
            >
              <FaDownload className="inline mr-2" />
              Download Resume
            </a>

         <Link
            to="/publications"
            className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition"
          >
            Publications
        </Link>
           <Link
            to="/patents"
            className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition"
          >
            patents
        </Link>
          </div>

          <div className="flex gap-6 mt-10">

            <a
              href="https://www.linkedin.com/in/nirbhay-kumar-singh-01354256/"
              target="_blank"
              rel="noreferrer"
              className="text-3xl text-gray-400 hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://nirbhaybel.github.io/publication/"
              target="_blank"
              rel="noreferrer"
              className="text-3xl text-gray-400 hover:text-cyan-400"
            >
              <FaGithub />
            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute -inset-3 rounded-3xl bg-cyan-500 blur-2xl opacity-30"></div>

            <img
              src={profile}
              alt="Nirbhay Kumar Singh"
              className="relative w-[420px] lg:w-[500px] rounded-3xl shadow-2xl border-4 border-cyan-400 object-cover"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}