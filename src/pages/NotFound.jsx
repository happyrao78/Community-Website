import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-teal-500">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mt-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mt-2">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-teal-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-teal-600 transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
