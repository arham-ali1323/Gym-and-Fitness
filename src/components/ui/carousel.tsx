"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { cn } from '../../utils/cn';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  date: string;
}

interface CarouselProps {
  testimonials: Testimonial[];
}

const Carousel: React.FC<CarouselProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <div className="relative w-full h-full overflow-hidden py-20 px-4">
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

        {/* Carousel Container */}
        <div className="relative h-[500px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div
                className="glass-morphism rounded-2xl p-8 w-full max-w-md mx-auto shadow-2xl shadow-primary-500/50"
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))',
                }}
              >
                {/* Quote Icon */}
                <motion.div
                  className="mb-6"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
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
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <motion.button
                    onClick={prev}
                    className="p-2 rounded-full glass-morphism text-white hover:bg-white/20"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ‹
                  </motion.button>
                  <motion.button
                    onClick={next}
                    className="p-2 rounded-full glass-morphism text-white hover:bg-white/20"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ›
                  </motion.button>
                </div>

                {/* Glow Effect */}
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
              </motion.div>
            </motion.div>
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

export default Carousel;
