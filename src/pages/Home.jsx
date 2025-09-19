import React from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";

const Home = () => {
  const handleHostEvent = () => {
    window.open("/events", "_blank", "noopener,noreferrer");
  };

  const scrollToExplore = () => {
    const exploreSection = document.getElementById('explore');
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white overflow-hidden pt-16">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNykiIHN0cm9rZS13aWR0aD0iMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMTUiLz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in-up">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">Eventify</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto opacity-95 animate-fade-in-up delay-150 px-2 sm:px-0">
            Discover and host events that bring your community closer. From conferences to concerts, we make event management seamless.
          </p>

          <div className="mb-8 sm:mb-10 animate-fade-in-up delay-300">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              Join Eventify today and testify!
            </h2>
            <p className="text-blue-100 dark:text-blue-200 text-base sm:text-lg">
              Thousands of events. One platform.
            </p>
          </div>

          {/* Enhanced Button Container - Side by side on ALL screens */}
          <motion.div 
            className="flex flex-row justify-center gap-3 sm:gap-4 mt-6 sm:mt-10 animate-fade-in-up delay-500 w-full max-w-md sm:max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {/* Explore Events Button */}
            <motion.div 
              className="flex-1 min-w-[120px] sm:min-w-[140px]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                label="Explore Events"
                onClick={scrollToExplore}
                type="primary"
                size="large"
                fullWidth={true}
                className="text-sm sm:text-base md:text-lg font-semibold"
              />
            </motion.div>

            {/* Host Event Button */}
            <motion.div 
              className="flex-1 min-w-[120px] sm:min-w-[140px]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                label="Host Event"
                onClick={handleHostEvent}
                type="outline"
                size="large"
                fullWidth={true}
                className="text-sm sm:text-base md:text-lg font-semibold"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;