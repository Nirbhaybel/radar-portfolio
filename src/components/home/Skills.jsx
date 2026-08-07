import {
  FaMicrochip,
  FaPython,
  FaNetworkWired,
  FaCode,
} from "react-icons/fa";

import {
  MdRadar,
  MdMemory,
  MdDeveloperBoard,
} from "react-icons/md";

const skills = [
  {
    title: "AESA Radar",
    icon: <MdRadar size={45} />,
    color: "cyan",
  },
  {
    title: "AMD RFSoC",
    icon: <FaMicrochip size={45} />,
    color: "blue",
  },
  {
    title: "AMD Versal",
    icon: <MdDeveloperBoard size={45} />,
    color: "purple",
  },
  {
    title: "FPGA Design",
    icon: <FaCode size={45} />,
    color: "green",
  },
  {
    title: "VHDL / Verilog",
    icon: <FaCode size={45} />,
    color: "orange",
  },
  {
    title: "JESD204B/C",
    icon: <FaNetworkWired size={45} />,
    color: "pink",
  },
  {
    title: "PCIe / DDR",
    icon: <MdMemory size={45} />,
    color: "yellow",
  },
  {
    title: "MATLAB & Python",
    icon: <FaPython size={45} />,
    color: "red",
  },
];

export default function Skills() {
  return (
    <section className="bg-slate-900 py-24">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-white">
          Technical Expertise
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16">
          Technologies used in mission-critical radar and FPGA systems
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {skills.map((skill,index)=>(

            <div
              key={index}
              className="rounded-3xl bg-slate-800 p-10
              border border-slate-700
              hover:border-cyan-400
              hover:shadow-cyan-500/20
              hover:shadow-2xl
              transition-all
              duration-300
              hover:-translate-y-3"
            >

              <div className="text-cyan-400 mb-6">

                {skill.icon}

              </div>

              <h3 className="text-white text-xl font-semibold">

                {skill.title}

              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}