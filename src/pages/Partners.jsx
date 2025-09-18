import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Slower animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  // Animation for the partner cards
  const cardHover = {
    rest: { 
      scale: 1,
      y: 0,
      rotate: 0,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    },
    hover: { 
      scale: 1.05,
      y: -8,
      rotate: 0.5,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Infinite floating animation for logos
  const infiniteFloat = {
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Glow animation for cards
  const glowEffect = {
    rest: {
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    },
    hover: {
      boxShadow: "0 0 25px rgba(59, 130, 246, 0.3), 0 0 15px rgba(139, 92, 246, 0.2)",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const partners = [
    {
      name: "TechCorp",
      logo: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="60" height="60" rx="10" className="fill-blue-500 dark:fill-blue-600" />
          <path d="M40 40L60 60M60 40L40 60" stroke="white" strokeWidth="4" />
        </svg>
      ),
      description: "Global technology leader empowering digital transformation."
    },
    {
      name: "InnovateCo",
      logo: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" className="fill-purple-500 dark:fill-purple-600" />
          <path d="M35 50L45 60L65 40" stroke="white" strokeWidth="4" strokeLinecap="round" />
        </svg>
      ),
      description: "Driving innovation through cutting-edge solutions."
    },
    {
      name: "SparkEvents",
      logo: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 20L60 45H75L65 60L75 80H60L50 55L40 80H25L35 60L25 45H40L50 20Z" className="fill-pink-500 dark:fill-pink-600" />
        </svg>
      ),
      description: "Premier event management and production company."
    },
    {
      name: "Nexus Labs",
      logo: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,20 80,80 20,80" className="fill-green-500 dark:fill-green-600" />
          <circle cx="50" cy="50" r="15" fill="white" />
        </svg>
      ),
      description: "Research and development pioneers in event technology."
    },
    {
      name: "VenueMaster",
      logo: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="30" width="50" height="40" rx="5" className="fill-orange-500 dark:fill-orange-600" />
          <rect x="35" y="20" width="30" height="10" rx="2" className="fill-orange-400 dark:fill-orange-500" />
          <rect x="40" y="45" width="20" height="20" rx="2" fill="white" />
        </svg>
      ),
      description: "Luxury venue management and booking platform."
    },
    {
      name: "ConnectPlus",
      logo: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="15" className="fill-indigo-500 dark:fill-indigo-600" />
          <circle cx="70" cy="30" r="15" className="fill-indigo-500 dark:fill-indigo-600" />
          <circle cx="30" cy="70" r="15" className="fill-indigo-500 dark:fill-indigo-600" />
          <circle cx="70" cy="70" r="15" className="fill-indigo-500 dark:fill-indigo-600" />
          <path d="M30 30L70 70M70 30L30 70" stroke="white" strokeWidth="3" />
        </svg>
      ),
      description: "Networking and community building specialists."
    }
  ];

  return (
    <section id="partners" ref={ref} className="bg-gray-50 dark:bg-gray-800 min-h-screen py-16 md:py-24 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Partners</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              We're proud to collaborate with industry leaders and innovators who share our vision 
              of transforming the event experience.
            </p>
          </div>
        </motion.div>

        {/* Partners Grid */}
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
            Trusted by Industry Leaders
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={fadeInUp}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.div 
                  className="bg-white dark:bg-gray-900 p-8 rounded-2xl h-full flex flex-col items-center text-center cursor-pointer"
                  variants={cardHover}
                >
                  <motion.div 
                    className="mb-6"
                    variants={infiniteFloat}
                    initial="animate"
                    animate="animate"
                  >
                    {partner.logo}
                  </motion.div>
                  <motion.h4 
                    className="text-xl font-bold text-gray-800 dark:text-white mb-3"
                    whileHover={{ color: "#3B82F6" }}
                    transition={{ duration: 0.2 }}
                  >
                    {partner.name}
                  </motion.h4>
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300"
                    whileHover={{ color: "#4B5563" }}
                    transition={{ duration: 0.2 }}
                  >
                    {partner.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Animated CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 1.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Interested in Partnering with Us?
            </h3>
            <p className="text-lg md:text-xl mb-6 opacity-90 max-w-2xl mx-auto">
              Join our network of partners and together we'll create extraordinary event experiences.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.0, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => window.location.href = '#contact'}
            >
              Become a Partner
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;