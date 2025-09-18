import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const featureCards = [
    {
      title: "Easy Event Discovery",
      description: "Find events tailored to your interests and location with our intelligent recommendation system.",
      gradient: "from-blue-500 to-purple-600",
      icon: (
        <svg className="w-12 h-12 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Host Effortlessly",
      description: "Plan, organize, and host events with our intuitive tools. From ticketing to promotions, we've got you covered.",
      gradient: "from-purple-500 to-pink-600",
      icon: (
        <svg className="w-12 h-12 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      )
    },
    {
      title: "Engage Communities",
      description: "Foster meaningful connections and community bonds through shared experiences and interactions.",
      gradient: "from-pink-500 to-red-500",
      icon: (
        <svg className="w-12 h-12 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" ref={ref} className="bg-white dark:bg-gray-900 min-h-screen py-16 md:py-24 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Eventify</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Eventify is your premier platform for discovering, hosting, and connecting through extraordinary events. 
              Whether you're looking for local happenings or planning to organize your own gathering, we provide the tools 
              and community to make every experience memorable.
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Our mission is to bring people together, creating spaces where communities thrive and memories are made. 
              Join thousands of event enthusiasts who trust Eventify to transform how they discover and host events.
            </p>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div 
          className="mb-16"
          variants={staggerChildren}
          initial="hidden"
          animate={isInView ? "visible" : ""}
        >
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
            variants={fadeInUp}
          >
            Why Choose Eventify?
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureCards.map((card, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={fadeInUp}
              >
                <div className={`bg-gradient-to-br ${card.gradient} p-8 rounded-2xl shadow-xl transform transition-all duration-500 group-hover:-translate-y-2 h-full flex flex-col`}>
                  <div className="text-center mb-6">
                    {card.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white text-center mb-4">
                    {card.title}
                  </h4>
                  <p className="text-gray-100 text-center mb-6 flex-grow">
                    {card.description}
                  </p>
                  <div className="text-center">
                    <motion.button
                      className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 md:p-12 shadow-inner"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50K+</div>
              <div className="text-gray-600 dark:text-gray-300">Events Hosted</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">200K+</div>
              <div className="text-gray-600 dark:text-gray-300">Happy Users</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">30+</div>
              <div className="text-gray-600 dark:text-gray-300">Cities</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">99%</div>
              <div className="text-gray-600 dark:text-gray-300">Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;