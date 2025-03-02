import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id="home" className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-primary to-secondary text-white dark:text-gray-900">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
          Welcome to Eventify
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl mb-4 text-center animate-fadeIn delay-500">
          Discover and host events that bring your community closer.
        </p>

        <h2 className="text-lg font-bold dark:text-white mb-8 animate-fadeIn delay-700">
          Join Eventify today and testify!
        </h2>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 items-center mt-8">
          {/* Explore Events Button */}
          <a
            href="#explore"
            role="button"
            aria-label="Explore Events"
            className="text-lg md:text-xl font-semibold px-6 py-3 bg-white text-primary rounded-md shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl animate-fadeIn delay-1000"
          >
            Explore Events
          </a>

          {/* Host an Event Button */}
          <a   
  href="?page=events"
  target="_blank"
  rel="noopener noreferrer"    
  className="text-lg md:text-xl font-semibold px-6 py-3 border-2 border-white text-white rounded-md shadow-lg transition-transform transform hover:scale-105 hover:bg-white hover:text-primary hover:shadow-2xl animate-fadeIn delay-1000"
    >
      Host an Event
    </a>
        </div>
      </header>
    </div>
  );
};

export default Home;