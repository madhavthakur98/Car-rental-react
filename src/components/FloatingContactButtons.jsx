import React, { useState } from "react";
import { Phone, X } from "lucide-react";

export default function FloatingContactButtons() {
  const [isExpanded, setIsExpanded] = useState(false);
  const phoneNumber = "9560710895";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.location.href = `https://wa.me/${phoneNumber}`;
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      {isExpanded && (
        <div className="flex flex-col gap-4 mb-4 items-end">
          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg flex items-center justify-center transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.127 16.945c-.282.84-1.235 1.54-2.046 1.75-.564.14-1.3.214-3.755-.84-3.16-1.36-5.21-4.68-5.368-4.894-.153-.214-1.24-1.646-1.24-3.13 0-1.49.784-2.22 1.06-2.52.276-.303.606-.353.81-.353l.57.008c.188.003.433.013.661.643.226.63.773 2.17.84 2.33.068.157.113.344.035.547-.077.203-.113.32-.226.498-.113.176-.236.39-.337.526-.107.144-.218.3-.094.574.125.273.557 1.17 1.199 1.897.819.934 1.508 1.22 1.727 1.354.219.134.348.113.477-.056.13-.17.56-.653.71-.876.151-.223.3-.186.507-.111.206.074 1.312.618 1.538.731.226.114.376.168.434.263.056.095.056.559-.132 1.096z" />
            </svg>
          </button>

          {/* Call Button */}
          <button
            onClick={handleCall}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg flex items-center justify-center transition-all duration-300"
          >
            <Phone size={24} />
          </button>
        </div>
      )}

      {/* Toggle Button with Phone Icon */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`${
          isExpanded
            ? "bg-red-500 hover:bg-red-600"
            : "bg-purple-500 hover:bg-purple-600"
        } text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-all duration-300`}
      >
        {isExpanded ? (
          <X size={24} />
        ) : (
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 00-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z" />
          </svg>
        )}
      </button>
    </div>
  );
}
