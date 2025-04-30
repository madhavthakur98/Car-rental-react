import React, { useState, useEffect } from "react";

// Import images from assets
import one from "../assets/fleet/one.jpeg";
import two from "../assets/fleet/two.jpeg";
import three from "../assets/fleet/three.jpeg";
import four from "../assets/fleet/four.jpeg";
import five from "../assets/fleet/five.jpeg";
import six from "../assets/fleet/six.jpeg";
import seven from "../assets/fleet/seven.jpeg";
import eight from "../assets/fleet/eight.jpg";

const MyFleet = () => {
  // Array of all fleet images with alt text
  const fleetImages = [
    { src: one, alt: "Fleet Vehicle 1" },
    { src: two, alt: "Fleet Vehicle 2" },
    { src: three, alt: "Fleet Vehicle 3" },
    { src: four, alt: "Fleet Vehicle 4" },
    { src: five, alt: "Fleet Vehicle 5" },
    { src: six, alt: "Fleet Vehicle 6" },
    { src: seven, alt: "Fleet Vehicle 7" },
    { src: eight, alt: "Fleet Vehicle 8" },
  ];

  // State for mobile carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile sized
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Clean up
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Functions to navigate through slides
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === fleetImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? fleetImages.length - 1 : prev - 1));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Fleet</h2>

      {/* Desktop View - Grid Layout (hidden on mobile) */}
      <div className="hidden md:grid md:grid-cols-4 gap-4">
        {fleetImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Mobile View - Carousel Layout (hidden on desktop) */}
      <div className="relative md:hidden">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={fleetImages[currentSlide].src}
            alt={fleetImages[currentSlide].alt}
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow-md hover:bg-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow-md hover:bg-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dots indicator */}
        <div className="flex justify-center mt-4">
          {fleetImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`mx-1 w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyFleet;
