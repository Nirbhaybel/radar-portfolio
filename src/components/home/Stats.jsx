import { motion } from "framer-motion";

const stats = [
  {
    number: "11+",
    title: "Years Experience",
  },
  {
    number: "7+",
    title: "Patents",
  },
  {
    number: "10+",
    title: "IEEE Publications",
  },
  {
    number: "160+",
    title: "Radar Boards Syncronization",
  },
];

export default function Stats() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Professional Highlights
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              className="rounded-3xl bg-slate-900 border border-slate-800 p-10 text-center shadow-xl hover:border-cyan-400 hover:shadow-cyan-500/20 transition-all"
            >
              <h3 className="text-5xl font-bold text-cyan-400">
                {item.number}
              </h3>

              <p className="mt-5 text-gray-300 text-lg">
                {item.title}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}