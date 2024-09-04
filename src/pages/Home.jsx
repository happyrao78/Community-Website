import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Welcome to 365dayscoding
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your ultimate destination for coding
        </p>
        <a
          href="/about"
          className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
        >
          Learn More About Us
        </a>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Participate in Challenges</h2>
          <p className="text-gray-700 mb-4">
            Test your skills and compete with others by participating in our weekly coding challenges.
          </p>
          <a
            href="/challenges"
            className="text-teal-500 font-semibold hover:text-teal-600"
          >
            Join a Challenge &rarr;
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Explore Our Resources</h2>
          <p className="text-gray-700 mb-4">
            Check out our extensive library of tutorials, coding challenges, and project ideas to enhance your skills.
          </p>
          <a
            href="/resources"
            className="text-teal-500 font-semibold hover:text-teal-600"
          >
            Start Learning &rarr;
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Join Our Community</h2>
          <p className="text-gray-700 mb-4">
            Become a part of our growing community of developers. Share your knowledge and learn from others.
          </p>
          <a
            href="/contact"
            className="text-teal-500 font-semibold hover:text-teal-600"
          >
            Get Involved &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
