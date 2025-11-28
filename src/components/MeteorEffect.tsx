import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface MeteorProps {
  size: number;
  position: { x: number; y: number };
  delay: number;
  duration: number;
}

const Meteor: React.FC<MeteorProps> = ({ size, position, delay, duration }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-600"
      style={{
        width: size,
        height: size,
        left: position.x,
        top: position.y,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-white/30 blur-sm"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

interface MeteorEffectProps {
  className?: string;
  meteorCount?: number;
}

const MeteorEffect: React.FC<MeteorEffectProps> = ({ 
  className = "", 
  meteorCount = 20 
}) => {
  const [meteors, setMeteors] = useState<MeteorProps[]>([]);

  useEffect(() => {
    const generateMeteors = () => {
      const newMeteors: MeteorProps[] = [];
      for (let i = 0; i < meteorCount; i++) {
        newMeteors.push({
          size: Math.random() * 4 + 2,
          position: {
            x: Math.random() * 100,
            y: Math.random() * 100,
          },
          delay: Math.random() * 5,
          duration: Math.random() * 3 + 2,
        });
      }
      setMeteors(newMeteors);
    };

    generateMeteors();
  }, [meteorCount]);

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
      
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 via-transparent to-accent-500/10"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(234, 179, 8, 0.1) 100%)",
            "linear-gradient(225deg, rgba(139, 92, 246, 0.1) 0%, transparent 50%, rgba(59, 130, 246, 0.1) 100%)",
            "linear-gradient(45deg, rgba(234, 179, 8, 0.1) 0%, transparent 50%, rgba(139, 92, 246, 0.1) 100%)",
            "linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(234, 179, 8, 0.1) 100%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Meteors */}
      {meteors.map((meteor, index) => (
        <Meteor
          key={index}
          size={meteor.size}
          position={meteor.position}
          delay={meteor.delay}
          duration={meteor.duration}
        />
      ))}

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
    </div>
  );
};

export default MeteorEffect;
