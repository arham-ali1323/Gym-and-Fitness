import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Grid, List, Filter } from 'lucide-react';
import { galleryItems } from '../data/mockData';
import { cn } from '../utils/cn';

interface GalleryItemProps {
  item: typeof galleryItems[0];
  index: number;
  onImageClick: (item: typeof galleryItems[0]) => void;
  className?: string;
}

const GalleryItemComponent: React.FC<GalleryItemProps> = ({ item, index, onImageClick, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn("group cursor-pointer overflow-hidden rounded-2xl", className)}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      onClick={() => onImageClick(item)}
    >
      {/* Image Placeholder */}
      <div className="relative aspect-video">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-600" />
        
        {/* Overlay Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2240%22%20height=%2240%22%20viewBox=%220%200%2040%2040%22%20xmlns=%22http://www.w3.org/2000/svg%22%20fill=%22%23ffffff%22%20fill-opacity=%220.1%22%3E%3Cpath%20d=%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22/%3E%3C/svg%3E')]" />
        
        {/* Category Badge */}
        <motion.div
          className="absolute top-4 left-4 px-3 py-1 rounded-full glass-morphism"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-white text-sm font-medium">{item.category}</span>
        </motion.div>

        {/* Hover Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-white">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Zoom Icon */}
        <motion.div
          className="absolute top-4 right-4 w-10 h-10 rounded-full glass-morphism flex items-center justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ZoomIn className="w-5 h-5 text-white" />
        </motion.div>
      </div>
    </motion.div>
  );
};

interface LightboxProps {
  item: typeof galleryItems[0] | null;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.button
          className="absolute top-4 right-4 w-12 h-12 rounded-full glass-morphism flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </motion.button>

        <motion.div
          className="max-w-4xl w-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="glass-morphism rounded-2xl overflow-hidden">
            {/* Image Placeholder */}
            <div className="relative aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-600" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2240%22%20height=%2240%22%20viewBox=%220%200%2040%2040%22%20xmlns=%22http://www.w3.org/2000/svg%22%20fill=%22%23ffffff%22%20fill-opacity=%220.1%22%3E%3Cpath%20d=%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22/%3E%3C/svg%3E')]" />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              <p className="text-gray-300">{item.description}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

interface GallerySectionProps {
  className?: string;
}

const GallerySection: React.FC<GallerySectionProps> = ({ className }) => {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['all', ...Array.from(new Set(galleryItems.map(item => item.category)))];
  
  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className={cn("py-20 px-4", className)}>
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
            <span className="gradient-text">Gallery</span>
            <span className="text-white"> Showcase</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Take a virtual tour of our state-of-the-art facilities and see the FitZone experience in action.
          </motion.p>

          {/* Controls */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={cn(
                    "px-4 py-2 rounded-full font-medium transition-all duration-300 capitalize",
                    filter === category
                      ? "bg-primary-500 text-white"
                      : "glass-morphism text-gray-300 hover:bg-white/20 hover:text-white"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <motion.button
                onClick={() => setViewMode('grid')}
                className={cn(
                  "p-2 rounded-lg transition-all duration-300",
                  viewMode === 'grid'
                    ? "bg-primary-500 text-white"
                    : "glass-morphism text-gray-300 hover:bg-white/20"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Grid className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={() => setViewMode('list')}
                className={cn(
                  "p-2 rounded-lg transition-all duration-300",
                  viewMode === 'list'
                    ? "bg-primary-500 text-white"
                    : "glass-morphism text-gray-300 hover:bg-white/20"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <List className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className={cn(
            "grid gap-6",
            viewMode === 'grid' 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1"
          )}
        >
          {filteredItems.map((item, index) => (
            <GalleryItemComponent
              key={item.id}
              item={item}
              index={index}
              onImageClick={setSelectedItem}
            />
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {[
            { number: "10,000+", label: "Square Feet", icon: "🏢" },
            { number: "100+", label: "Machines", icon: "🏋️" },
            { number: "50+", label: "Classes Weekly", icon: "📅" },
            { number: "24/7", label: "Access", icon: "🔓" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center glass-morphism rounded-xl p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="glass-morphism rounded-2xl p-8 max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to See It in Person?
            </h3>
            <p className="text-gray-300 mb-6">
              Schedule a tour of our facilities and experience the FitZone difference firsthand.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Tour
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
};

export default GallerySection;
