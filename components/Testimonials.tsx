import React from 'react';

const testimonials = [
  // Add your testimonials here
  { quote: 'This is a great developer!', author: 'Client One' },
  // ...more testimonials
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="p-8">
      <h2 className="text-4xl font-bold text-center mb-8">Testimonials</h2>
      <div className="flex overflow-x-auto space-x-4">
        {testimonials.map((testimonial, index) => (
          <blockquote
            key={index}
            className="w-1/3 min-w-[300px] bg-white shadow-lg rounded-lg p-4"
          >
            <p className="italic">"{testimonial.quote}"</p>
            <cite className="block text-right not-italic font-bold mt-4">
              - {testimonial.author}
            </cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
