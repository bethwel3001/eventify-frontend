import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonialsData = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Event Organizer",
    feedback: "Eventify helped me organize my first charity event effortlessly! The platform is intuitive and the support team was incredibly helpful throughout the process.",
    image: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5
  },
  {
    id: 2,
    name: "Mark Spencer",
    role: "Tech Community Lead",
    feedback: "A fantastic platform for connecting with like-minded people. We've grown our community by 200% since using Eventify for our meetups.",
    image: "https://plus.unsplash.com/premium_photo-1669879825881-6d4e4bde67d5?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5
  },
  {
    id: 3,
    name: "Sophia Lee",
    role: "Frequent Attendee",
    feedback: "I discovered so many amazing events happening near me. The recommendation algorithm is spot-on! Highly recommend!",
    image: "https://plus.unsplash.com/premium_photo-1664478383014-e8bc930be7c2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4
  },
  {
    id: 4,
    name: "James Carter",
    role: "Startup Founder",
    feedback: "Eventify made hosting my tech meetup a breeze. The ticketing and registration features saved me hours of work. Thank you!",
    image: "https://plus.unsplash.com/premium_photo-1683140625076-22e9f46d03a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5
  },
  {
    id: 5,
    name: "Emma Watson",
    role: "Community Manager",
    feedback: "Great platform for fostering community connections. The analytics tools helped us understand our audience better. Love it!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4
  },
  {
    id: 6,
    name: "Olivia Wold",
    role: "Marketing Director",
    feedback: "The promotional tools integrated into Eventify helped us reach a wider audience. Our event attendance doubled!",
    image: "https://images.unsplash.com/photo-1660754696399-991bb4c242b2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Calculate how many testimonials to show based on screen size
  const getTestimonialsPerView = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [testimonialsPerView, setTestimonialsPerView] = useState(getTestimonialsPerView());

  useEffect(() => {
    const handleResize = () => {
      setTestimonialsPerView(getTestimonialsPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonialsPerView]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex + testimonialsPerView < testimonialsData.length 
        ? prevIndex + testimonialsPerView 
        : 0
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex - testimonialsPerView >= 0 
        ? prevIndex - testimonialsPerView 
        : testimonialsData.length - testimonialsPerView
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const visibleTestimonials = testimonialsData.slice(
    currentIndex,
    currentIndex + testimonialsPerView
  );

  // If we're at the end and need to loop around
  const wrappedTestimonials = currentIndex + testimonialsPerView > testimonialsData.length
    ? [
        ...visibleTestimonials,
        ...testimonialsData.slice(0, testimonialsPerView - visibleTestimonials.length)
      ]
    : visibleTestimonials;

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardHover = {
    rest: { 
      scale: 1,
      y: 0
    },
    hover: { 
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Render star ratings
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="bg-white dark:bg-gray-900 py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Users Say</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover why thousands of event organizers and attendees trust Eventify to create memorable experiences.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={currentIndex}
            >
              <AnimatePresence mode="wait" custom={direction}>
                {wrappedTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    custom={direction}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="flex justify-center"
                  >
                    <motion.div
                      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 w-full max-w-sm flex flex-col h-full"
                      variants={cardHover}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                    >
                      {/* Rating */}
                      <div className="flex justify-center mb-4">
                        <div className="flex">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>

                      {/* Feedback */}
                      <p className="text-gray-600 dark:text-gray-300 text-center mb-6 flex-grow italic">
                        "{testimonial.feedback}"
                      </p>

                      {/* User Info */}
                      <div className="text-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full mx-auto mb-3 object-cover border-4 border-white dark:border-gray-700 shadow-md"
                        />
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-blue-500 dark:text-blue-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <motion.button
              onClick={handlePrev}
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous testimonials"
            >
              <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Dots indicator */}
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(testimonialsData.length / testimonialsPerView) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index * testimonialsPerView > currentIndex ? 1 : -1);
                    setCurrentIndex(index * testimonialsPerView);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex >= index * testimonialsPerView && 
                    currentIndex < (index + 1) * testimonialsPerView
                      ? "bg-blue-500"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial group ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={handleNext}
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next testimonials"
            >
              <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;