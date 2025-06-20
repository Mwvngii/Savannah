import React from 'react';
import { Users, Trophy, Hammer, Heart, Shield, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '1000+', label: 'Roofs Installed', icon: <Hammer className="w-6 h-6" /> },
    { number: '10+', label: 'Years Experience', icon: <Trophy className="w-6 h-6" /> },
    { number: '25+', label: 'Team Members', icon: <Users className="w-6 h-6" /> },
    { number: '100%', label: 'Quality Guarantee', icon: <Heart className="w-6 h-6" /> }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
                About Us
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Savannah Mabati
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                We are Kenya's leading supplier of premium metal roofing solutions. For over a decade, 
                we've been providing high-quality mabati sheets that combine durability, style, and 
                affordability for residential and commercial projects.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our extensive range includes Roman tiles, box profiles, corrugated sheets, and Euro tiles, 
                all manufactured to the highest standards and available in multiple colors and finishes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-green-50 rounded-xl">
                  <div className="text-green-600 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Savannah Mabati, we understand that your roof is one of the most important 
                investments in your property. That's why we're committed to providing only the 
                highest quality metal roofing solutions that stand the test of time.
              </p>
              
              <h4 className="text-xl font-semibold text-gray-900 mb-4">What We Offer:</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Premium quality metal roofing sheets in various profiles</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Multiple gauge options (28 and 30) for different needs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Both matte and glossy finishes available</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Complete roofing accessories and installation support</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-600 text-white rounded-xl p-6 text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <h4 className="text-xl font-semibold mb-2">Quality Assured</h4>
                <p className="text-green-100">All our products meet international quality standards</p>
              </div>
              <div className="bg-yellow-500 text-black rounded-xl p-6 text-center">
                <Award className="w-12 h-12 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Trusted Brand</h4>
                <p className="text-yellow-800">Preferred choice of contractors and homeowners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;