import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex space-x-1 mb-1">
                      <div className="w-1 h-2 bg-red-500"></div>
                      <div className="w-1 h-2 bg-yellow-500"></div>
                      <div className="w-1 h-2 bg-green-500"></div>
                      <div className="w-1 h-2 bg-blue-500"></div>
                    </div>
                    <div className="w-6 h-1 bg-gray-600 rounded"></div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Savannah</h3>
                <p className="text-yellow-400 text-sm font-semibold">MABATI</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Kenya's leading supplier of premium metal roofing solutions. We provide high-quality 
              mabati sheets in various profiles, gauges, and finishes for residential and commercial projects.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <div className="space-x-4">
                  <a href="tel:0701314956" className="text-gray-300 hover:text-white">
                    0701314956
                  </a>
                  <a href="tel:0706117117" className="text-gray-300 hover:text-white">
                    0706117117
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <a href="mailto:info@savannahmabati.co.ke" className="text-gray-300 hover:text-white">
                  info@savannahmabati.co.ke
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Serving All of Kenya</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Products</h4>
            <ul className="space-y-3">
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Roman Tiles</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Box Profile</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Corrugated Sheets</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Euro Tiles</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Versatile Profile</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Roofing Accessories</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Products & Prices</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
            
            <div className="mt-8">
              <h5 className="text-sm font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2024 Savannah Mabati. All rights reserved.</p>
            </div>
            <div className="text-gray-400 text-sm mt-4 md:mt-0">
              <p>Premium Metal Roofing Solutions | Nationwide Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;