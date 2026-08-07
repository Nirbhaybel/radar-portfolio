import { patents } from "../data/patents";
import {
  Calendar,
  FileText,
  ExternalLink,
  Shield,
} from "lucide-react";

export default function Patents() {
  return (
    <section className="min-h-screen bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white">
            Patents
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            Intellectual Property, Innovation & Patent Portfolio
          </p>
        </div>

        {/* Patent Cards */}

        <div className="space-y-10">

          {patents.map((patent) => (

            <div
              key={patent.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-10 hover:border-cyan-400 transition duration-300"
            >

              <h2 className="text-3xl font-bold text-white leading-tight">
                {patent.title}
              </h2>

              <p className="mt-6 text-cyan-400 font-semibold">
                Application No. {patent.applicationNo}
              </p>

              <div className="flex flex-wrap gap-8 mt-6 text-gray-400">

                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  {patent.year}
                </div>

                <div className="flex items-center gap-2">
                  <Shield size={18} />
                  {patent.status}
                </div>

                <div>
                  {patent.category}
                </div>

              </div>

              <p className="mt-8 text-gray-300 leading-8">
                {patent.description}
              </p>

              <div className="mt-6 text-gray-400">
                <strong>Inventors:</strong> {patent.inventors}
              </div>

              <div className="mt-2 text-gray-400">
                <strong>Organization:</strong> {patent.organization}
              </div>

              <div className="flex flex-wrap gap-4 mt-10">

                <a
                  href={patent.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-xl text-white font-semibold transition"
                >
                  <FileText size={18} />
                  Show Patent
                </a>

                {patent.patentUrl && (
                  <a
                    href={patent.patentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-xl transition"
                  >
                    <ExternalLink size={18} />
                    Google Patent
                  </a>
                )}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}