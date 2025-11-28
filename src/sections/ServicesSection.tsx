import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Clock, Users, Award, Target, Heart } from 'lucide-react';
import { services } from '../data/mockData';
import { cn } from '../utils/cn';

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  const iconMap: { [key: string]: React.ReactNode } = {
    '💪': <Target className="w-6 h-6" />,
    '👥': <Users className="w-6 h-6" />,
    '🥗': <Heart className="w-6 h-6" />,
    '🧘': <Award className="w-6 h-6" />,
    '🏃': <Target className="w-6 h-6" />,
    '💻': <Clock className="w-6 h-6" />
  };

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
        className="glass-morphism rounded-2xl p-8 h-full relative overflow-hidden"
        style={{
          background: isHovered 
            ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(234, 179, 8, 0.2))' 
            : 'rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2240%22%20height=%2240%22%20viewBox=%220%200%2040%2040%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.1%22%3E%3Cpath%20d=%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22/%3E%3C/g%3E%3C/svg%3E')]\" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center mb-6 text-2xl"
            animate={{
              rotate: isHovered ? 360 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            {iconMap[service.icon] || service.icon}
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-2xl font-bold text-white mb-4"
            animate={{
              color: isHovered ? '#facc15' : '#ffffff',
            }}
            transition={{ duration: 0.3 }}
          >
            {service.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-gray-300 mb-6"
            animate={{
              opacity: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
          >
            {service.description}
          </motion.p>

          {/* Features */}
          <div className="space-y-3 mb-6">
            {service.features.map((feature, featureIndex) => (
              <motion.div
                key={featureIndex}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: featureIndex * 0.1 }}
              >
                <motion.div
                  className="w-5 h-5 rounded-full bg-accent-500 flex items-center justify-center"
                  animate={{
                    scale: isHovered ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    duration: 1,
                    repeat: isHovered ? Infinity : 0,
                    delay: featureIndex * 0.1,
                  }}
                >
                  <Check className="w-3 h-3 text-white" />
                </motion.div>
                <span className="text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between">
            <motion.div
              className="text-2xl font-bold gradient-text"
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              {service.price}
            </motion.div>

            <motion.button
              className="flex items-center gap-2 text-primary-400 font-medium hover:text-primary-300 transition-colors"
              animate={{
                x: isHovered ? 5 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Floating Badge */}
        {isHovered && (
          <motion.div
            className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent-500 text-white text-sm font-medium"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Popular
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

interface ServicesSectionProps {
  className?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ className }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'training', label: 'Training' },
    { id: 'wellness', label: 'Wellness' },
    { id: 'nutrition', label: 'Nutrition' }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => {
        if (activeCategory === 'training') return ['Personal Training', 'Group Classes', 'Sports Performance'].includes(service.title);
        if (activeCategory === 'wellness') return ['Wellness Programs', 'Virtual Training'].includes(service.title);
        if (activeCategory === 'nutrition') return service.title === 'Nutrition Plans';
        return true;
      });

  return (
    <section id="services" className={cn("py-20 px-4", className)}>
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
            <span className="gradient-text">Premium</span>
            <span className="text-white"> Services</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Discover our comprehensive range of fitness services designed to help you achieve your health goals.
          </motion.p>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-6 py-3 rounded-full font-medium transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-primary-500 text-white shadow-lg shadow-primary-500/50"
                    : "glass-morphism text-gray-300 hover:bg-white/20 hover:text-white"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.p
            className="text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Can't find what you're looking for? We offer custom solutions tailored to your needs.
          </motion.p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us for Custom Plans
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
