import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/seo/SEO';
import FeaturedProducts from '../components/home/FeaturedProducts';

const Products = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO 
        title="Products & Prices"
        description="Browse our complete range of premium metal roofing products including Roman tiles, box profiles, corrugated sheets, and accessories with competitive pricing."
        keywords="mabati prices, metal roofing prices Kenya, Roman tiles price, box profile price, corrugated sheets price"
      />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6">
              Products & <span className="text-accent-400">Prices</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 leading-relaxed">
              Discover our comprehensive range of premium metal roofing solutions with transparent, 
              competitive pricing. Quality materials for every project and budget.
            </p>
          </motion.div>
        </div>
      </section>

      <FeaturedProducts />
    </motion.div>
  );
};

export default Products;