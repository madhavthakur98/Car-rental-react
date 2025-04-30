import React from "react";
import { User } from "lucide-react";

const TestimonialCard = ({ name, role, content, iconColor = "blue" }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="h-12 w-12 rounded-full flex items-center justify-center bg-gray-100">
            <User color={iconColor} size={24} />
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
            <p className="text-gray-600">{role}</p>
          </div>
        </div>
        <div className="text-gray-700">
          <p className="italic">&quot;{content}&quot;</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
