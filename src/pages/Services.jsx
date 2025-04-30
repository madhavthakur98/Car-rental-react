import React from "react";
import { Link } from "react-router-dom";
import carImage from "../assets/Services/car.jpg";
import busImage from "../assets/Services/bus.png";
import corporateImage from "../assets/Services/corporate.jpg";
import tourImage from "../assets/Services/tour.jpg";

const Services = () => {
  const services = [
    {
      id: "car-rental",
      title: "Car Rental",
      description:
        "Choose from our wide range of cars for your travel needs, from economy to luxury vehicles.",
      features: [
        "Hourly, daily, and weekly rental options",
        "Well-maintained fleet of vehicles",
        "Professional drivers",
        "GPS navigation systems",
        "Flexible pickup and drop-off locations",
      ],
      image: carImage,
    },
    {
      id: "bus-rental",
      title: "Bus Rental",
      description:
        "Comfortable and spacious buses for group travel, events, and corporate outings.",
      features: [
        "Various bus sizes available (15, 25, 35, and 45 seaters)",
        "Air-conditioned vehicles",
        "Entertainment systems",
        "Experienced drivers",
        "Ideal for school trips, corporate events, and tours",
      ],
      image: busImage,
    },
    {
      id: "corporate-travel",
      title: "Corporate Travel",
      description:
        "Specialized transport solutions tailored for business and corporate needs.",
      features: [
        "Employee transportation services",
        "Airport transfers",
        "Conference and event transportation",
        "Corporate accounts with flexible billing options",
        "Professional and reliable service",
      ],
      image: corporateImage,
    },
    {
      id: "tour-packages",
      title: "Tour Packages",
      description:
        "Comprehensive tour packages for exploring local attractions and destinations.",
      features: [
        "Day tours and multi-day packages",
        "Customizable itineraries",
        "Experienced tour guides",
        "Hotel booking assistance",
        "All-inclusive options available",
      ],
      image: tourImage,
    },
  ];

  return (
    <div>
      {/* Header */}
      {/* <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-indigo-200">
              Comprehensive transportation solutions for all your travel needs.
            </p>
          </div>
        </div>
      </div> */}
      <div className="max-w-6xl mx-auto px-4 mt-10px">
        {/* Header */}
        <div className="text-center mb-16 ">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 pt-5">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive transportation solutions for all your travel needs.
          </p>
        </div>
      </div>

      {/* Services List */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
              >
                {index % 2 === 0 ? (
                  <>
                    {/* For even indexes (0, 2) - Text on left, image on right */}
                    <div>
                      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        {service.title}
                      </h2>
                      <p className="mt-3 text-lg text-gray-500">
                        {service.description}
                      </p>

                      <div className="mt-10">
                        <h3 className="text-lg font-medium text-gray-900">
                          Features:
                        </h3>
                        <ul className="mt-3 space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex">
                              <svg
                                className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span className="ml-3 text-gray-500">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-8">
                        <Link
                          to="/contact"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                          Inquire Now
                        </Link>
                      </div>
                    </div>
                    <div className="mt-10 lg:mt-0">
                      <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-lg">
                        <img
                          className="w-full h-full object-cover object-center"
                          src={service.image}
                          alt={service.title}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* For odd indexes (1, 3) - Image on left, text on right */}
                    <div className="mt-10 lg:mt-0">
                      <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-lg">
                        <img
                          className="w-full h-full object-cover object-center"
                          src={service.image}
                          alt={service.title}
                        />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        {service.title}
                      </h2>
                      <p className="mt-3 text-lg text-gray-500">
                        {service.description}
                      </p>

                      <div className="mt-10">
                        <h3 className="text-lg font-medium text-gray-900">
                          Features:
                        </h3>
                        <ul className="mt-3 space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex">
                              <svg
                                className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span className="ml-3 text-gray-500">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-8">
                        <Link
                          to="/contact"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                          Inquire Now
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Transparent Pricing
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              We offer competitive rates with no hidden charges.
            </p>
          </div>

          <div className="mt-10 max-w-lg mx-auto lg:max-w-none">
            <p className="text-lg text-gray-500 text-center mb-8">
              Our pricing varies based on the type of vehicle, rental duration,
              and additional services required. Contact us for a customized
              quote tailored to your specific needs.
            </p>

            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Find answers to common questions about our services.
            </p>
          </div>

          <div className="mt-12">
            <dl className="space-y-6 divide-y divide-gray-200">
              <div className="pt-6">
                <dt className="text-lg font-medium text-gray-900">
                  What documents do I need to rent a vehicle?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  You'll need a valid driver's license, a form of identification
                  (passport or ID card), and a credit card for the security
                  deposit.
                </dd>
              </div>

              <div className="pt-6">
                <dt className="text-lg font-medium text-gray-900">
                  Do you provide drivers with your vehicles?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Yes, all our rentals come with professional drivers who are
                  familiar with local routes and traffic conditions.
                </dd>
              </div>

              <div className="pt-6">
                <dt className="text-lg font-medium text-gray-900">
                  Can I book a vehicle for out-of-state travel?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Yes, we offer services for both local and outstation travel.
                  Additional charges may apply for long-distance journeys.
                </dd>
              </div>

              <div className="pt-6">
                <dt className="text-lg font-medium text-gray-900">
                  How far in advance should I book a vehicle?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  We recommend booking at least 48 hours in advance, especially
                  during peak seasons. However, we can also accommodate
                  last-minute bookings subject to availability.
                </dd>
              </div>

              <div className="pt-6">
                <dt className="text-lg font-medium text-gray-900">
                  What is your cancellation policy?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Cancellations made 24 hours before the scheduled pickup time
                  will receive a full refund. Cancellations made less than 24
                  hours in advance may be subject to a cancellation fee.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Need more information?</span>
            <span className="block text-indigo-200">
              Our team is ready to assist you.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
