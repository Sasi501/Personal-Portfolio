import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const codeSnippet = `const developer = {
  name: "SASIDHARAN C",
  role: "Full Stack Developer",
  focus: ["Software Engineer", "Full Stack Web Apps", "Data Analytics"],
  status: "Available",
  
  solveProblem: (problem) => {
    return this.buildSolution(problem);
  }
};`;

export default function Hero() {
  const [typedCode, setTypedCode] = useState('');
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < codeSnippet.length) {
        setTypedCode(codeSnippet.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 35);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 px-6 lg:px-12 max-w-7xl mx-auto z-10" id="home">
      
      {/* Background Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        
        {/* Left: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6"
        >

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            I build things <br />
            that <span className="text-gradient">work.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-lg font-light leading-relaxed">
            CSE student and Full Stack Developer specialized in building high-performance web apps and AI prototypes. Experienced with React, Node.js, Python, OpenCV, and embedded systems. Open to internships and early-career roles; I focus on clean code, fast delivery, and measurable impact.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a href="#contact" className="px-8 py-4 rounded-full bg-white text-black font-semibold flex items-center gap-2 hover:scale-105 transition-transform">
              Let's Connect <FiArrowRight />
            </a>

            <a href="/Sasidharan_Resume.pdf" download className="px-6 py-3 rounded-full bg-transparent border border-white/10 text-sm font-medium hover:bg-white/5 transition-colors">
              Download Resume
            </a>

            <a href="https://calendly.com/developersasi" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-green-600 text-white font-medium hover:bg-green-500 transition-colors">
              Schedule Interview
            </a>

            <div className="flex items-center gap-4 px-6 h-14 rounded-full glass-panel">
              <a href="https://github.com/sasidharan" target="_blank" className="text-gray-300 hover:text-white transition-colors"><FiGithub size={20} /></a>
              <a href="https://www.linkedin.com/in/sasi-dharan-18638024a" target="_blank" className="text-gray-300 hover:text-white transition-colors"><FiLinkedin size={20} /></a>
              <a href="mailto:csasi1928@gmail.com" className="text-gray-300 hover:text-white transition-colors"><FiMail size={20} /></a>
            </div>
          </div>
        </motion.div>

        {/* Right: Code snippet */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative group mt-10 lg:mt-0 lg:ml-auto w-full max-w-md"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative rounded-2xl bg-[#0d1117]/90 backdrop-blur border border-gray-800 p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed overflow-hidden shadow-2xl h-[320px]">
            {/* Window controls */}
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            
            <pre className="text-blue-300 whitespace-pre-wrap font-mono">
              <code>
                {typedCode}
                <span className="inline-block w-2.5 h-5 bg-blue-500 ml-1 animate-pulse align-middle"></span>
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
