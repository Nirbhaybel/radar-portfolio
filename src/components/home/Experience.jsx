import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaMicrochip,
  FaBook,
  FaAward,
} from "react-icons/fa";

const timeline = [
  {
    year: "2015",
    title: "Joined Bharat Electronics Limited (BEL)",
    description:
      "Started career in Defence Electronics focusing on FPGA and embedded system development.",
    icon: <FaBriefcase />,
  },
  {
    year: "2018",
    title: "Senior FPGA Development",
    description:
      "Led FPGA development for radar and high-speed digital systems using Xilinx devices.",
    icon: <FaMicrochip />,
  },
  {
    year: "2020",
    title: "Direct RF Sampling Radar",
    description:
      "Worked on Direct RF Sampling Receiver architecture, JESD204 synchronization and high-speed data acquisition.",
    icon: <FaMicrochip />,
  },
  {
    year: "2024",
    title: "M.Tech - IIT Madras",
    description:
      "Completed M.Tech in Communication & Signal Processing with research in radar signal processing.",
    icon: <FaGraduationCap />,
  },
  {
    year: "2024",
    title: "IEEE Publications",
    description:
      "Published research papers in international IEEE conferences.",
    icon: <FaBook />,
  },
  {
    year: "2025",
    title: "Multiple Patents",
    description:
      "Filed and published multiple patents in radar and embedded electronics.",
    icon: <FaAward />,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-20"
        >
          Professional Journey
        </motion.h2>

        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-5 top-0 w-1 h-full bg-cyan-600 rounded-full"></div>

          {timeline.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative flex gap-8 mb-14"
            >

              {/* Circle */}
              <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500 text-white shadow-lg">

                {item.icon}

              </div>

              {/* Card */}

              <div className="flex-1 bg-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-cyan-400 transition">

                <span className="text-cyan-400 font-semibold">

                  {item.year}

                </span>

                <h3 className="text-2xl font-semibold text-white mt-2">

                  {item.title}

                </h3>

                <p className="text-gray-400 mt-4 leading-7">

                  {item.description}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}