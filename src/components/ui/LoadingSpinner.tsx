import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="text-center">
        <motion.div
          className="relative w-20 h-20 mx-auto mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 border-4 border-primary-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-primary-600 rounded-full"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-display font-bold text-primary-800 mb-2">
            Loading Savannah Mabati
          </h2>
          <p className="text-primary-600">
            Premium metal roofing solutions loading...
          </p>
        </motion.div>
        
        <motion.div
          className="flex justify-center space-x-2 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-primary-600 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingSpinner;