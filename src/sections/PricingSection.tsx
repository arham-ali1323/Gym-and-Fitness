import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Crown, Zap, ArrowRight } from 'lucide-react';
import { membershipPlans } from '../data/mockData';
import { cn } from '../utils/cn';

interface PricingCardProps {
  plan: typeof membershipPlans[0];
  index: number;
  isPopular?: boolean;
  className?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, index, isPopular, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn("relative group cursor-pointer", className)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
    >
      {/* Popular Badge */}
      {isPopular && (
        <motion.div
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="px-4 py-2 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center gap-2 shadow-lg">
            <Crown className="w-4 h-4 text-white" />
            <span className="text-white font-semibold text-sm">Most Popular</span>
          </div>
        </motion.div>
      )}

      <motion.div
        className={cn(
          "glass-morphism rounded-2xl p-8 h-full relative overflow-hidden",
          isPopular && "ring-2 ring-accent-500 ring-offset-2 ring-offset-transparent"
        )}
        style={{
          background: isHovered 
            ? isPopular 
              ? 'linear-gradient(135deg, rgba(234, 179, 8, 0.2), rgba(59, 130, 246, 0.2))'
              : 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))'
            : isPopular
              ? 'linear-gradient(135deg, rgba(234, 179, 8, 0.1), rgba(59, 130, 246, 0.1))'
              : 'rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Glow Effect */}
        {isPopular && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-primary-500/10 rounded-2xl"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.h3
              className={cn(
                "text-2xl font-bold mb-2",
                isPopular ? "text-accent-400" : "text-white"
              )}
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              {plan.name}
            </motion.h3>
            <motion.p
              className="text-gray-400 text-sm"
              animate={{
                opacity: isHovered ? 1 : 0.8,
              }}
              transition={{ duration: 0.3 }}
            >
              {plan.description}
            </motion.p>
          </div>

          {/* Price */}
          <div className="text-center mb-8">
            <div className="flex items-baseline justify-center gap-1">
              <motion.span
                className={cn(
                  "text-5xl font-bold",
                  isPopular ? "gradient-text" : "text-white"
                )}
                animate={{
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {plan.price}
              </motion.span>
              <span className="text-gray-400 text-xl">{plan.period}</span>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4 mb-8">
            {plan.features.map((feature, featureIndex) => (
              <motion.div
                key={featureIndex}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: featureIndex * 0.1 }}
              >
                <motion.div
                  className={cn(
                    "w-5 h-5 rounded-full flex items-center justify-center",
                    isPopular ? "bg-accent-500" : "bg-primary-500"
                  )}
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

          {/* CTA Button */}
          <motion.button
            className={cn(
              "w-full py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2",
              isPopular
                ? "bg-gradient-to-r from-accent-500 to-primary-500 text-white shadow-lg shadow-accent-500/50"
                : "glass-morphism text-white hover:bg-white/20"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Floating Elements */}
        {isPopular && (
          <motion.div
            className="absolute top-4 right-4"
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Zap className="w-6 h-6 text-accent-400" />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

interface PricingSectionProps {
  className?: string;
}

const PricingSection: React.FC<PricingSectionProps> = ({ className }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className={cn("py-20 px-4", className)}>
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
            <span className="gradient-text">Membership</span>
            <span className="text-white"> Plans</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Choose the perfect plan that fits your fitness goals and budget. All plans include access to our premium facilities.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            className="inline-flex items-center gap-4 p-1 rounded-full glass-morphism"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <button
              onClick={() => setBillingCycle('monthly')}
              className={cn(
                "px-6 py-2 rounded-full font-medium transition-all duration-300",
                billingCycle === 'monthly'
                  ? "bg-primary-500 text-white"
                  : "text-gray-400 hover:text-white"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={cn(
                "px-6 py-2 rounded-full font-medium transition-all duration-300",
                billingCycle === 'yearly'
                  ? "bg-primary-500 text-white"
                  : "text-gray-400 hover:text-white"
              )}
            >
              Yearly
              <span className="ml-2 text-xs text-accent-400">Save 20%</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {membershipPlans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              index={index}
              isPopular={plan.popular}
            />
          ))}
        </div>

        {/* Additional Info */}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center mx-auto mb-4 text-white"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Check className="w-6 h-6" />
                </motion.div>
                <h4 className="text-white font-semibold mb-2">No Hidden Fees</h4>
                <p className="text-gray-400 text-sm">Transparent pricing with no surprises</p>
              </div>
              <div>
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center mx-auto mb-4 text-white"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Star className="w-6 h-6" />
                </motion.div>
                <h4 className="text-white font-semibold mb-2">Cancel Anytime</h4>
                <p className="text-gray-400 text-sm">No long-term commitments required</p>
              </div>
              <div>
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center mx-auto mb-4 text-white"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Crown className="w-6 h-6" />
                </motion.div>
                <h4 className="text-white font-semibold mb-2">Premium Support</h4>
                <p className="text-gray-400 text-sm">Dedicated support for all members</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
