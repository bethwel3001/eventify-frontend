import React, { useState, useEffect } from "react";
import { motion, AnimatePresence} from "framer-motion";
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaArrowUp,
  FaHeart,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [companyNameColor, setCompanyNameColor] = useState("from-blue-500 to-purple-600");

  // Show scroll to top button when page is scrolled
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Color changing effect for company name
  useEffect(() => {
    const interval = setInterval(() => {
      const gradients = [
        "from-blue-500 to-purple-600",
        "from-purple-500 to-pink-600",
        "from-green-500 to-blue-600",
        "from-orange-500 to-red-600"
      ];
      const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
      setCompanyNameColor(randomGradient);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer Content - Optimized for mobile */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Company Info - Centered on mobile */}
          <motion.div variants={itemVariants} className="text-center md:text-left space-y-4">
            <h2 className={`text-3xl font-bold bg-gradient-to-r ${companyNameColor} bg-clip-text text-transparent`}>
              Eventify
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Connecting people through unforgettable events. Discover, host, and experience moments that matter.
            </p>
            <div className="flex justify-center md:justify-start space-x-3">
              <motion.a 
                href="#" 
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Facebook"
              >
                <FaFacebook className="w-4 h-4 md:w-5 md:h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Twitter"
              >
                <FaTwitter className="w-4 h-4 md:w-5 md:h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="p-2 bg-gray-800 rounded-lg hover:bg-pink-600 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4 md:w-5 md:h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4 md:w-5 md:h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links - Centered on mobile */}
          <motion.div variants={itemVariants} className="text-center md:text-left space-y-4">
            <h3 className="text-lg font-semibold text-white mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Explore', 'About', 'Testimonials', 'Contact', 'FAQs'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline text-sm md:text-base"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Event Categories - Centered on mobile */}
          <motion.div variants={itemVariants} className="text-center md:text-left space-y-4">
            <h3 className="text-lg font-semibold text-white mb-3 md:mb-4">Event Categories</h3>
            <ul className="space-y-2">
              {['Conferences', 'Workshops', 'Meetups', 'Concerts', 'Sports', 'Networking'].map((category) => (
                <li key={category}>
                  <a 
                    href="#explore" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline text-sm md:text-base"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info - Centered on mobile */}
          <motion.div variants={itemVariants} className="text-center md:text-left space-y-4">
            <h3 className="text-lg font-semibold text-white mb-3 md:mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <FaEnvelope className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm md:text-base">hello@eventify.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <FaPhone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm md:text-base">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <FaMapMarkerAlt className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm md:text-base">123 Event Street</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <FaClock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm md:text-base">Mon - Fri: 9AM - 6PM</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Newsletter Subscription - Optimized for mobile */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-4 md:p-6 mb-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Stay Updated with Eventify</h3>
          <p className="text-blue-100 text-sm md:text-base mb-4">Subscribe to our newsletter for the latest events</p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 md:px-4 py-2 rounded-lg border-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-gray-900 text-sm md:text-base"
            />
            <motion.button
              className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg transition-all duration-300 text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>

        {/* Footer Bottom - Optimized for mobile */}
        <motion.div 
          className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-gray-400 text-xs md:text-sm text-center md:text-left">
            <p>&copy; {currentYear} Eventify. All rights reserved.</p>
          </div>
          
          <div className="flex items-center space-x-4 md:space-x-6 text-xs md:text-sm text-gray-400 flex-wrap justify-center">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Cookies</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Help</a>
          </div>
        </motion.div>

        {/* Made with love - Centered */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-xs flex items-center justify-center">
            Made with <FaHeart className="text-red-500 mx-1" /> by the Eventify team
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <FaArrowUp className="w-4 h-4 md:w-5 md:h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;