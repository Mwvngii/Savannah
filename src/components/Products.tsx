import React from 'react';
import { Phone, Download, CheckCircle } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: 'SAVANNAH ROMANTILE',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400',
      gauges: [
        { gauge: 28, finish: 'MATTE', price: 700 },
        { gauge: 30, finish: 'MATTE', price: 590 },
        { gauge: 28, finish: 'GLOSSY', price: 650 },
        { gauge: 30, finish: 'GLOSSY', price: 520 }
      ],
      colors: ['Dark Blue', 'Green', 'Red', 'Black']
    },
    {
      name: 'SAVANNAH BOX PROFILE',
      image: 'https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=400',
      gauges: [
        { gauge: 28, finish: 'MATTE', price: 670 },
        { gauge: 30, finish: 'MATTE', price: 540 },
        { gauge: 28, finish: 'GLOSSY', price: 600 },
        { gauge: 30, finish: 'GLOSSY', price: 470 }
      ],
      colors: ['Blue', 'Orange', 'Green', 'Black']
    },
    {
      name: 'SAVANNAH CORRUGATED',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=400',
      gauges: [
        { gauge: 28, finish: 'MATTE', price: 670 },
        { gauge: 30, finish: 'MATTE', price: 540 },
        { gauge: 28, finish: 'GLOSSY', price: 600 },
        { gauge: 30, finish: 'GLOSSY', price: 470 }
      ],
      colors: ['Green', 'Blue', 'Red', 'Black']
    },
    {
      name: 'SAVANNAH EUROTILE',
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=400',
      gauges: [
        { gauge: 28, finish: 'MATTE', price: 700 },
        { gauge: 30, finish: 'MATTE', price: 590 },
        { gauge: 28, finish: 'GLOSSY', price: 650 },
        { gauge: 30, finish: 'GLOSSY', price: 520 }
      ],
      colors: ['Black', 'Blue', 'Green', 'Red']
    },
    {
      name: 'SAVANNAH VERSATILE',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
      gauges: [
        { gauge: 28, finish: 'MATTE', price: 700 },
        { gauge: 30, finish: 'MATTE', price: 590 },
        { gauge: 28, finish: 'GLOSSY', price: 650 },
        { gauge: 30, finish: 'GLOSSY', price: 520 }
      ],
      colors: ['Gray', 'Red', 'Blue', 'Green']
    }
  ];

  const accessories = [
    { name: 'VALLEYS', finishes: [{ finish: 'GLOSSY', price: 600 }, { finish: 'MATTE', price: 700 }] },
    { name: 'ROLLTOPS', finishes: [{ finish: 'GLOSSY', price: 600 }, { finish: 'MATTE', price: 700 }] },
    { name: 'ROOFING NAILS', unit: 'PER KG', price: 300 },
    { name: 'RUBBER WASHERS', unit: 'PER PKT', price: 150 }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
            SAVANNAH MABATI PRICE LIST
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Metal Roofing Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Premium quality metal roofing sheets available in various profiles, gauges, and finishes. 
            All prices are competitive and include professional consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0701314956"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>0701314956</span>
            </a>
            <a
              href="tel:0706117117"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>0706117117</span>
            </a>
          </div>
        </div>

        {/* Main Products */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{product.name}</h3>
                
                <div className="space-y-3 mb-6">
                  {product.gauges.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                          {item.gauge}G
                        </span>
                        <span className="text-gray-600">{item.finish}</span>
                      </div>
                      <span className="font-bold text-green-600 text-lg">{item.price}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Available Colors:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color, colorIdx) => (
                      <span key={colorIdx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Accessories */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Roofing Accessories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessories.map((accessory, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">{accessory.name}</h4>
                {accessory.finishes ? (
                  <div className="space-y-2">
                    {accessory.finishes.map((finish, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">{finish.finish}</span>
                        <span className="font-bold text-green-600">{finish.price}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">{accessory.unit}</span>
                    <span className="font-bold text-green-600">{accessory.price}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="bg-green-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-6">Why Choose Savannah Mabati?</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <CheckCircle className="w-12 h-12 mb-4 text-yellow-400" />
              <h4 className="text-xl font-semibold mb-2">Premium Quality</h4>
              <p className="text-green-100">High-grade steel with superior coating for maximum durability</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-12 h-12 mb-4 text-yellow-400" />
              <h4 className="text-xl font-semibold mb-2">Weather Resistant</h4>
              <p className="text-green-100">Designed to withstand harsh weather conditions and UV rays</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-12 h-12 mb-4 text-yellow-400" />
              <h4 className="text-xl font-semibold mb-2">Long Lasting</h4>
              <p className="text-green-100">25+ year lifespan with proper installation and maintenance</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Request Quote
            </button>
            <a
              href="tel:0701314956"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              Call for Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;