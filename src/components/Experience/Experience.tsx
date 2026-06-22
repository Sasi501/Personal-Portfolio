import { motion } from 'framer-motion';

const certs = [
  { name: "AWS Cloud Practitioner Essentials", issuer: "AWS", year: "2023" },
  { name: "Infosys Springboard (DSA, React, Java)", issuer: "Infosys", year: "2023" },
  { name: "Intro to AI", issuer: "Coursera", year: "2022" },
  { name: "Ethics in Engineering", issuer: "NPTEL", year: "2022" },
];

export default function Experience() {
  return (
    <section className="relative py-24 px-6 lg:px-12 max-w-7xl mx-auto z-10" id="experience">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Experience Timeline */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-4xl font-bold font-display tracking-tight">Experience</h2>
            <div className="h-px bg-violet-600/50 flex-grow hidden md:block"></div>
          </div>

          <div className="relative border-l border-white/10 ml-3 md:ml-4 space-y-12">
            
            {/* Experience Node */}

            {/* Versa Drives */}
            <div className="relative pl-8">
              <div className="absolute w-4 h-4 rounded-full bg-gray-600 -left-[9px] top-1.5 border-2 border-[#030712]"></div>
              <h3 className="text-xl font-bold font-display text-gray-200">Quality Control Intern</h3>
              <p className="text-gray-400 text-sm mb-4 mt-1">Versa Drives</p>
              <ul className="list-disc pl-4 space-y-2 text-gray-400 text-sm">
                <li>Analyzed hardware manufacturing pipelines to ensure zero-defect product runs.</li>
                <li>Gained practical exposure to embedded controllers and systems integration.</li>
              </ul>
            </div>

          </div>
        </motion.div>

        {/* Certifications Group */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px bg-violet-600/50 flex-grow hidden md:block"></div>
            <h2 className="text-4xl font-bold font-display tracking-tight text-right w-full md:w-auto">Certifications</h2>
          </div>

          <div className="flex flex-col gap-4">
            {certs.map((cert) => (
              <div key={cert.name} className="glass-panel p-5 rounded-2xl flex items-center justify-between group hover:border-violet-500/30 transition-all duration-300 pr-6 border-white/5 hover:bg-white/5">
                <div>
                  <h4 className="font-semibold text-white group-hover:text-violet-400 transition-colors">{cert.name}</h4>
                  <p className="text-sm text-gray-400">{cert.issuer}</p>
                </div>
                <div className="text-lg font-mono font-bold text-gray-500">
                  {cert.year}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
