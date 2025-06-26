import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import About from '../components/home/About';
import Gallery from '../components/home/Gallery';
import Testimonials from '../components/home/Testimonials';
import BlogPreview from '../components/home/BlogPreview';
import ContactCTA from '../components/home/ContactCTA';
import SEO from '../components/seo/SEO';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO />
      <Hero />
      <FeaturedProducts />
      <About />
      <Gallery />
      <Testimonials />
      <BlogPreview />
      <ContactCTA />
    </motion.div>
  );
};

export default Home;