import React from "react";
import { Link } from "react-router-dom";
import { Users, Check, Shield } from "lucide-react";
import swiftImage from "../assets/swift.jpeg";
import kiaImage from "../assets/kia-seltos.jpeg";
import innovaImage from "../assets/toyota-innova.jpeg";
import minibusImage from "../assets/minibus.jpeg";
import largeBusImage from "../assets/large-bus.jpeg";
import tempoImage from "../assets/tempo.jpg";

export default function Fleet() {
  const vehicles = [
    {
      type: "Kia Carens",
      category: "Premium Sedan",
      passengers: 7,
      image: kiaImage,
      features: [
        "Air Conditioning",
        "Music System",
        "Comfortable Seating",
        "GPS Navigation",
      ],
    },
    {
      type: "Swift Dzire",
      category: "Economy Sedan",
      passengers: 4,
      image: swiftImage,
      features: [
        "Fuel Efficient",
        "Air Conditioning",
        "Bluetooth Audio",
        "Spacious Trunk",
      ],
    },
    {
      type: "Toyota Innova",
      category: "SUV",
      passengers: 7,
      image: innovaImage,
      features: [
        "Premium Interiors",
        "Ample Legroom",
        "Climate Control",
        "Entertainment System",
      ],
    },
    {
      type: "Minibus",
      category: "Group Transport",
      passengers: 15,
      image: minibusImage,
      features: ["Push-back Seats", "AC", "USB Charging", "Luggage Space"],
    },
    {
      type: "Tempo  Traveller",
      category: "Medium Group Transport",
      passengers: 26,
      image: tempoImage,
      features: [
        "Reclining Seats",
        "Air Conditioning",
        "Space for Luggage",
        "Onboard Restroom",
      ],
    },
    {
      type: "Large Bus",
      category: "Large Group Transport",
      passengers: 45,
      image: largeBusImage,
      features: [
        "Reclining Seats",
        "Air Conditioning",
        "Entertainment System",
        "Onboard Restroom",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Fleet</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our selection of well-maintained vehicles to suit your
            travel needs
          </p>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Image */}
              <div className="h-56 bg-gray-200 relative">
                {vehicle.image ? (
                  <img
                    src={vehicle.image}
                    alt={vehicle.type}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-500 font-medium">
                      {vehicle.type} image
                    </p>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {vehicle.type}
                  </h3>
                  <p className="text-gray-600">{vehicle.category}</p>
                </div>

                <div className="flex items-center text-gray-700 mb-4">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{vehicle.passengers} Passengers</span>
                </div>

                <div className="border-t border-gray-200 pt-4 mt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {vehicle.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-1 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center mt-4 mb-4 text-blue-600 text-sm">
                  <Shield className="h-4 w-4 mr-1" />
                  <span>All vehicles regularly maintained and sanitized</span>
                </div>
                {/* <Link
                          to="/contact"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                          Inquire Now
                        </Link> */}
                <Link to="/contact">
                  <button className="mt-2 w-full bg-blue-600 text-white font-medium py-3 px-4 rounded hover:bg-blue-700 transition-colors">
                    Book This Vehicle
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Banner */}
        <div className="mt-12 bg-blue-600 text-white rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-2">
            Looking for a different vehicle?
          </h3>
          <p className="mb-4">
            We have many more options available to meet your specific
            requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition-colors">
                Contact Us
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-transparent border-2 border-white text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:text-blue-600 transition-colors">
                Request Quote
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
