import React from 'react';
import { Shield, Award, Clock, ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=1600")'
        }}
      ></div>
      
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
                Premium Metal Roofing Solutions
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-yellow-400">Savannah Mabati</span>
                <br />
                Quality Metal Roofing
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
                From Roman tiles to corrugated sheets, we provide durable, weather-resistant 
                metal roofing solutions that protect your investment for decades.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2 group"
              >
                <span>Get Price Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:0701314956"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-2 text-green-400" />
                <h3 className="font-semibold text-lg">Premium Quality</h3>
                <p className="text-gray-300 text-sm">Durable materials</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 mx-auto mb-2 text-green-400" />
                <h3 className="font-semibold text-lg">Expert Installation</h3>
                <p className="text-gray-300 text-sm">Professional service</p>
              </div>
              <div className="text-center sm:col-span-1 col-span-2">
                <Clock className="w-12 h-12 mx-auto mb-2 text-green-400" />
                <h3 className="font-semibold text-lg">Fast Delivery</h3>
                <p className="text-gray-300 text-sm">Quick turnaround</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Our Metal Roofing Products
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-6 bg-gray-400 rounded-sm"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Roman Tiles</h4>
                    <p className="text-gray-600 text-sm">Classic curved design</p>
                  </div>
                  <div className="ml-auto text-green-600 font-bold">From 520</div>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-6 bg-blue-400 rounded-sm"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Box Profile</h4>
                    <p className="text-gray-600 text-sm">Modern industrial look</p>
                  </div>
                  <div className="ml-auto text-green-600 font-bold">From 470</div>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-6 bg-green-400 rounded-sm"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Corrugated</h4>
                    <p className="text-gray-600 text-sm">Traditional wavy pattern</p>
                  </div>
                  <div className="ml-auto text-green-600 font-bold">From 470</div>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-6 bg-red-400 rounded-sm"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Versatile</h4>
                    <p className="text-gray-600 text-sm">Multi-purpose design</p>
                  </div>
                  <div className="ml-auto text-green-600 font-bold">From 520</div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button
                  onClick={() => {
                    const element = document.getElementById('products');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-green-600 hover:text-green-700 font-semibold"
                >
                  View Complete Price List →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-600/20 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full translate-y-48 -translate-x-48"></div>
    </section>
  );
};

export default Hero;