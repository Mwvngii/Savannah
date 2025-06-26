import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube, Clock, Award } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products & Prices', path: '/products' },
    { name: 'Blog & Guides', path: '/blog' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Search', path: '/search' },
  ];

  const productLinks = [
    'Roman Tiles',
    'Box Profile',
    'Corrugated Sheets',
    'Euro Tiles',
    'Versatile Profile',
    'Roofing Accessories',
  ];

  return (
    <footer className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-primary-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern opacity-5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl floating-element"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl floating-element" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-custom py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-2xl">
                    <div className="text-center">
                      <div className="flex space-x-1 mb-2">
                        <div className="w-2 h-4 bg-red-400 rounded-sm"></div>
                        <div className="w-2 h-4 bg-accent-400 rounded-sm"></div>
                        <div className="w-2 h-4 bg-primary-300 rounded-sm"></div>
                        <div className="w-2 h-4 bg-blue-400 rounded-sm"></div>
                      </div>
                      <div className="w-10 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-display font-bold">Savannah</h3>
                  <p className="text-accent-400 text-lg font-bold tracking-wider">MABATI</p>
                </div>
              </div>
              
              <p className="text-neutral-300 mb-8 leading-relaxed text-lg">
                Kenya's leading supplier of premium metal roofing solutions. We provide high-quality 
                mabati sheets in various profiles, gauges, and finishes for residential and commercial projects 
                across the country.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center space-x-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center group-hover:bg-primary-600/30 transition-colors">
                    <Phone className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-neutral-400 text-sm">Call us now</p>
                    <div className="flex space-x-4">
                      <a href="tel:0701314956" className="text-white hover:text-primary-400 font-semibold text-lg transition-colors">
                        0701314956
                      </a>
                      <a href="tel:0706117117" className="text-white hover:text-primary-400 font-semibold text-lg transition-colors">
                        0706117117
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center group-hover:bg-primary-600/30 transition-colors">
                    <Mail className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-neutral-400 text-sm">Email us</p>
                    <a href="mailto:info@savannahmabati.co.ke" className="text-white hover:text-primary-400 font-semibold transition-colors">
                      info@savannahmabati.co.ke
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center group-hover:bg-primary-600/30 transition-colors">
                    <MapPin className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-neutral-400 text-sm">Headquarters</p>
                    <p className="text-white font-semibold">
                      Kamakis, Eastern Bypass Highway<br />
                      Near Total Petrol Station
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center group-hover:bg-primary-600/30 transition-colors">
                    <Clock className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-neutral-400 text-sm">Business Hours</p>
                    <div className="text-white font-medium">
                      <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 8:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-display font-bold mb-8 text-accent-400">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-neutral-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 group-hover:bg-accent-500 transition-colors"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-display font-bold mb-8 text-accent-400">Our Products</h4>
              <ul className="space-y-3">
                {productLinks.map((product) => (
                  <li key={product}>
                    <Link
                      to="/products"
                      className="text-neutral-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 group-hover:bg-accent-500 transition-colors"></span>
                      {product}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Awards & Certifications */}
              <div className="mt-8 p-6 bg-gradient-to-r from-primary-600/20 to-accent-600/20 rounded-xl border border-primary-500/30">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="w-8 h-8 text-accent-400" />
                  <h5 className="font-bold text-accent-400">Quality Assured</h5>
                </div>
                <p className="text-neutral-300 text-sm">
                  ISO certified products meeting international quality standards
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-neutral-700/50">
          <div className="container-custom py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="flex items-center space-x-6">
                <h5 className="font-semibold text-neutral-300">Follow Us:</h5>
                <div className="flex space-x-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      className="w-10 h-10 bg-neutral-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors group"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-neutral-400">Stay updated:</span>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 bg-neutral-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 w-64"
                  />
                  <button className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-r-lg transition-colors font-semibold">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700/50 bg-neutral-900/50">
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-neutral-400 text-sm">
                <p>&copy; {currentYear} Savannah Mabati. All rights reserved.</p>
              </div>
              <div className="flex items-center space-x-6 text-neutral-400 text-sm">
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <span>Made with ❤️ in Kenya</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;