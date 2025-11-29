import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="glass-morphism py-12 px-4 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">FitZone</h3>
            <p className="text-gray-400">
              Transform your body, elevate your life. Join the premium fitness experience.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Personal Training</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Group Classes</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Nutrition Plans</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Membership</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Fitness Street, Gym City</li>
              <li>+1 (555) 123-4567</li>
              <li>info@fitzone.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 FitZone. All rights reserved. Made with ❤️ for fitness enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
