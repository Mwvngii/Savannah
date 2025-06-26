import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Award, Clock, ArrowRight, Phone, Star, Zap, TrendingUp } from 'lucide-react';

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Premium Metal Roofing",
      subtitle: "Solutions for Kenya",
      description: "From Roman tiles to corrugated sheets, we provide durable, weather-resistant metal roofing solutions that protect your investment for decades.",
      image: "https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=1600",
      accent: "primary"
    },
    {
      title: "Quality You Can Trust",
      subtitle: "Nationwide Delivery",
      description: "ISO certified products with 25+ year warranty. Professional installation and expert consultation available across Kenya.",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600",
      accent: "accent"
    },
    {
      title: "Competitive Pricing",
      subtitle: "Unmatched Value",
      description: "Get the best prices on premium metal roofing materials. Bulk discounts available for contractors and large projects.",
      image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1600",
      accent: "primary"
    }
  ];

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <motion.div
          key={currentSlide}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${currentSlideData.image}")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        <div className="absolute inset-0 hero-pattern opacity-10"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl floating-element"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent-500/20 rounded-full blur-3xl floating-element" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary-400/10 rounded-full blur-2xl floating-element" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                className={`inline-block bg-gradient-to-r ${
                  currentSlideData.accent === 'primary' 
                    ? 'from-primary-500 to-primary-600' 
                    : 'from-accent-500 to-accent-600'
                } text-white px-6 py-3 rounded-full text-sm font-bold tracking-wide shadow-lg`}
                animate={{ 
                  boxShadow: [
                    '0 0 0 0 rgba(34, 197, 94, 0.7)', 
                    '0 0 0 20px rgba(34, 197, 94, 0)', 
                    '0 0 0 0 rgba(34, 197, 94, 0)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨ PREMIUM METAL ROOFING SOLUTIONS ✨
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-7xl font-display font-bold leading-tight text-white text-shadow"
                key={currentSlide}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="gradient-text bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
                  Savannah Mabati
                </span>
                <br />
                <span className="text-white">{currentSlideData.title}</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl lg:text-2xl text-neutral-200 leading-relaxed max-w-2xl"
                key={`desc-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {currentSlideData.description}
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3"
              >
                <span>Get Price Quote</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <a
                href="tel:0701314956"
                className="group bg-transparent border-2 border-white hover:bg-white hover:text-primary-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Phone className="w-6 h-6 group-hover:animate-pulse" />
                <span>Call Now</span>
              </a>
            </motion.div>

            {/* Features Grid */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
            >
              {[
                { icon: Shield, title: 'Premium Quality', desc: 'ISO Certified', color: 'primary' },
                { icon: Award, title: 'Expert Service', desc: '10+ Years', color: 'accent' },
                { icon: Clock, title: 'Fast Delivery', desc: 'Nationwide', color: 'primary' },
                { icon: Star, title: '4.9/5 Rating', desc: '1000+ Reviews', color: 'accent' }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`w-16 h-16 mx-auto mb-3 bg-gradient-to-br ${
                    feature.color === 'primary' 
                      ? 'from-primary-500 to-primary-600' 
                      : 'from-accent-500 to-accent-600'
                  } rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-white mb-1">{feature.title}</h3>
                  <p className="text-neutral-300 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Product Showcase */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="glass-effect rounded-3xl p-8 border border-white/20 shadow-2xl backdrop-blur-xl">
              <motion.h3 
                className="text-3xl font-display font-bold mb-8 text-center text-white"
                animate={{ 
                  textShadow: [
                    '0 0 10px rgba(255,255,255,0.5)',
                    '0 0 20px rgba(255,255,255,0.8)',
                    '0 0 10px rgba(255,255,255,0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Our Premium Products
              </motion.h3>
              
              <div className="space-y-4">
                {[
                  { name: 'Roman Tiles', desc: 'Classic curved design', price: 'From 520', color: 'from-red-500 to-red-600', icon: '🏛️' },
                  { name: 'Box Profile', desc: 'Modern industrial look', price: 'From 470', color: 'from-blue-500 to-blue-600', icon: '📦' },
                  { name: 'Corrugated', desc: 'Traditional wavy pattern', price: 'From 470', color: 'from-green-500 to-green-600', icon: '🌊' },
                  { name: 'Euro Tiles', desc: 'European elegance', price: 'From 520', color: 'from-purple-500 to-purple-600', icon: '🏰' }
                ].map((product, index) => (
                  <motion.div
                    key={product.name}
                    className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                    whileHover={{ scale: 1.02, x: 5 }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow text-2xl`}>
                      {product.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white text-lg">{product.name}</h4>
                      <p className="text-neutral-300 text-sm">{product.desc}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-accent-400 font-bold text-lg">KSh {product.price}</div>
                      <div className="text-neutral-400 text-xs">per sheet</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Link
                  to="/products"
                  className="inline-flex items-center space-x-2 text-accent-400 hover:text-accent-300 font-bold transition-colors group"
                >
                  <span>View Complete Price List</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              className="absolute -top-6 -right-6 bg-gradient-to-r from-accent-500 to-accent-600 text-black px-6 py-3 rounded-xl shadow-xl"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-center">
                <div className="font-bold text-2xl">1000+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-xl shadow-xl"
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <div className="text-center">
                <div className="font-bold text-2xl">25+</div>
                <div className="text-sm">Years Warranty</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-accent-500 w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 right-8 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-center">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
          <p className="text-xs mt-2">Scroll</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;