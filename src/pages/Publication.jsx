import { motion } from "framer-motion";
import {
  FaFilePdf,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const publications = [
  {
    title:
      "Phase Noise Effects on Micro-Doppler Extraction for Radar Target Classification using Machine Learning",

    conference: "IEEE APMC 2024",

    location: "Bali, Indonesia",

    year: "2024",

    authors:
      "Nirbhay Kumar Singh; Malwinder Singh; Shaik Abdul Subhan; Seema",

    abstract:
     "The extraction of Micro-Doppler (M-D) signatures from radar signals is critical for classifying various targets. This study uses Machine Learning techniques to investigate the impact of phase noise on micro-Doppler extraction. Experiments are conducted with varying phase noise intensities to assess its influence on classification performance. Detailed micro-Doppler simulations for different objects illustrate how phase noise impacts their distinctive signatures. Using the micro-Doppler signal-to-noise ratio (MSNR), results show that increasing carrier frequency does not enhance the extraction performance of micro-motion features.",
    pdf: "/publication/papers/Phase_noise.pdf",

    doi: "https://ieeexplore.ieee.org/document/10867536",
  },

    {
    title:
       "Ultra-Low Phase Noise, Digital Transceiver for High Range Resolution Pulsed Agile Radar",

    conference: "2023 IEEE Radio and Antenna Days of the Indian Ocean (RADIO)",


    location: "Balaclava, Mauritius ",

    year: "2023",

    authors:
      "Nirbhay Kumar Singh; Vikas Kumar; T. Venkatamuni",

    abstract:
      "In the modern age, highly sensitive advanced radar systems require very stable and accurate radar waveforms for micro-Doppler signature analysis and smaller Radar Cross section (RCS) detection. Also, to combat RADARjammers and in naval applications, wideband radars operate at multiple spot frequencies in pulse agility mode. This paper discusses designing a wide-band digital transceiver using RF DAC and ADC with ultra-low phase noise and High-speed switching for pulsed agile radar. Two methods using RF DAC are being discussed and compared for low-phase noise waveform generation. Switching times of less than 500ns have been achieved for the transmit pulse in the agility mode.",

    pdf: "/publication/papers/Ultra_Low_Phase_Noise.pdf",

    doi: "https://ieeexplore.ieee.org/document/10146099",
  },


    {
    title:
       "Multi board Synchronisation of n-Channel Direct RF Digital Transceiver for Active Phased Array Radar using JESD204B Interface",

     conference:
      "IEEE 9th International Conference for Convergence in Technology (I2CT) ",


    location: "Pune, India ",

    year: "2024",

    authors:
      "Nirbhay Kumar Singh",

    abstract:
      "Achieving synchronization in multi-channel transmit and receive systems has traditionally involved complex length-matched channel designs, posing challenges, particularly in higher-order channels. This paper introduces an innovative approach to multi-board synchronization of n-channel direct RF digital transceivers utilizing the high-speed serial JESD204 protocol, which leverages RF PLLs, high-speed serial DACs, and ADCs. The synchronization technique discussed herein significantly impacts digital beamforming (DBF) in active phased array RADAR systems. Instead of relying on a matched device clock or SYSREF signal, the proposed method employs phase delay calculation and PLL reprogramming to adjust phase differences among channels.Synchronization is accomplished through online phase delay calculation within the FPGA using cross-correlation techniques between channels. Notably, this approach eliminates the need for a matched device clock or SYSREF signal, thereby reducing PCB complexity. Results underscore the method's efficacy, making it an efficient solution for active phased array RADAR systems, while a new method has been explored to analyze the impact of random phase changes on digital beamforming.",
    pdf: "/publication/papers/Multi_board.pdf",

    doi: "https://ieeexplore.ieee.org/document/10543803",
  },


    {
    title:
       "Advanced Deep Learning Technique for Digital Predistortion to Improve Power Amplifier Linearity",
     conference:
      "IEEE SPACE 2026 ",


    location: "Bangalore, India ",

    year: "2026",

    authors:
      "Nirbhay Kumar Singh",

    abstract:
      "Power amplifiers (PAs) are crucial in RF RADAR and communication systems, but their nonlinearities often degrade signal quality. This paper presents advanced deep learning techniques, specifically 1D-Convolutional Neural Networks (1DCNNs) and Long Short-Term Memory (LSTM) networks, to enhance digital pre-distortion (DPD) and improve PA linearity. The method addresses complex nonlinear distortions more effectively than traditional models based on memory polynomials by using CNNs for spatial feature extraction and LSTMs for temporal dependencies. Experimental results show significant improvements in signal fidelity, with reduced inter-modulation distortion (IMD) and enhanced adjacent channel power ratio (ACPR). This study highlights the potential of deep learning to advance DPD techniques by comparing results obtained from conventional DPD methods and optimizing PA performance in modern RADAR and communication systems.",
    pdf: "/publication/papers/1571249925_final.pdf",

    doi: "#",
  },


    {
    title:
      "A Wide-band SWaP System for VSWR and Power Measurement with Temperature Compensation Technique",
    
      conference:
      " IEEE Microwaves, Antennas, and Propagation Conference (MAPCON) ",


    location: "Bangalore, India ",

    year: "2022",

    authors:
      "Nirbhay Kumar Singh; T. Venkatamuni",

    abstract:
      "Modern high-power systems like Radars and communication need very accurate and temperature invariant systems to measure the transmitted power and VSWR to insure the proper operation of these equipment. This paper discusses the design of a wide-band SWaP (size, weight, and power) system for VSWR and power measurement with very high accuracy and dynamic range with different duty cycles of operation. Measurement accuracy is achieved using digital RF signal processing and voltage mapping techniques. This paper also discusses the temperature compensation technique for a wide band temperature of operation (-10°C to +70°C) with less than or equal to ±0.3 dB of measurement of accuracy. Finally, the results of L & S - Bands with various power levels and temperatures are presented.",
    pdf: "/publication/papers/A_Wide_band.pdf",

    doi: "https://ieeexplore.ieee.org/document/10047646",
  },

    {
    title:
       "A Programmable,Multimode Operational 3U-VPX Based Digital Transceiver & Processing Module For CIT-MKXIIA IFF",

    conference: "International Conference for Advancement in Technology (ICONAT)2023 IEEE Radio and Antenna Days of the Indian Ocean (RADIO)",


    location: "Goa, India",

    year: "2023",

    authors:
      "Nirbhay Kumar Singh; C Fouziya; Vikas Kumar; T Venkatamuni",

    abstract:
      "IThis paper relates to the realization of 3U-VPX based programmable Digital Transceiver to support different modes (1, 2, 3, A, B, C, D, S and Mode5) and configurations of Identification of Friend and Foe (IFF) systems. L-Band signals are directly digitized and generated using high speed serializer (JESD204B) based RF-DAC and RF-ADC. Minimal and generic hardware with programmability of critical functions results in realizing a compact transceiver module which can be used in variants of IFF i.e. Interrogator, Transponder and CIT (Combined Interrogator and Transponder). This paper also discusses about the timing synchronization of ADC, DAC and FPGA with inbuilt processor using digitally programmable delays among clock sources. Module performs the role of signal processing and data processing as well for different modes of operation.",
    pdf: "/publication/papers/A_ProgrammableMultimode.pdf",

    doi: "https://ieeexplore.ieee.org/document/10080650",
  },

    {
    title:
       "A Method to Enhance Power Amplifier Linearity Using Time Delay Estimation & Correction Technique",

    conference: "International Conference for Advancement in Technology (ICONAT)",


    location: "Goa, India",

    year: "2022",

    authors:
      "Nirbhay Kumar Singh; T. Venkatmuni; M C Devindra",

    abstract:
      "Power amplifier, a critical component of the RF chain, is the main source that is responsible for signal distortion. Its nonlinear behavior must be taken into consideration for efficient design to cater the need for high data links. In this paper, techniques for mitigation of distortion for catering needs of the modern era of communication system via feasible digital pre-distortion method have been implemented. Memory effect parameters of the Power amplifiers are calculated with time delay estimation & correction technique such that it behaves as a linear system. These parameters are calculated using the cross-correlation technique.",
    pdf: "/publication/papers/A_Method_to_Enhance_Power_Amplifier_Linearity_Using_Time_Delay_Estimation_amp_Correction_Technique.pdf",

    doi: "https://ieeexplore.ieee.org/document/9725877",
  },
  // Add more papers here
];

export default function Publications() {
  return (
    <section className="min-h-screen bg-slate-950 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-white text-center"
        >
          Publications
        </motion.h1>

        <p className="text-center text-gray-400 mt-6 mb-20">
          IEEE Publications, Conference Papers and Technical Articles
        </p>

        <div className="space-y-10">

          {publications.map((paper, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-3xl p-10 border border-slate-800 hover:border-cyan-400 transition"
            >

              <h2 className="text-3xl font-bold text-white">
                {paper.title}
              </h2>

              <p className="mt-5 text-cyan-400 font-semibold">
                {paper.authors}
              </p>

              <div className="flex flex-wrap gap-8 mt-5 text-gray-400">

                <div className="flex items-center gap-2">
                  <FaCalendarAlt />
                  {paper.year}
                </div>

                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt />
                  {paper.location}
                </div>

                <div>
                  {paper.conference}
                </div>

              </div>

              <p className="mt-8 text-gray-300 leading-8">
                {paper.abstract}
              </p>

              <div className="flex gap-5 mt-10">

                <a
                  href={paper.pdf}
                  className="bg-cyan-500 px-6 py-3 rounded-xl text-white hover:bg-cyan-400"
                >
                  <FaFilePdf className="inline mr-2" />
                  PDF
                </a>

                <a
                  href={paper.doi}
                  className="border border-cyan-400 px-6 py-3 rounded-xl text-cyan-400 hover:bg-cyan-400 hover:text-black"
                >
                  <FaExternalLinkAlt className="inline mr-2" />
                  DOI
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}