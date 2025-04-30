import React from "react";
import {
  Users,
  Award,
  Clock,
  ThumbsUp,
  Truck,
  CheckCircle,
} from "lucide-react";

export default function AboutSection() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About RK Tour and Travels
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for comfortable and reliable transportation
            solutions since 2010.
          </p>
        </div>

        {/* Company Story */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden md:grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Story
              </h3>
              <p className="text-gray-600 mb-6">
                RK Tour and Travels was founded with a simple mission: to
                provide exceptional transportation services that prioritize
                comfort, safety, and customer satisfaction.
              </p>
              <p className="text-gray-600">
                Starting with just 3 vehicles in 2010, we've grown to a fleet of
                over 100 well-maintained cars and buses, serving thousands of
                satisfied customers across the country. Our commitment to
                quality service and passenger safety has made us a leading name
                in the transportation industry.
              </p>
            </div>
            <div className="bg-blue-600 text-white p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0" />
                  <span>Modern, well-maintained fleet of vehicles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0" />
                  <span>Professional, experienced drivers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0" />
                  <span>Competitive pricing with no hidden fees</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0" />
                  <span>24/7 customer support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0" />
                  <span>Customizable tour packages</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats & Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <Users className="h-12 w-12 mx-auto text-blue-600 mb-4" />
            <h4 className="text-4xl font-bold text-gray-900 mb-2">10k+</h4>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <Truck className="h-12 w-12 mx-auto text-blue-600 mb-4" />
            <h4 className="text-4xl font-bold text-gray-900 mb-2">100+</h4>
            <p className="text-gray-600">Vehicles</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <Award className="h-12 w-12 mx-auto text-blue-600 mb-4" />
            <h4 className="text-4xl font-bold text-gray-900 mb-2">15+</h4>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <ThumbsUp className="h-12 w-12 mx-auto text-blue-600 mb-4" />
            <h4 className="text-4xl font-bold text-gray-900 mb-2">98%</h4>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Reliability
              </h4>
              <p className="text-gray-600 text-center">
                We understand the importance of punctuality and dependability in
                transportation services. Our commitment to timeliness ensures
                you never miss important events or connections.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Safety
              </h4>
              <p className="text-gray-600 text-center">
                Your safety is our top priority. All our vehicles undergo
                regular maintenance checks, and our drivers are trained
                professionals with years of experience on the road.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Customer Focus
              </h4>
              <p className="text-gray-600 text-center">
                We believe in building long-term relationships with our
                customers. Our team goes above and beyond to ensure your
                transportation needs are met with the highest level of service.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-600 text-white rounded-lg shadow-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Experience Premium Transportation?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you need a car for a business trip, a bus for a group tour,
            or a custom transportation solution, RK Tour and Travels is here to
            serve you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
              Book Now
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
