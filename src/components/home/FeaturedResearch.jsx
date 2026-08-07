import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


//import apmcImage from "../assets/images/profile.png";
//import radarImage from "../assets/images/profile.png";
const research = [
  {
    title:
      "Phase Noise Effects on Micro-Doppler Extraction for Radar Target Classification using Machine Learning",

    conference:
      "IEEE APMC 2024 • Bali, Indonesia",

    description:
      "Investigated the influence of oscillator phase noise on micro-Doppler feature extraction and machine learning based radar target classification.",

    image: "/publication/images/apmc1.jpeg",
    link: "https://ieeexplore.ieee.org/document/10867536",
  },

  {
    title:
      "Ultra-Low Phase Noise, Digital Transceiver for High Range Resolution Pulsed Agile Radar",

    conference:
      "2023 IEEE Radio and Antenna Days of the Indian Ocean (RADIO),Balaclava, Mauritius ",

    description:
      "This paper discusses designing a wide-band digital transceiver using RF DAC and ADC with ultra-low phase noise and High-speed switching for pulsed agile radar. Two methods using RF DAC are being discussed and compared for low-phase noise waveform generation. Switching times of less than 500ns have been achieved for the transmit pulse in the agility mode.",

    image: "/publication/images/radio.jpeg",
    link: "https://ieeexplore.ieee.org/document/10146099",
  },
    {
    title:
      "Multi board Synchronisation of n-Channel Direct RF Digital Transceiver for Active Phased Array Radar using JESD204B Interface",

    conference:
      "IEEE I2CT 2024 ",

    description:
      "Designed scalable FPGA architecture supporting multi-board synchronization, JESD204B/C and digital beamforming for AESA radar systems.",

    image: "/publication/images/i2c.jpeg",
    link: "https://ieeexplore.ieee.org/document/10543803",
  },

    {
    title:
      "A Wide-band SWaP System for VSWR and Power Measurement with Temperature Compensation Technique",
    
      conference:
      " 2022 IEEE Microwaves, Antennas, and Propagation Conference (MAPCON) ",

    description:
      "This paper discusses the design of a wide-band SWaP (size, weight, and power) system for VSWR and power measurement with very high accuracy and dynamic range with different duty cycles of operation.",

    image: "/publication/images/mapcon2.png",
    link: "https://ieeexplore.ieee.org/document/10047646",
  },
];

export default function FeaturedResearch() {
  return (
    <section className="bg-slate-900 py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-white"
            >
              Featured Research
            </motion.h2>

            <p className="text-gray-400 mt-5 max-w-2xl">
              Selected publications and research contributions in FPGA,
              embedded systems and radar engineering.
            </p>
          </div>

          <Link
            to="/publications"
            className="mt-6 md:mt-0 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-lg transition"
          >
            View All Publications
            <FaArrowRight />
          </Link>

        </div>

        <div className="space-y-12">

          {research.map((paper, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-10 bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-400 transition"
            >

            <div className="flex items-center justify-center bg-slate-900 p-4">
            <img
            src={paper.image}
            alt={paper.title}
            className="w-full h-auto max-h-[450px] object-contain"
             />
            </div>

              <div className="p-10">

                <h3 className="text-3xl font-bold text-white leading-snug">
                  {paper.title}
                </h3>

                <p className="text-cyan-400 mt-4">
                  {paper.conference}
                </p>

                <p className="text-gray-300 mt-8 leading-8">
                  {paper.description}
                </p>

                <a
  href={paper.link}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-10 inline-flex items-center gap-3 text-cyan-400 hover:text-cyan-300 hover:gap-5 transition-all font-semibold"
>
  Read Publication
  <FaArrowRight />
</a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}