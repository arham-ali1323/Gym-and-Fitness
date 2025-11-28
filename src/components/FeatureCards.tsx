import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Zap, Heart, Shield, Sparkles } from 'lucide-react';
import { cn } from '../utils/cn';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  index: number;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon, 
  features, 
  index,
  className 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn(
        "relative group cursor-pointer",
        className
      )}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
    >
      {/* Card Container */}
      <motion.div
        className="glass-morphism rounded-2xl p-8 h-full relative overflow-hidden"
        style={{
          background: isHovered 
            ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))' 
            : 'rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Glow Effect */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center mb-6"
            animate={{
              rotate: isHovered ? 360 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-2xl font-bold text-white mb-4"
            animate={{
              color: isHovered ? '#3b82f6' : '#ffffff',
            }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-gray-300 mb-6"
            animate={{
              opacity: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>

          {/* Features List */}
          <div className="space-y-2 mb-6">
            {features.map((feature, featureIndex) => (
              <motion.div
                key={featureIndex}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: featureIndex * 0.1 }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-accent-400"
                  animate={{
                    scale: isHovered ? [1, 1.5, 1] : 1,
                  }}
                  transition={{
                    duration: 1,
                    repeat: isHovered ? Infinity : 0,
                    delay: featureIndex * 0.1,
                  }}
                />
                <span className="text-gray-400 text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Arrow */}
          <motion.div
            className="flex items-center gap-2 text-primary-400 font-medium"
            animate={{
              x: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-4 right-4 text-2xl"
          animate={{
            rotate: [0, 10, -10, 0],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles className="w-6 h-6 text-accent-400" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

interface FeatureCardsProps {
  className?: string;
}

const FeatureCards: React.FC<FeatureCardsProps> = ({ className }) => {
  const features = [
    {
      title: "Expert Trainers",
      description: "Certified professionals dedicated to helping you achieve your fitness goals with personalized guidance.",
      icon: <Star className="w-8 h-8 text-white" />,
      features: ["Certified Professionals", "Personalized Plans", "24/7 Support", "Progress Tracking"]
    },
    {
      title: "Modern Equipment",
      description: "State-of-the-art fitness equipment from top brands to ensure effective and safe workouts.",
      icon: <Zap className="w-8 h-8 text-white" />,
      features: ["Latest Technology", "Regular Maintenance", "Variety of Machines", "Free Weights"]
    },
    {
      title: "Wellness Focus",
      description: "Holistic approach to health combining physical fitness with mental wellness and nutrition.",
      icon: <Heart className="w-8 h-8 text-white" />,
      features: ["Yoga Classes", "Meditation", "Nutrition Plans", "Stress Management"]
    },
    {
      title: "Safe Environment",
      description: "Clean, spacious facility with strict safety protocols and comfortable atmosphere.",
      icon: <Shield className="w-8 h-8 text-white" />,
      features: ["Sanitized Regularly", "Spacious Layout", "Emergency Support", "Secure Lockers"]
    }
  ];

  return (
    <div className={cn("py-20 px-4", className)}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="gradient-text">Why Choose</span>
            <span className="text-white"> FitZone</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Experience the difference with our premium facilities, expert guidance, and supportive community.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              features={feature.features}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
