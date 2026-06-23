import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="relative min-h-screen py-24 px-6 lg:px-12 max-w-7xl mx-auto z-10 flex flex-col justify-center" id="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px bg-blue-600/50 w-12 hidden md:block"></div>
          <h2 className="text-4xl font-bold font-display tracking-tight">About Me</h2>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            Hi — I'm Sasidharan Chandran, a Computer Science & Design student building production-quality full-stack applications and AI-driven systems. I bridge frontend UX and backend reliability, focusing on performance, testability, and maintainability.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            Experience includes a Quality Control internship at Versa Drives and projects spanning real-time computer vision, embedded IoT systems, and scalable web platforms. Skilled in React, Node.js, MongoDB, Python (OpenCV, TensorFlow), and Embedded C++. AWS Cloud Practitioner certified.
          </p>

          <div className="mt-4">
            <h4 className="text-white font-semibold mb-2">Quick Highlights</h4>
            <ul className="list-disc ml-5 text-gray-400 space-y-1">
              <li>B.E. Computer Science & Design, SKCET (2024–2027)</li>
              <li>Diploma in Electronics & Communication (2021–2024)</li>
              <li>AWS Cloud Practitioner; Coursera & NPTEL coursework in AI, DSA, React</li>
              <li>Strong in React, Node.js, MongoDB, Python, OpenCV, Embedded C++</li>
              <li>Available for internships and early-career roles</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 hover:cursor-default">
            <div className="glass-panel p-4 rounded-xl flex flex-col gap-2 relative overflow-hidden group border border-white/5 hover:border-blue-500/30 transition-colors">
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <span className="text-4xl font-display font-bold text-white">5</span>
              <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">Completed FS Projects</span>
            </div>
            <div className="glass-panel p-4 rounded-xl flex flex-col gap-2 relative overflow-hidden group border border-white/5 hover:border-violet-500/30 transition-colors">
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <span className="text-4xl font-display font-bold text-white">2</span>
              <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">Ongoing Projects</span>
            </div>
            <div className="glass-panel p-4 rounded-xl flex flex-col gap-2 relative overflow-hidden group border border-white/5 hover:border-blue-500/30 transition-colors">
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <span className="text-4xl font-display font-bold text-white">1</span>
              <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">AI/ML Project</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Image Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:col-span-5 relative"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 rounded-2xl overflow-hidden glass-panel p-2 shadow-2xl group border border-white/10"
          >
            <div className="relative rounded-xl overflow-hidden filter grayscale hover:grayscale-0 transition-all duration-700 aspect-[4/5] bg-gray-900 border border-white/5">
              <img
                src="https://res.cloudinary.com/dlojczyja/image/upload/v1782114635/ChatGPT_Image_Jun_22_2026_01_10_25_PM_xonvv0.png"
                alt="SASIDHARAN C"
                className="w-full h-full object-cover mix-blend-lighten scale-105 group-hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent mix-blend-overlay"></div>


            </div>
          </motion.div>

          {/* <div className="absolute -inset-4 border border-blue-500/20 rounded-3xl -z-10 translate-x-4 translate-y-4"></div> */}
          {/* <div className="absolute -inset-4 border border-violet-500/20 rounded-3xl -z-10 -translate-x-4 -translate-y-4"></div> */}
        </motion.div>

      </div>
    </section>
  );
}
