import { motion } from "framer-motion";
import {
  FaSatelliteDish,
  FaMicrochip,
  FaNetworkWired,
  FaBrain,
  FaBroadcastTower,
  FaCode,
} from "react-icons/fa";

const projects = [
  {
    title: "Direct RF Sampling Radar",
    icon: <FaSatelliteDish size={42} />,
    desc: "Designed a scalable Direct RF Sampling receiver using AMD RFSoC supporting multi-channel coherent radar systems.",
    tech: ["RFSoC", "ADC/DAC", "JESD204B/C"],
  },
  {
    title: "Digital Beamforming",
    icon: <FaBroadcastTower size={42} />,
    desc: "Implemented high-performance FPGA beamforming for AESA radar with real-time steering and calibration.",
    tech: ["FPGA", "DSP48", "CORDIC"],
  },
  {
    title: "Multi-board Synchronization",
    icon: <FaNetworkWired size={42} />,
    desc: "Developed deterministic synchronization across 160+ radar boards using SYSREF and optical timing.",
    tech: ["HMC7044", "SYSREF", "JESD204C"],
  },
  {
    title: "AI Digital Predistortion",
    icon: <FaBrain size={42} />,
    desc: "Research on CNN-LSTM based adaptive Digital Predistortion for RF power amplifier linearization.",
    tech: ["Python", "TensorFlow", "MATLAB"],
  },
  {
    title: "High-Speed FPGA Platform",
    icon: <FaMicrochip size={42} />,
    desc: "Designed FPGA systems using AMD RFSoC, UltraScale+ and Versal for radar and EW applications.",
    tech: ["Versal", "RFSoC", "DDR4", "PCIe"],
  },
  {
    title: "Embedded Test Framework",
    icon: <FaCode size={42} />,
    desc: "Created Python, TCL and MATLAB based automation for validation, testing and production.",
    tech: ["Python", "TCL", "MATLAB"],
  },
];

export default function Projects() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {projects.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{
                scale: 1.04,
                y: -8,
              }}
              className="bg-slate-900 rounded-3xl border border-slate-800 p-8 hover:border-cyan-400 transition-all"
            >

              <div className="text-cyan-400 mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-7 mb-6">
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-2">

                {item.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}