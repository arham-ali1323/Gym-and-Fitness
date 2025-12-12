import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Info, Users, DollarSign, Image, MessageSquare, HelpCircle, Phone } from 'lucide-react';
import { navItems } from '../data/mockData';
import { cn } from '../utils/cn';

interface FloatingDockNavbarProps {
  className?: string;
}

const FloatingDockNavbar: React.FC<FloatingDockNavbarProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const getIcon = (label: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'Home': <Home className="w-5 h-5" />,
      'About': <Info className="w-5 h-5" />,
      'Services': <Users className="w-5 h-5" />,
      'Trainers': <Users className="w-5 h-5" />,
      'Pricing': <DollarSign className="w-5 h-5" />,
      'Gallery': <Image className="w-5 h-5" />,
      'Testimonials': <MessageSquare className="w-5 h-5" />,
      'FAQ': <HelpCircle className="w-5 h-5" />,
      'Contact': <Phone className="w-5 h-5" />
    };
    return iconMap[label] || <Home className="w-5 h-5" />;
  };

  const dockVariants = {
    initial: { y: 0 },
    hover: { y: -10 }
  };

  const itemVariants = {
    initial: { scale: 1, y: 0 },
    hover: { scale: 1.2, y: -15 }
  };

  return (
    <>
      {/* Desktop Floating Dock */}
      <motion.nav
        className={cn(
          "fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 hidden md:block",
          className
        )}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.div
          className="glass-morphism rounded-full px-6 py-4 flex items-center gap-4 shadow-2xl"
          variants={dockVariants}
          initial="initial"
          whileHover="hover"
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              className="relative"
              variants={itemVariants}
              initial="initial"
              whileHover="hover"
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <motion.button
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "relative p-3 rounded-full transition-all duration-300",
                  activeSection === item.href.slice(1)
                    ? "bg-primary-500 text-white shadow-lg shadow-primary-500/50"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                )}
                whileTap={{ scale: 0.9 }}
              >
                {getIcon(item.label)}
                
                {/* Tooltip */}
                <motion.div
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 pointer-events-none"
                  initial={{ opacity: 0, y: 5 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.div>
              </motion.button>
              
              {/* Active indicator */}
              {activeSection === item.href.slice(1) && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary-500/20"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 md:hidden",
          scrolled ? "glass-morphism" : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex items-center justify-between p-4">
          <motion.div
            className="text-2xl font-bold gradient-text"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            FitZone
          </motion.div>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg glass-morphism text-white"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="glass-morphism mx-4 rounded-lg p-4 mb-4"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-lg transition-all duration-300 text-left",
                      activeSection === item.href.slice(1)
                        ? "bg-primary-500/20 text-primary-300"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    )}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {getIcon(item.label)}
                    <span>{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default FloatingDockNavbar;
