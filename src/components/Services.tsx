import React from 'react';
import { Home, Building, Wrench, Search, Palette, Droplets } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="w-12 h-12" />,
      title: 'Residential Roofing',
      description: 'Complete roofing solutions for your home including installations, repairs, and replacements.',
      features: ['Asphalt Shingles', 'Metal Roofing', 'Tile Roofing', 'Flat Roofing']
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: 'Commercial Roofing',
      description: 'Professional commercial roofing services for businesses and industrial properties.',
      features: ['TPO Systems', 'EPDM Roofing', 'Modified Bitumen', 'Roof Coatings']
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: 'Emergency Repairs',
      description: '24/7 emergency roofing services to protect your property from further damage.',
      features: ['Storm Damage', 'Leak Repairs', 'Emergency Tarping', 'Immediate Response']
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: 'Roof Inspections',
      description: 'Comprehensive roof inspections to identify issues before they become major problems.',
      features: ['Annual Inspections', 'Insurance Claims', 'Detailed Reports', 'Photo Documentation']
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Roof Restoration',
      description: 'Extend your roof\'s life with professional restoration and maintenance services.',
      features: ['Pressure Washing', 'Protective Coatings', 'Minor Repairs', 'Preventive Care']
    },
    {
      icon: <Droplets className="w-12 h-12" />,
      title: 'Gutter Services',
      description: 'Complete gutter installation, repair, and maintenance to protect your foundation.',
      features: ['Gutter Installation', 'Gutter Guards', 'Cleaning Services', 'Repair Work']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Roofing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential repairs to commercial installations, we provide comprehensive roofing solutions 
            tailored to your specific needs and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 group"
            >
              <div className="text-blue-800 mb-6 group-hover:text-blue-600 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-blue-800 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Need Emergency Roofing Service?</h3>
            <p className="text-blue-200 text-lg mb-6">
              Don't wait when your roof is damaged. Our emergency team is available 24/7 to protect your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9125557663"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Call Emergency Line: (912) 555-ROOF
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Request Service Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;