import { motion } from "framer-motion";

export default function Home() {

    return (

        <div>

            <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white">

                <div className="max-w-7xl mx-auto px-8 py-24">

                    <motion.h1

                        initial={{opacity:0,y:20}}

                        animate={{opacity:1,y:0}}

                        className="text-6xl font-bold"

                    >

                        Nirbhay Kumar Singh

                    </motion.h1>

                    <p className="text-2xl mt-6">

                        Principal FPGA • RF Systems • Radar Engineer

                    </p>

                    <p className="mt-8 max-w-3xl text-lg text-gray-300">

                        11+ years of experience designing
                        Direct RF Sampling radar systems,
                        FPGA architectures,
                        RFSoC platforms,
                        Digital Beamforming,
                        High-Speed Embedded Systems
                        and Mixed-Signal Hardware.

                    </p>

                    <div className="mt-10 flex gap-5">

                        <a

                            href="/publications"

                            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"

                        >

                            Publications

                        </a>

                        <a

                            href="/projects"

                            className="border border-white px-6 py-3 rounded-lg"

                        >

                            Projects

                        </a>

                    </div>

                </div>

            </section>

        </div>

    );

}