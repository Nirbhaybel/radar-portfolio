import { motion } from "framer-motion";
import { FaAward, FaArrowRight } from "react-icons/fa";

const patents = [
  {
    title: "Scalable Direct RF Sampling Receiver Architecture",
    number: "Indian Patent",
    status: "Published",
    year: "2024",
  },
  {
    title: "Digital Beamforming Architecture for AESA Radar",
    number: "Indian Patent",
    status: "Filed",
    year: "2025",
  },
  {
    title: "Multi-board Synchronization for RFSoC Radar Systems",
    number: "Indian Patent",
    status: "Published",
    year: "2024",
  },
];

export default function Patents() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="max-w-7xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Selected Patents
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-8">

          {patents.map((patent, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-slate-900 rounded-3xl p-8 border border-slate-700 hover:border-cyan-400 transition"
            >

              <FaAward className="text-cyan-400 text-4xl mb-6" />

              <h3 className="text-xl font-semibold text-white mb-4">
                {patent.title}
              </h3>

              <p className="text-gray-400">
                {patent.number}
              </p>

              <div className="flex justify-between mt-6">

                <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full">
                  {patent.status}
                </span>

                <span className="text-gray-300">
                  {patent.year}
                </span>

              </div>

              <button className="mt-8 flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
                Learn More
                <FaArrowRight />
              </button>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}