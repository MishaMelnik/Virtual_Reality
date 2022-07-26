import React from 'react';
// COMPONENTS
import TestimonialSlider from './TestimonialSlider/TestimonialSlider';

const Testimonial = () => {
  return (
    <div className="mb-64 lg: mb-48">
      <div className="container mx-auto">
        <div className="bg-purple-400/10 max-h-[400px] p-12 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6" data-aos="fade-up" data-aos-delay="1600" data-aos-offset="300">
              What our clients say
            </h2>
            <p
              className="max-w-2xl mx-auto mb-12 lg:mb-24"
              data-aos="fade-up"
              data-aos-delay="1800"
              data-aos-offset="300"
            >
              See what our customer say about us. It really matter for us. How good or bad we will make ir for
              evaluation to make EhyalLive better.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="2000" data-aos-offset="300">
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
