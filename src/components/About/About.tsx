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
            I'm a developer who cares about both the code underneath and the user experience on top. I believe the best applications don't just solve problems—they do so smoothly and beautifully.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            My journey started with a <span className="text-white font-medium">Diploma in ECE</span>, where I learned how things connect at a hardware level. But I craved the ability to build and scale faster, which led me to a <span className="text-white font-medium">B.E. in Computer Science and Design (CSD)</span>. This unique blend allows me to approach development with both engineering logic and an eye for aesthetics.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Whether I'm building AI-driven solutions or full-stack platforms, my goal is always to create highly functional art.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 hover:cursor-default">
            <div className="glass-panel p-4 rounded-xl flex flex-col gap-2 relative overflow-hidden group border border-white/5 hover:border-blue-500/30 transition-colors">
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <span className="text-4xl font-display font-bold text-white">3</span>
              <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">Full Stack Projects</span>
            </div>
            <div className="glass-panel p-4 rounded-xl flex flex-col gap-2 relative overflow-hidden group border border-white/5 hover:border-violet-500/30 transition-colors">
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <span className="text-4xl font-display font-bold text-white">1</span>
              <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">AI/ML Project</span>
            </div>
            <div className="glass-panel p-4 rounded-xl flex flex-col gap-2 relative overflow-hidden group border border-white/5 hover:border-blue-500/30 transition-colors">
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <span className="text-4xl font-display font-bold text-white">AWS</span>
              <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">Certified</span>
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
                alt="Sasidharan Chandran"
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
