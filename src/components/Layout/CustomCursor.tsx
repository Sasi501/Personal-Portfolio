import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-blue-400 rounded-full pointer-events-none z-50 mix-blend-screen hidden md:block"
        animate={{ x: mousePosition.x - 6, y: mousePosition.y - 6 }}
        transition={{ type: 'spring', stiffness: 800, damping: 28, mass: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 bg-blue-600/20 rounded-full pointer-events-none z-40 blur-3xl hidden md:block"
        animate={{ x: mousePosition.x - 64, y: mousePosition.y - 64 }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.8 }}
      />
    </>
  );
}
