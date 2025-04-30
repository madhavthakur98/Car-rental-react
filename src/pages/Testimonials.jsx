import React from "react";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Manali",
      rating: 5,
      text: "RK Tour and Travels made our family trip to Shimla absolutely perfect. The driver was professional and the vehicle was spotless. Highly recommend!",
      service: "Family vacation car rental",
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      text: "As a business traveler, I need reliable transportation. RK has never let me down in the 3 years I've been using their services. Punctual and professional.",
      service: "Corporate car service",
    },
    {
      name: "Sunita Patel",
      location: "Chandigarh",
      rating: 5,
      text: "We booked a 30-seater bus for our college trip and had an amazing experience. Comfortable seats, AC working perfectly, and very reasonable pricing.",
      service: "College tour bus rental",
    },
    {
      name: "Vikram Singh",
      location: "Delhi",
      rating: 4,
      text: "Great service for our wedding guests! The drivers knew all the local routes and were very accommodating with our schedule changes.",
      service: "Wedding transportation",
    },
    {
      name: "Anjali Gupta",
      location: "Jaipur",
      rating: 5,
      text: "The luxury car we rented for our anniversary was immaculate. The chauffeur was courteous and the whole experience felt premium. Worth every rupee!",
      service: "Luxury car rental",
    },
    {
      name: "Mohammed Ismail",
      location: "Goa",
      rating: 5,
      text: "Our pilgrimage group of 25 people had a wonderful experience with RK's bus service. Clean vehicle, experienced driver, and excellent customer support.",
      service: "Religious tour bus service",
    },
  ];

  const renderStars = (count) => {
    return Array(count)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
      ));
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied
            customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-6 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-100" />
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
              <div className="flex mb-3">{renderStars(testimonial.rating)}</div>
              <p className="text-gray-600 mb-3">"{testimonial.text}"</p>
              <p className="text-sm text-blue-600 font-medium">
                {testimonial.service}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Join our satisfied customers and experience the RK difference
          </p>
          <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">
            Book Your Ride Today
          </button>
        </div>
      </div>
    </div>
  );
}
