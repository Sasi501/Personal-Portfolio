import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';

export default function Contact() {
  return (
    <section className="relative py-24 px-6 lg:px-12 max-w-7xl mx-auto z-10" id="contact">
      
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-semibold text-green-400">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
          Available for Internships
        </span>
        <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-4">Let's build something.</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Whether you're a hiring manager, a startup founder, or just someone who wants to talk code—my inbox is always open.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mt-12 bg-[#0d1117] border border-gray-800 rounded-3xl p-6 lg:p-12 shadow-2xl relative overflow-hidden">
        
        {/* Glow behind form */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none"></div>

        {/* Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-8 relative z-10"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Reach Out</h3>
            <p className="text-gray-400 text-sm">Drop a message or find me on my socials.</p>
          </div>
          
          <div className="space-y-4">
            <a href="mailto:sasidharan@example.com" className="flex items-center gap-4 p-4 rounded-2xl glass-panel group hover:bg-white/5 transition-all border-white/5">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <FiMail size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Email</p>
                <p className="text-sm text-gray-400">sasidharan@example.com</p>
              </div>
            </a>
            
            <a href="https://linkedin.com/in/sasidharan" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl glass-panel group hover:bg-white/5 transition-all border-white/5">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-[#0A66C2] group-hover:text-white transition-all">
                <FiLinkedin size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-white">LinkedIn</p>
                <p className="text-sm text-gray-400">Connect with me</p>
              </div>
            </a>

            <a href="https://github.com/sasidharan" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl glass-panel group hover:bg-white/5 transition-all border-white/5">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all">
                <FiGithub size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-white">GitHub</p>
                <p className="text-sm text-gray-400">Explore my repos</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 relative z-10"
        >
          <form action="https://formspree.io/f/placeholder" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  className="w-full bg-[#030712]/50 border border-gray-700 focus:border-blue-500 rounded-xl px-4 py-3 text-white outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  className="w-full bg-[#030712]/50 border border-gray-700 focus:border-blue-500 rounded-xl px-4 py-3 text-white outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5} 
                required
                className="w-full bg-[#030712]/50 border border-gray-700 focus:border-blue-500 rounded-xl px-4 py-3 text-white outline-none transition-colors resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              Send Message <FiSend />
            </button>
          </form>
        </motion.div>
      </div>

      <div className="mt-24 text-center pb-8 border-t border-gray-800/50 pt-8 text-gray-500 text-sm">
        <p>Built with React & Tailwind CSS. Designed by Sasidharan.</p>
      </div>
    </section>
  );
}
