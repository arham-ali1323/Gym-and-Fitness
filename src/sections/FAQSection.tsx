import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle, Clock, Shield, CreditCard } from 'lucide-react';
import { faqs } from '../data/mockData';
import { cn } from '../utils/cn';

interface FAQItemProps {
  faq: typeof faqs[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, index, isOpen, onToggle, className }) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    'General': <HelpCircle className="w-5 h-5" />,
    'Membership': <CreditCard className="w-5 h-5" />,
    'Training': <MessageCircle className="w-5 h-5" />,
    'Facility': <Shield className="w-5 h-5" />,
    'Classes': <Clock className="w-5 h-5" />
  };

  return (
    <motion.div
      className={cn("glass-morphism rounded-2xl overflow-hidden", className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <motion.button
        className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
        onClick={onToggle}
        whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
      >
        <div className="flex items-center gap-4">
          <motion.div
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center",
              isOpen ? "bg-primary-500" : "bg-white/10"
            )}
            animate={{
              backgroundColor: isOpen ? 'rgb(59, 130, 246)' : 'rgba(255, 255, 255, 0.1)',
              rotate: isOpen ? 360 : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            {iconMap[faq.category] || <HelpCircle className="w-5 h-5 text-white" />}
          </motion.div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-1">{faq.question}</h3>
            <span className="text-sm text-primary-400 font-medium">{faq.category}</span>
          </div>
        </div>
        <motion.div
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
            isOpen ? "bg-primary-500" : "bg-white/10"
          )}
          animate={{
            rotate: isOpen ? 180 : 0,
            backgroundColor: isOpen ? 'rgb(59, 130, 246)' : 'rgba(255, 255, 255, 0.1)',
          }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-white" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="px-6 pb-6"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pl-16">
              <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface FAQSectionProps {
  className?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ className }) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...Array.from(new Set(faqs.map(faq => faq.category)))];
  
  const filteredFAQs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const expandAll = () => {
    setOpenItems(new Set(filteredFAQs.map(faq => faq.id)));
  };

  const collapseAll = () => {
    setOpenItems(new Set());
  };

  return (
    <section id="faq" className={cn("py-20 px-4", className)}>
      <div className="max-w-4xl mx-auto">
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
            <HelpCircle className="w-4 h-4 text-accent-400" />
            <span className="text-sm font-medium">Frequently Asked Questions</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="gradient-text">Got</span>
            <span className="text-white"> Questions?</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Find answers to common questions about FitZone memberships, facilities, and services.
          </motion.p>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full font-medium transition-all duration-300 capitalize",
                  selectedCategory === category
                    ? "bg-primary-500 text-white"
                    : "glass-morphism text-gray-300 hover:bg-white/20 hover:text-white"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Expand/Collapse All */}
          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              onClick={expandAll}
              className="px-4 py-2 rounded-lg glass-morphism text-gray-300 hover:bg-white/20 hover:text-white transition-colors text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Expand All
            </motion.button>
            <motion.button
              onClick={collapseAll}
              className="px-4 py-2 rounded-lg glass-morphism text-gray-300 hover:bg-white/20 hover:text-white transition-colors text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Collapse All
            </motion.button>
          </motion.div>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              index={index}
              isOpen={openItems.has(faq.id)}
              onToggle={() => toggleItem(faq.id)}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          {[
            { number: "24/7", label: "Support", icon: <Clock className="w-6 h-6" /> },
            { number: "98%", label: "Satisfaction", icon: <HelpCircle className="w-6 h-6" /> },
            { number: "50+", label: "FAQ Topics", icon: <MessageCircle className="w-6 h-6" /> },
            { number: "< 1hr", label: "Response Time", icon: <Shield className="w-6 h-6" /> }
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

        {/* Contact CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="glass-morphism rounded-2xl p-8"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Our support team is here to help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-3 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Support
              </motion.button>
              <motion.button
                className="px-8 py-3 glass-morphism text-white rounded-full font-semibold hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Live Chat
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
