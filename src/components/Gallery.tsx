import React from 'react';
import { ExternalLink } from 'lucide-react';

const Gallery = () => {
  const projects = [
    {
      title: 'Residential Roman Tile Installation',
      description: 'Beautiful Roman tile roofing in matte finish',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      product: 'Roman Tile'
    },
    {
      title: 'Commercial Box Profile Roofing',
      description: 'Large warehouse with box profile sheets',
      image: 'https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=800',
      product: 'Box Profile'
    },
    {
      title: 'Modern Home with Euro Tiles',
      description: 'Contemporary design with Euro tile roofing',
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
      product: 'Euro Tile'
    },
    {
      title: 'Industrial Corrugated Roofing',
      description: 'Heavy-duty corrugated sheets for industrial use',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800',
      product: 'Corrugated'
    },
    {
      title: 'Versatile Profile Installation',
      description: 'Multi-purpose versatile profile roofing',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      product: 'Versatile'
    },
    {
      title: 'Mixed Profile Commercial Project',
      description: 'Combination of different profiles for optimal performance',
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800',
      product: 'Mixed Profiles'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Work
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Project Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful roofing installations across Kenya. 
            From residential homes to large commercial projects, see the quality and variety of our work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.product}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready for Your Roofing Project?
            </h3>
            <p className="text-gray-600 text-lg mb-8">
              Whether you're building a new home or replacing an old roof, our expert team 
              is ready to help you choose the perfect metal roofing solution. Get your personalized quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Get Your Quote
              </button>
              <a
                href="tel:0701314956"
                className="bg-transparent border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
              >
                Call 0701314956
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;