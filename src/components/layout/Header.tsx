import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Search, ShoppingCart, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 animate-gradient"></div>
        <div className="container-custom relative z-10">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">0701314956</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">0706117117</span>
              </motion.div>
            </div>
            <div className="hidden md:block">
              <motion.span 
                className="bg-accent-500 text-black px-4 py-1 rounded-full text-xs font-bold tracking-wide"
                animate={{ 
                  boxShadow: ['0 0 0 0 rgba(234, 179, 8, 0.7)', '0 0 0 10px rgba(234, 179, 8, 0)', '0 0 0 0 rgba(234, 179, 8, 0)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨ PREMIUM METAL ROOFING SOLUTIONS ✨
              </motion.span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-effect shadow-2xl' 
            : 'bg-white shadow-lg'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="container-custom py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div 
                className="relative"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    <div className="flex space-x-1 mb-1">
                      <div className="w-1.5 h-3 bg-red-400 rounded-sm"></div>
                      <div className="w-1.5 h-3 bg-accent-400 rounded-sm"></div>
                      <div className="w-1.5 h-3 bg-primary-300 rounded-sm"></div>
                      <div className="w-1.5 h-3 bg-blue-400 rounded-sm"></div>
                    </div>
                    <div className="w-8 h-1.5 bg-white rounded-full"></div>
                  </div>
                </div>
              </motion.div>
              <div>
                <h1 className="text-3xl font-display font-bold gradient-text">Savannah</h1>
                <p className="text-sm text-accent-600 font-bold tracking-wider">MABATI</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative font-medium transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-primary-600'
                      : 'text-neutral-700 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                      layoutId="activeTab"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/search"
                className="p-2 text-neutral-600 hover:text-primary-600 transition-colors"
              >
                <Search className="w-5 h-5" />
              </Link>
              <Link
                to="/payment"
                className="p-2 text-neutral-600 hover:text-primary-600 transition-colors relative"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent-500 text-black text-xs rounded-full flex items-center justify-center font-bold">
                  0
                </span>
              </Link>
              <Link
                to="/admin"
                className="p-2 text-neutral-600 hover:text-primary-600 transition-colors"
              >
                <User className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="btn-primary"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-neutral-600 hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 py-4 border-t border-neutral-200"
              >
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`font-medium transition-colors duration-300 ${
                        location.pathname === item.path
                          ? 'text-primary-600'
                          : 'text-neutral-700 hover:text-primary-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="flex items-center space-x-4 pt-4 border-t border-neutral-200">
                    <Link
                      to="/search"
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 text-neutral-600 hover:text-primary-600 transition-colors"
                    >
                      <Search className="w-5 h-5" />
                    </Link>
                    <Link
                      to="/payment"
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 text-neutral-600 hover:text-primary-600 transition-colors"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </Link>
                    <Link
                      to="/admin"
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 text-neutral-600 hover:text-primary-600 transition-colors"
                    >
                      <User className="w-5 h-5" />
                    </Link>
                  </div>
                  <Link
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="btn-primary w-fit"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  );
};

export default Header;