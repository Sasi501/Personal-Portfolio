import { motion } from 'framer-motion';

const skills = [
  { category: 'Languages', items: ['C++', 'Java', 'Python', 'TypeScript', 'JavaScript'] },
  { category: 'Web', items: ['React', 'Node.js', 'REST APIs', 'HTML/CSS', 'Tailwind CSS'] },
  { category: 'Database', items: ['MongoDB', 'MySQL'] },
  { category: 'Tools', items: ['GitHub', 'Figma', 'Blender', 'Godot', 'VS Code'] },
  { category: 'Concepts', items: ['Data Structures & Alg', 'Operating Systems', 'Computer Networks', 'ML Basics'] },
];

export default function Skills() {
  return (
    <section className="relative py-24 px-6 lg:px-12 max-w-7xl mx-auto z-10" id="skills">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px bg-violet-600/50 w-12 hidden md:block"></div>
          <h2 className="text-4xl font-bold font-display tracking-tight">Technical Arsenal</h2>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skillGroup, index) => (
           <motion.div 
             key={skillGroup.category}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.5, delay: index * 0.1 }}
             className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors border border-white/5 hover:border-white/20 group"
           >
             <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500"></span>
               {skillGroup.category}
             </h3>
             <div className="flex flex-wrap gap-2">
               {skillGroup.items.map(item => (
                 <span 
                   key={item}
                   className="px-3 py-1.5 text-sm font-medium rounded-lg bg-gray-900 border border-gray-800 text-gray-300 group-hover:border-blue-500/30 group-hover:text-white transition-colors cursor-default"
                 >
                   {item}
                 </span>
               ))}
             </div>
           </motion.div>
        ))}
      </div>
    </section>
  );
}
