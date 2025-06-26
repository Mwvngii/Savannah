import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ScrollToTop from './components/ui/ScrollToTop';
import SEO from './components/seo/SEO';

// Lazy load components for better performance
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Search = lazy(() => import('./pages/Search'));
const Admin = lazy(() => import('./pages/Admin'));
const Payment = lazy(() => import('./pages/Payment'));

function App() {
  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <Header />
      
      <AnimatePresence mode="wait">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<Search />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;