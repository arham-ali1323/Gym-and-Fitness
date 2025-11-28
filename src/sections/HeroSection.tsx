import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ArrowRight, Play, Star } from 'lucide-react';
import { cn } from '../utils/cn';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -400]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <section id="home" className={cn("relative min-h-screen flex items-center justify-center overflow-hidden", className)}>
      {/* Parallax Background Layers */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: y1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-accent-900/20" />
      </motion.div>

      <motion.div 
        className="absolute inset-0"
        style={{ y: y2 }}
      >
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/20 rounded-full blur-3xl" />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism text-white mb-6"
          variants={itemVariants}
        >
          <Star className="w-4 h-4 text-accent-400" />
          <span className="text-sm font-medium">Premium Fitness Experience</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          variants={itemVariants}
        >
          <span className="gradient-text">Transform Your Body</span>
          <br />
          <span className="text-white">Elevate Your Life</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Join the ultimate fitness destination with state-of-the-art equipment, 
          expert trainers, and a community that motivates you to be your best self.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          variants={itemVariants}
        >
          <motion.button
            className="px-8 py-4 bg-primary-500 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <motion.button
            className="px-8 py-4 glass-morphism text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-5 h-5" />
            Watch Tour
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          {[
            { number: "10K+", label: "Members" },
            { number: "50+", label: "Expert Trainers" },
            { number: "100+", label: "Classes Weekly" },
            { number: "4.9", label: "Average Rating" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 text-4xl animate-float"
        animate={{
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        💪
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-10 text-4xl animate-float"
        animate={{
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🏃
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-20 text-4xl animate-float"
        animate={{
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🧘
      </motion.div>
    </section>
  );
};

export default HeroSection;
