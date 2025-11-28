import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Calendar, Mail, Phone, ChevronRight, Users } from 'lucide-react';
import { trainers } from '../data/mockData';
import { cn } from '../utils/cn';

interface TrainerCardProps {
  trainer: typeof trainers[0];
  index: number;
  className?: string;
}

const TrainerCard: React.FC<TrainerCardProps> = ({ trainer, index, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn("group cursor-pointer", className)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
    >
      <motion.div
        className="glass-morphism rounded-2xl overflow-hidden h-full"
        style={{
          background: isHovered 
            ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))' 
            : 'rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          {/* Placeholder Image with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-600" />
          
          {/* Profile Placeholder */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <span className="text-5xl font-bold text-white">
                {trainer.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          </motion.div>

          {/* Rating Badge */}
          <motion.div
            className="absolute top-4 right-4 px-3 py-2 rounded-full glass-morphism flex items-center gap-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Star className="w-4 h-4 text-accent-400 fill-current" />
            <span className="text-white font-medium">{trainer.rating}</span>
          </motion.div>

          {/* Experience Badge */}
          <motion.div
            className="absolute bottom-4 left-4 px-3 py-2 rounded-full bg-accent-500/20 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-white font-medium">{trainer.experience}</span>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Name and Role */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-1">{trainer.name}</h3>
            <p className="text-primary-400 font-medium">{trainer.role}</p>
          </motion.div>

          {/* Bio */}
          <motion.p
            className="text-gray-300 mb-4 line-clamp-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {trainer.bio}
          </motion.p>

          {/* Specialties */}
          <div className="mb-6">
            <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-accent-400" />
              Specialties
            </h4>
            <div className="flex flex-wrap gap-2">
              {trainer.specialties.map((specialty, specialtyIndex) => (
                <motion.span
                  key={specialtyIndex}
                  className="px-3 py-1 rounded-full bg-white/10 text-gray-300 text-sm"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: specialtyIndex * 0.1 }}
                >
                  {specialty}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <motion.button
              className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-4 h-4" />
              Book Session
            </motion.button>
            <motion.button
              className="p-2 rounded-lg glass-morphism text-white hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 pointer-events-none"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

interface TrainersSectionProps {
  className?: string;
}

const TrainersSection: React.FC<TrainersSectionProps> = ({ className }) => {
  const [selectedTrainer, setSelectedTrainer] = useState<string | null>(null);

  return (
    <section id="trainers" className={cn("py-20 px-4", className)}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Users className="w-4 h-4 text-accent-400" />
            <span className="text-sm font-medium">Meet Our Expert Team</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="gradient-text">Professional</span>
            <span className="text-white"> Trainers</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our certified trainers bring years of experience and expertise to help you reach your fitness goals safely and effectively.
          </motion.p>
        </motion.div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <TrainerCard
              key={trainer.id}
              trainer={trainer}
              index={index}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {[
            { number: "50+", label: "Certified Trainers", icon: <Users className="w-6 h-6" /> },
            { number: "15+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
            { number: "1000+", label: "Happy Clients", icon: <Star className="w-6 h-6" /> },
            { number: "24/7", label: "Support Available", icon: <Phone className="w-6 h-6" /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center glass-morphism rounded-xl p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center mx-auto mb-4 text-white"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {stat.icon}
              </motion.div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className="glass-morphism rounded-2xl p-8 max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Fitness Journey?
            </h3>
            <p className="text-gray-300 mb-6">
              Schedule a free consultation with one of our expert trainers and get a personalized fitness plan tailored to your goals.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Free Consultation
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainersSection;
