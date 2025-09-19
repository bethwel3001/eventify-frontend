import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-scroll";
import AuthModal from "./AuthModal";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
    };
  }, [isMenuOpen]);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const initialTheme = savedTheme === "dark" || (!savedTheme && systemPrefersDark);
    setDarkMode(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme);
    setMounted(true);
  }, []);

  // Handle scroll for navbar styling and active section
  useEffect(() => {
    const handleScroll = () => {
      if (!isMenuOpen) {
        setIsScrolled(window.scrollY > 20);
        
        // Update active section based on scroll position
        const sections = ['home', 'about', 'partners', 'explore', 'testimonials', 'contact', 'faqs'];
        const scrollPosition = window.scrollY + 100;
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetBottom = offsetTop + element.offsetHeight;
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const toggleTheme = useCallback(() => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  }, [darkMode]);

  const refreshWebsite = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      if (window.location.hash || window.scrollY > 0) {
        window.location.href = window.location.origin + window.location.pathname;
      }
    }, 400);
  };

  const navLinks = [
    { to: "home", label: "Home"},
    { to: "about", label: "About"},
    { to: "partners", label: "Partners"},
    { to: "explore", label: "Explore" },
    { to: "testimonials", label: "Testimonials" },
    { to: "contact", label: "Contact"},
    { to: "faqs", label: "FAQ's"},
  ];

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 dark:bg-gray-900/95 shadow-lg py-2 backdrop-blur-md border-b border-gray-200/30 dark:border-gray-700/30" 
          : "bg-transparent py-3"
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <button 
            onClick={refreshWebsite}
            className={`text-2xl md:text-3xl font-bold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-2 py-1 ${
              isScrolled 
                ? "bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent" 
                : "text-white dark:text-white"
            }`}
            aria-label="Refresh website"
          >
            Eventify
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-4 lg:gap-6 font-medium">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={600}
                  spy={true}
                  offset={-80}
                  activeClass="text-blue-600 dark:text-blue-400 font-semibold"
                  className={`cursor-pointer transition-all duration-300 relative py-1 px-1 text-lg ${
                    isScrolled 
                      ? `text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 ${
                          activeSection === link.to ? "text-blue-600 dark:text-blue-400 font-semibold" : ""
                        }`
                      : `text-white dark:text-gray-200 hover:text-blue-300 dark:hover:text-blue-400 ${
                          activeSection === link.to ? "text-blue-300 dark:text-blue-400 font-semibold" : ""
                        }`
                  }`}
                >
                  {link.label}
                  {activeSection === link.to && (
                    <span className={`absolute bottom-0 left-0 w-full h-1 rounded-full ${
                      isScrolled ? "bg-blue-600 dark:bg-blue-400" : "bg-blue-300 dark:bg-blue-400"
                    }`}></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className={`px-4 py-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 shadow-md hover:shadow-lg text-base sm:text-lg font-medium ${
                isScrolled 
                  ? "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700" 
                  : "bg-white text-blue-600 hover:bg-blue-50 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700"
              }`}
            >
              Join Us
            </button>
            
            <button 
              onClick={toggleTheme}
              className={`p-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 flex items-center justify-center ${
                isScrolled 
                  ? "hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200" 
                  : "hover:bg-white/20 dark:hover:bg-gray-700 text-white dark:text-gray-200"
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ml-1 flex items-center justify-center ${
                isScrolled 
                  ? "text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700" 
                  : "text-white dark:text-gray-200 hover:bg-white/20 dark:hover:bg-gray-700"
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 md:hidden"
            >
              {/* Backdrop with strong blur - Prevents scrolling */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/40 backdrop-blur-lg"
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Menu Container - Perfectly centered */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                {/* Menu Panel - Elegant design with unique shape */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  transition={{ 
                    type: "spring", 
                    damping: 20, 
                    stiffness: 300,
                    mass: 0.5
                  }}
                  className="relative w-full max-w-sm bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/30 overflow-hidden"
                >
                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-x-16 -translate-y-16 blur-xl"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full translate-x-20 translate-y-20 blur-xl"></div>
                  
                  {/* Header with Close Button */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-200/50 dark:border-gray-700/50">
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                      aria-label="Close menu"
                    >
                      <X size={22} />
                    </button>
                  </div>

                  {/* Navigation Links - Compact and Elegant */}
                  <nav className="p-6">
                    <div className="grid gap-2">
                      {navLinks.map((link, index) => (
                        <motion.div
                          key={link.to}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.07 }}
                        >
                          <Link
                            to={link.to}
                            smooth={true}
                            duration={600}
                            spy={true}
                            offset={-80}
                            activeClass="bg-blue-100/70 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-600 shadow-sm"
                            className={`flex items-center w-full text-left p-3 rounded-xl text-sm font-medium transition-all duration-200 border border-transparent
                              ${activeSection === link.to
                                ? "bg-blue-100/70 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-600 shadow-sm"
                                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-700/50"
                              }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span className="text-lg mr-3">{link.icon}</span>
                            <span className="flex-1">{link.label}</span>
                            {activeSection === link.to && (
                              <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full ml-2" />
                            )}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </nav>

                  {/* Additional Actions */}
                  <div className="p-6 border-t border-gray-200/50 dark:border-gray-700/50 space-y-4">
                    
                    <motion.button 
                      onClick={toggleTheme}
                      className="w-full flex items-center justify-center gap-2 py-2.5 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200 bg-gray-100/50 dark:bg-gray-700/30 rounded-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {darkMode ? (
                        <>
                          <Sun size={14} />Light Theme
                        </>
                      ) : (
                        <>
                          <Moon size={14} />Dark Theme
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;