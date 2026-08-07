import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-slate-950 py-28">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <h2 className="text-5xl font-bold text-center text-white">
            About Me
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-6 rounded-full"></div>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold text-cyan-400 mb-6">
              Senior FPGA & Embedded Systems Engineer
            </h3>

            <p className="text-gray-300 leading-9 text-lg">

              I have more than eleven years of experience developing
              high-performance FPGA-based embedded systems for
              aerospace and defence applications.

              My work spans the complete product lifecycle—from
              architecture and schematic design to FPGA implementation,
              board bring-up, laboratory validation, system integration,
              and deployment.

              Throughout my career I have led the development of
              Direct RF Sampling radar systems based on AMD RFSoC,
              high-speed JESD204 interfaces, Digital Beamforming,
              PCIe, DDR, and high-speed Ethernet technologies.

            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="space-y-8">

              <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
                <h4 className="text-cyan-400 font-semibold text-xl">
                  Current Position
                </h4>

                <p className="text-gray-300 mt-3">
                  Deputy Manager – Centre of Excellance Radar and Weapon System, Bharat Electronics Limited (BEL)
                </p>
              </div>

              <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
                <h4 className="text-cyan-400 font-semibold text-xl">
                  Education
                </h4>

                <p className="text-gray-300 mt-3">
                  M.Tech – India Institute of Technolog(IIT) Madras. CGPA 9.38
                </p>
              </div>

              <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
                <h4 className="text-cyan-400 font-semibold text-xl">
                  Interests
                </h4>

                <p className="text-gray-300 mt-3">
                  FPGA • RFSoC • Embedded Systems • AI Hardware •
                  High-Speed Digital Design • Research • Innovation
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}