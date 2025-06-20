import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Kamau',
      location: 'Nairobi',
      text: 'Excellent quality mabati! The Roman tiles look amazing on our new home and the pricing was very competitive. Highly recommend Savannah Mabati for anyone looking for quality roofing.',
      rating: 5,
      project: 'Roman Tiles - Residential'
    },
    {
      name: 'Grace Wanjiku',
      location: 'Kiambu',
      text: 'We used their box profile sheets for our warehouse and the quality is outstanding. The team was professional and delivered on time. Great value for money!',
      rating: 5,
      project: 'Box Profile - Commercial'
    },
    {
      name: 'Peter Ochieng',
      location: 'Kisumu',
      text: 'The corrugated sheets have withstood heavy rains and strong winds perfectly. Two years later and they still look as good as new. Quality you can trust.',
      rating: 5,
      project: 'Corrugated - Residential'
    },
    {
      name: 'Mary Njeri',
      location: 'Mombasa',
      text: 'Professional service from start to finish. The Euro tiles were exactly what we needed for our coastal home. The salt air hasn\'t affected them at all.',
      rating: 5,
      project: 'Euro Tiles - Coastal Home'
    },
    {
      name: 'David Mutua',
      location: 'Machakos',
      text: 'Best prices in the market without compromising on quality. The versatile profile sheets were perfect for our multi-purpose building. Will definitely use them again.',
      rating: 5,
      project: 'Versatile Profile - Commercial'
    },
    {
      name: 'Sarah Akinyi',
      location: 'Eldoret',
      text: 'The customer service was exceptional. They helped us choose the right gauge and finish for our climate. The installation advice was also very helpful.',
      rating: 5,
      project: 'Mixed Products - Residential'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Customer Reviews
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers across Kenya 
            have to say about their experience with Savannah Mabati.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 relative"
            >
              <Quote className="w-10 h-10 text-green-600/20 absolute top-4 right-4" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-gray-600 text-sm">
                  {testimonial.location}
                </div>
                <div className="text-green-600 text-sm font-medium mt-1">
                  {testimonial.project}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-green-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Join Our Satisfied Customers</h3>
            <p className="text-green-200 text-lg mb-8">
              Experience the quality and service that has made us Kenya's trusted metal roofing supplier. 
              Get your personalized quote today and see why customers choose Savannah Mabati.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Get Started Today
              </button>
              <div className="flex items-center space-x-2 text-green-200">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="font-medium">4.9/5 Customer Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;