import React, { useState } from 'react';
import { motion, AnimatePresence, useAnimation, Variants } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/mockData';
import { cn } from '../utils/cn';

interface TestimonialCardProps {
  testimonial: typeof testimonials[0];
  isActive: boolean;
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  testimonial, 
  isActive, 
  index, 
  total,
  onPrev,
  onNext
}) => {
  const controls = useAnimation();

  React.useEffect(() => {
    if (isActive) {
      controls.start({
        scale: 1,
        rotateY: 0,
        zIndex: 10,
        opacity: 1,
        filter: 'brightness(1)',
      });
    } else {
      controls.start({
        scale: 0.8,
        rotateY: 25,
        zIndex: 1,
        opacity: 0.7,
        filter: 'brightness(0.7)',
      });
    }
  }, [isActive, controls]);

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      rotateY: 90, 
      scale: 0.8,
      z: -100 
    },
    visible: { 
      opacity: 1, 
      rotateY: 0, 
      scale: 1,
      z: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    },
    exit: { 
      opacity: 0, 
      rotateY: -90, 
      scale: 0.8,
      z: -100,
      transition: {
        duration: 0.4,
        ease: "easeIn" as const
      }
    }
  };

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      variants={cardVariants}
      animate={controls}
      initial="hidden"
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
    >
      <motion.div
        className={cn(
          "glass-morphism rounded-2xl p-8 w-full max-w-md mx-auto cursor-pointer",
          isActive ? "shadow-2xl shadow-primary-500/50" : "shadow-lg"
        )}
        whileHover={{ 
          y: -10,
          scale: isActive ? 1.02 : 0.85,
          transition: { duration: 0.3 }
        }}
        style={{
          background: isActive 
            ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))' 
            : 'rgba(255, 255, 255, 0.1)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Quote Icon */}
        <motion.div
          className="mb-6"
          animate={{
            rotate: isActive ? [0, 10, -10, 0] : 0,
            scale: isActive ? [1, 1.1, 1] : 1,
          }}
          transition={{
            duration: 3,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut"
          }}
        >
          <Quote className="w-12 h-12 text-primary-400" />
        </motion.div>

        {/* Content */}
        <div className="space-y-4">
          {/* Rating */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Star 
                  className={cn(
                    "w-5 h-5",
                    i < testimonial.rating ? "text-accent-400 fill-current" : "text-gray-600"
                  )} 
                />
              </motion.div>
            ))}
          </div>

          {/* Testimonial Text */}
          <motion.p
            className="text-gray-200 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            "{testimonial.content}"
          </motion.p>

          {/* Author Info */}
          <motion.div
            className="flex items-center gap-4 pt-4 border-t border-white/10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <div className="text-white font-semibold">{testimonial.name}</div>
              <div className="text-gray-400 text-sm">{testimonial.role}</div>
            </div>
          </motion.div>
        </div>

        {/* Navigation Buttons */}
        {isActive && (
          <div className="absolute bottom-4 right-4 flex gap-2">
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="p-2 rounded-full glass-morphism text-white hover:bg-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.button>
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="p-2 rounded-full glass-morphism text-white hover:bg-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        )}

        {/* Glow Effect */}
        {isActive && (
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/20 to-purple-500/20 -z-10"
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

interface CardStackProps {
  className?: string;
}

const CardStack: React.FC<CardStackProps> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const handleNext = () => {
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getCardPosition = (index: number) => {
    const diff = index - currentIndex;
    const total = testimonials.length;
    
    // Handle circular positioning
    let adjustedDiff = diff;
    if (adjustedDiff > total / 2) adjustedDiff -= total;
    if (adjustedDiff < -total / 2) adjustedDiff += total;
    
    return adjustedDiff;
  };

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
            <span className="gradient-text">Member</span>
            <span className="text-white"> Testimonials</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Hear from our members about their transformative fitness journeys at FitZone.
          </motion.p>
        </motion.div>

        {/* Card Stack Container */}
        <div className="relative h-[500px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            {testimonials.map((testimonial, index) => {
              const position = getCardPosition(index);
              const isActive = position === 0;
              
              return (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  className="absolute"
                  style={{
                    transform: `translateX(${position * 40}px) translateZ(${-Math.abs(position) * 100}px) rotateY(${position * 15}deg)`,
                    opacity: Math.abs(position) <= 1 ? 1 : 0.3,
                    scale: 1 - Math.abs(position) * 0.15,
                    zIndex: 10 - Math.abs(position),
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    opacity: { duration: 0.3 },
                  }}
                >
                  <TestimonialCard
                    testimonial={testimonial}
                    isActive={isActive}
                    index={index}
                    total={testimonials.length}
                    onPrev={handlePrev}
                    onNext={handleNext}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === currentIndex 
                  ? "bg-primary-500 w-8" 
                  : "bg-gray-600 hover:bg-gray-500"
              )}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardStack;
