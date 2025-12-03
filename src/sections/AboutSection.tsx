import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Heart, ArrowRight, Play, CheckCircle } from 'lucide-react';
import { cn } from '../utils/cn';

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from equipment quality to customer service."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Building a supportive community where everyone feels welcome and motivated."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Wellness",
      description: "Promoting holistic wellness that encompasses physical, mental, and emotional health."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Results",
      description: "Helping our members achieve real, lasting results through proven methods."
    }
  ];

  const stats = [
    { number: "10+", label: "Years in Business", icon: "🏆" },
    { number: "15,000+", label: "Happy Members", icon: "😊" },
    { number: "50+", label: "Expert Trainers", icon: "💪" },
    { number: "100+", label: "Weekly Classes", icon: "📅" }
  ];

  const timeline = [
    {
      year: "2014",
      title: "FitZone Founded",
      description: "Started with a small facility and big dreams to transform fitness in our community."
    },
    {
      year: "2017",
      title: "First Expansion",
      description: "Expanded to a larger facility with state-of-the-art equipment and more class offerings."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched virtual training programs and mobile app for remote fitness support."
    },
    {
      year: "2024",
      title: "Community Leader",
      description: "Recognized as the premier fitness destination with over 15,000 active members."
    }
  ];

  return (
    <section id="about" className={cn("py-20 px-4", className)}>
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
            <span className="gradient-text">About</span>
            <span className="text-white"> FitZone</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We're more than just a gym – we're a community dedicated to helping you become the best version of yourself.
          </motion.p>
        </motion.div>

        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Transforming Lives Through Fitness
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Since 2014, FitZone has been at the forefront of the fitness industry, providing innovative solutions 
              and personalized approaches to health and wellness. Our mission is to create an inclusive environment where 
              everyone can achieve their fitness goals, regardless of their starting point.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We believe that fitness is not just about physical strength – it's about building confidence, 
              fostering community, and creating lasting lifestyle changes. Our team of certified professionals is 
              committed to supporting you every step of the way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                Watch Our Story
              </motion.button>
              <motion.button
                className="px-8 py-4 glass-morphism text-white rounded-full font-semibold hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Brochure
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-morphism rounded-2xl p-8 h-full min-h-[400px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-600/20" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.05%22%3E%3Cpath%20d=%22M0%2060L60%200H30L0%2030M60%2060V30L30%2060%22/%3E%3C/g%3E%3C/svg%3E')]">
                {/* Certificate Design */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 max-w-md bg-gradient-to-br from-primary-500/10 to-purple-600/10 border-2 border-white/20 rounded-lg p-6 shadow-2xl backdrop-blur-sm">
                  <div className="border-2 border-white/20 p-6 h-full flex flex-col items-center justify-center text-center">
                    {/* Decorative Elements */}
                    <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/30"></div>
                    <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/30"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/30"></div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/30"></div>
                    
                    {/* Certificate Content */}
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-white mb-2">CERTIFICATE</div>
                      <div className="text-sm text-white/60 mb-1">OF ACHIEVEMENT</div>
                      <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-purple-500 mx-auto my-4"></div>
                    </div>
                    
                    <div className="text-white/80 mb-6">
                      <p className="text-sm mb-1">This certifies that</p>
                      <h3 className="text-2xl font-bold text-white mb-4">POWERFIT GYM</h3>
                      <p className="text-sm mb-4">has been recognized for excellence in</p>
                      <p className="text-xl font-semibold text-primary-300 mb-6">FITNESS & WELLNESS</p>
                      <p className="text-xs text-white/60">Awarded on: January 1, 2024</p>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-white/10 w-3/4">
                      <div className="flex justify-between items-center">
                        <div className="text-center">
                          <div className="w-16 h-0.5 bg-white/30 mx-auto mb-1"></div>
                          <span className="text-xs text-white/50">Director</span>
                        </div>
                        <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-0.5 bg-white/30 mx-auto mb-1"></div>
                          <span className="text-xs text-white/50">Date</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="glass-morphism rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center mx-auto mb-4 text-white"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {value.icon}
                </motion.div>
                <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="glass-morphism rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={cn(
                    "flex items-center",
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  )}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className={cn(
                    "w-1/2",
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                  )}>
                    <motion.div
                      className="glass-morphism rounded-2xl p-6 inline-block text-left"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-accent-400 font-bold mb-2">{item.year}</div>
                      <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-300">{item.description}</p>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center text-white z-10"
                    whileHover={{ scale: 1.2 }}
                  >
                    <CheckCircle className="w-6 h-6" />
                  </motion.div>
                  
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="glass-morphism rounded-2xl p-8 max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join the FitZone Family?
            </h3>
            <p className="text-gray-300 mb-6">
              Become part of a community that supports your goals and celebrates your achievements.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey Today
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
