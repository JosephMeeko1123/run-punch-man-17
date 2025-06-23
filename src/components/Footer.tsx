
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <span className="text-xl font-bold">RunPunchMan</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Inspiring others through faith, fitness, and daily discipline. 
              Train Daily. Live Boldly.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-yellow-400 transition-colors">About</Link>
              <Link to="/journal" className="block text-gray-300 hover:text-yellow-400 transition-colors">Daily Journal</Link>
              <Link to="/scripture" className="block text-gray-300 hover:text-yellow-400 transition-colors">Scripture + Strength</Link>
              <Link to="/contact" className="block text-gray-300 hover:text-yellow-400 transition-colors">Contact</Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Stay Connected</h3>
            <p className="text-gray-300 text-sm mb-4">
              Get weekly inspiration and updates
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Subscribe
            </Link>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 RunPunchMan. All rights reserved. | Walking in faith, running with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
