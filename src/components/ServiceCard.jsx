import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, description, icon, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="text-indigo-600 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          to={link}
          className="text-indigo-600 font-medium hover:text-indigo-700"
        >
          Learn more &rarr;
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
