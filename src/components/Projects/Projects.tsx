import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: "AI-Based Crowd Management",
    description: "Intelligent system for real-time crowd density estimation. I built the complete backend architecture and integrated computer vision pipelines to analyze live feeds accurately.",
    tags: ["Python", "OpenCV", "TensorFlow", "React", "Node.js"],
    github: "https://github.com/sasidharan",
    demo: "#",
    highlight: true,
  },
  {
    title: "Community Event Platform",
    description: "A centralized platform for organizing and discovering local tech events. I developed the scalable REST APIs and the interactive frontend dashboard.",
    tags: ["MongoDB", "Express", "React"],
    github: "https://github.com/sasidharan",
    demo: "#",
    highlight: false,
  },
  {
    title: "IR-Based Traffic Density Detection",
    description: "Hardware-software integrated system capturing IR sensor arrays to optimize traffic light timing. Showcases my embedded systems knowledge paired with data layer APIs.",
    tags: ["Embedded C++", "IoT", "Python"],
    github: "https://github.com/sasidharan",
    demo: "#",
    highlight: false,
  },
  {
    title: "Online Grocery App",
    description: "Feature-rich e-commerce platform for grocery delivery with real-time inventory tracking, built to handle concurrent orders smoothly.",
    tags: ["React Native", "Firebase", "Node.js"],
    github: "https://github.com/sasidharan",
    demo: "#",
    highlight: false,
  }
];

function InteractiveCard({ project }: { project: any }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`glass-panel p-8 rounded-3xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-2 ${project.highlight ? 'ring-2 ring-violet-500/50 shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]' : 'hover:border-blue-500/30 border-white/5'}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.15), transparent 80%)`
        }}
      />
      {project.highlight && (
        <div className="absolute top-0 right-8 px-3 py-1 bg-violet-600 rounded-b-xl text-xs font-bold text-white shadow-lg z-10">
          STAR PROJECT
        </div>
      )}
      
      <h3 className="text-2xl font-bold font-display tracking-tight mb-4 group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-400 leading-relaxed mb-8 relative z-10">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8 mt-auto relative z-10">
        {project.tags.map((tag: string) => (
          <span key={tag} className="px-2.5 py-1 bg-gray-900/50 rounded-md text-xs font-medium text-gray-300 border border-gray-800">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center gap-4 relative z-10">
        <a href={project.github} className="flex items-center gap-2 text-sm font-semibold hover:text-white text-gray-400 transition-colors">
          <FiGithub /> Source
        </a>
        {project.demo !== "#" && (
          <a href={project.demo} className="flex items-center gap-2 text-sm font-semibold hover:text-blue-400 text-gray-400 transition-colors ml-auto">
             Demo <FiExternalLink />
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="relative py-24 px-6 lg:px-12 max-w-7xl mx-auto z-10" id="projects">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px bg-blue-600/50 w-12 hidden md:block"></div>
          <h2 className="text-4xl font-bold font-display tracking-tight">Featured Work</h2>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="h-full"
          >
            <InteractiveCard project={proj} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
