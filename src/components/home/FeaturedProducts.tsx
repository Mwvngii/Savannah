import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, ArrowRight, CheckCircle, Star, Zap } from 'lucide-react';

const FeaturedProducts = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const products = [
    {
      name: 'SAVANNAH ROMANTILE',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Premium Roman Tiles',
      featured: true,
      gauges: [
        { gauge: 28, finish: 'MATTE', price: 700, popular: false },
        { gauge: 30, finish: 'MATTE', price: 590, popular: true },
        { gauge: 28, finish: 'GLOSSY', price: 650, popular: false },
        { gauge: 30, finish: 'GLOSSY', price: 520, popular: true }
      ],
      colors: ['Dark Blue', 'Green', 'Red', 'Black', 'Brown', 'Charcoal'],
      features: ['Classic curved design', 'Excellent water drainage', 'UV resistant coating', '25+ year lifespan'],
      gradient: 'from-red-500 to-red-600'
    },
    {
      name: 'SAVANNAH BOX PROFILE',
      image: 'https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Modern Box Profile',
      featured: true,
      gauges: [
        { gauge: 28, finish: 'MATTE', price: 670, popular: false },
        { gauge: 30, finish: 'MATTE', price: 540, popular: true },
        { gauge: 28, finish: 'GLOSSY', price: 600, popular: false },
        { gauge: 30, finish: 'GLOSSY', price: 470, popular: true }
      ],
      colors: ['Blue', 'Orange', 'Green', 'Black', 'White', 'Silver'],
      features: ['Contemporary appearance', 'High strength-to-weight ratio', 'Easy installation', 'Suitable for large spans'],
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      name: 'SAVANNAH CORRUGATED',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Traditional Corrugated',
      featured: false,
      gauges: [
        { gauge: 28, finish: 'MATTE', price: 670, popular: false },
        { gauge: 30, finish: 'MATTE', price: 540, popular: true },
        { gauge: 28, finish: 'GLOSSY', price: 600, popular: false },
        { gauge: 30, finish: 'GLOSSY', price: 470, popular: true }
      ],
      colors: ['Green', 'Blue', 'Red', 'Black', 'Brown'],
      features: ['Time-tested design', 'Cost-effective solution', 'Easy maintenance', 'Versatile application'],
      gradient: 'from-green-500 to-green-600'
    },
    {
      name: 'SAVANNAH EUROTILE',
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'European Style Tiles',
      featured: false,
      gauges: [
        { gauge: 28, finish: 'MATTE', price: 700, popular: false },
        { gauge: 30, finish: 'MATTE', price: 590, popular: true },
        { gauge: 28, finish: 'GLOSSY', price: 650, popular: false },
        { gauge: 30, finish: 'GLOSSY', price: 520, popular: true }
      ],
      colors: ['Black', 'Blue', 'Green', 'Red', 'Terracotta'],
      features: ['European elegance', 'Superior aesthetics', 'Weather resistant', 'Premium finish'],
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  const accessories = [
    { name: 'VALLEYS', finishes: [{ finish: 'GLOSSY', price: 600 }, { finish: 'MATTE', price: 700 }], icon: '🏔️' },
    { name: 'ROLLTOPS', finishes: [{ finish: 'GLOSSY', price: 600 }, { finish: 'MATTE', price: 700 }], icon: '🔄' },
    { name: 'ROOFING NAILS', unit: 'PER KG', price: 300, icon: '🔨' },
    { name: 'RUBBER WASHERS', unit: 'PER PKT', price: 150, icon: '⭕' }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-neutral-50 via-white to-primary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-200/20 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full text-sm font-bold tracking-wide mb-6 shadow-lg">
            🏆 SAVANNAH MABATI PRICE LIST 2024
          </div>
          <h2 className="text-5xl lg:text-6xl font-display font-bold gradient-text mb-6">
            Our Premium Products
          </h2>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Premium quality metal roofing sheets available in various profiles, gauges, and finishes. 
            All prices are competitive and include professional consultation with nationwide delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0701314956"
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3"
            >
              <Phone className="w-5 h-5" />
              <span>0701314956</span>
            </a>
            <a
              href="tel:0706117117"
              className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-black px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3"
            >
              <Phone className="w-5 h-5" />
              <span>0706117117</span>
            </a>
          </div>
        </motion.div>

        {/* Main Products Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-neutral-100 card-hover">
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    {product.featured && (
                      <span className="bg-gradient-to-r from-accent-500 to-accent-600 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Featured</span>
                      </span>
                    )}
                    <span className={`bg-gradient-to-r ${product.gradient} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                      {product.category}
                    </span>
                  </div>

                  {/* Quick Stats */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="text-center">
                      <div className="text-primary-600 font-bold text-lg">From KSh {Math.min(...product.gauges.map(g => g.price))}</div>
                      <div className="text-neutral-600 text-xs">per sheet</div>
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold text-neutral-900 mb-4">{product.name}</h3>
                  
                  {/* Pricing Grid */}
                  <div className="space-y-3 mb-6">
                    {product.gauges.map((item, idx) => (
                      <div key={idx} className={`flex justify-between items-center p-4 rounded-xl transition-all duration-300 ${
                        item.popular 
                          ? 'bg-gradient-to-r from-primary-50 to-primary-100 border-2 border-primary-200' 
                          : 'bg-neutral-50 hover:bg-neutral-100'
                      }`}>
                        <div className="flex items-center space-x-3">
                          <span className={`px-3 py-1 rounded-lg text-sm font-bold ${
                            item.popular 
                              ? 'bg-primary-600 text-white' 
                              : 'bg-neutral-200 text-neutral-700'
                          }`}>
                            {item.gauge}G
                          </span>
                          <span className="text-neutral-700 font-medium">{item.finish}</span>
                          {item.popular && (
                            <span className="bg-accent-500 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                              <Zap className="w-3 h-3" />
                              <span>Popular</span>
                            </span>
                          )}
                        </div>
                        <span className="font-bold text-primary-600 text-xl">KSh {item.price}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-neutral-700 mb-3 uppercase tracking-wide">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                          <span className="text-neutral-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Colors */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-neutral-700 mb-3 uppercase tracking-wide">Available Colors:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((color, colorIdx) => (
                        <span key={colorIdx} className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 px-3 py-1 rounded-full text-sm transition-colors cursor-pointer">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Accessories Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-8 mb-16 border border-neutral-100"
        >
          <h3 className="text-3xl font-display font-bold text-center gradient-text mb-8">Roofing Accessories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessories.map((accessory, index) => (
              <motion.div
                key={accessory.name}
                className="text-center p-6 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">{accessory.icon}</div>
                <h4 className="font-bold text-neutral-900 mb-3">{accessory.name}</h4>
                {accessory.finishes ? (
                  <div className="space-y-2">
                    {accessory.finishes.map((finish, idx) => (
                      <div key={idx} className="flex justify-between items-center bg-white rounded-lg px-3 py-2">
                        <span className="text-neutral-600 text-sm font-medium">{finish.finish}</span>
                        <span className="font-bold text-primary-600">KSh {finish.price}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-lg px-3 py-2">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600 text-sm font-medium">{accessory.unit}</span>
                      <span className="font-bold text-primary-600">KSh {accessory.price}</span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 hero-pattern opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-4xl font-display font-bold mb-8">Why Choose Savannah Mabati?</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: CheckCircle, title: 'Premium Quality', desc: 'High-grade steel with superior coating for maximum durability and weather resistance' },
                { icon: Shield, title: 'Weather Resistant', desc: 'Designed to withstand harsh weather conditions, UV rays, and extreme temperatures' },
                { icon: Award, title: 'Long Lasting', desc: '25+ year lifespan with proper installation and minimal maintenance requirements' }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <feature.icon className="w-10 h-10 text-black" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                  <p className="text-primary-100 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-accent-500 hover:bg-accent-600 text-black px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Request Quote Now
              </Link>
              <a
                href="tel:0701314956"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300"
              >
                Call for Pricing
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;