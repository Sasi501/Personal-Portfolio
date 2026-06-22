import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-40 py-5 px-6 flex justify-between items-center glass-panel mx-4 mt-4 lg:mx-auto lg:max-w-6xl"
    >
      <div className="text-xl font-bold font-display tracking-tighter">
        Sasi<span className="text-blue-500">.dev</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium">
        <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
        <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
        <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
        <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
      </div>
      <a 
        href="#contact" 
        className="px-5 py-2.5 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/30 rounded-full text-sm font-medium transition-all hover-shimmer overflow-hidden text-blue-400 relative"
      >
        <span className="relative z-10">Hire Me</span>
      </a>
    </motion.nav>
  );
}
