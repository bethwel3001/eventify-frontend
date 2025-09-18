import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp, FiHelpCircle } from "react-icons/fi";

const faqsData = [
  {
    question: "What is Eventify and how does it work?",
    answer: "Eventify is a comprehensive platform that helps you discover, organize, and manage events effortlessly. Whether you're looking to attend local gatherings or host your own event, Eventify provides the tools and community to make every experience memorable. Our platform uses intelligent algorithms to recommend events based on your interests and location."
  },
  {
    question: "How can I host an event on Eventify?",
    answer: "Hosting an event is simple! Sign up for an account, click on 'Host an Event' in your dashboard, and follow our step-by-step process. You'll be able to set event details, create tickets, manage registrations, and promote your event to our community. Our intuitive tools make event management seamless from start to finish."
  },
  {
    question: "Is Eventify free to use for attendees and organizers?",
    answer: "Yes, Eventify offers free basic plans for both attendees and organizers. Attendees can discover and RSVP to events at no cost. Organizers can create and manage events with our essential tools for free. We also offer premium plans with advanced features like analytics, premium promotion, and custom branding for professional event organizers."
  },
  {
    question: "How does Eventify help me discover local events?",
    answer: "Eventify uses your location and preferences to show you relevant events happening nearby. You can browse events by category, date, or popularity. Our recommendation system learns from your interests and attendance history to suggest events you'll love. You can also follow favorite organizers to never miss their events."
  },
  {
    question: "What support options are available if I need help?",
    answer: "We offer multiple support channels: 24/7 chat support in the app, email support at support@eventify.com, and an extensive help center with guides and tutorials. For premium users, we provide dedicated account management and priority support. You can also reach out through our social media channels for quick questions."
  },
  {
    question: "How secure is my payment and personal information?",
    answer: "Eventify takes security seriously. We use bank-level encryption for all transactions and personal data. Payment processing is handled by PCI-compliant partners, and we never store your full payment details. Your personal information is protected under our comprehensive privacy policy and we're GDPR compliant for international users."
  },
  {
    question: "Can I integrate Eventify with my existing tools?",
    answer: "Absolutely! Eventify offers API access and integrations with popular tools like Google Calendar, Outlook, Slack, and various CRM systems. Our enterprise plan includes custom integration options to connect with your specific workflow tools and platforms."
  },
  {
    question: "What types of events can I host on Eventify?",
    answer: "Eventify supports a wide range of events including conferences, workshops, meetups, concerts, classes, webinars, and social gatherings. Whether you're organizing a small book club or a large conference, our platform provides the flexibility and tools you need to create successful events."
  }
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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

  const answerVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  return (
    <section id="faqs" className="bg-white dark:bg-gray-900 py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-6">
            <FiHelpCircle className="w-8 h-8 text-blue-500 dark:text-blue-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about Eventify. Can't find what you're looking for? 
            <a href="#contact" className="text-blue-500 dark:text-blue-400 hover:underline ml-1">Contact our support team</a>.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {faqsData.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 ${
                activeIndex === index 
                  ? "ring-2 ring-blue-500 dark:ring-blue-400 shadow-xl" 
                  : "hover:shadow-md"
              }`}
            >
              <motion.button
                onClick={() => toggleFaq(index)}
                className="flex items-center justify-between w-full px-6 py-5 text-left focus:outline-none"
                whileHover={{ backgroundColor: activeIndex !== index ? "rgba(59, 130, 246, 0.05)" : "" }}
              >
                <span className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 text-blue-500 dark:text-blue-400"
                >
                  {activeIndex === index ? (
                    <FiChevronUp className="w-6 h-6" />
                  ) : (
                    <FiChevronDown className="w-6 h-6" />
                  )}
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    variants={answerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Help Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Our support team is here to help you with any questions or concerns you might have about Eventify.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '#contact'}
              >
                Contact Support
              </motion.button>
              <motion.button
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Help Center
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Faqs;