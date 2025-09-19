import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const Explore = () => {
  const [openEventDetails, setOpenEventDetails] = useState(null);
  
  const dummyEvents = [
    {
      id: 1,
      title: "Community Meetup",
      date: "December 1, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Downtown Conference Center",
      image: "https://images.unsplash.com/photo-1522543558187-768b6df7c25c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Join local community members for networking, discussions, and collaborative activities in a relaxed atmosphere."
    },
    {
      id: 2,
      title: "Tech Conference 2024",
      date: "December 5-6, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "City Hall Convention Center",
      image: "https://images.unsplash.com/photo-1582192493926-93f4847e1323?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Explore the latest in technology innovation with industry leaders, workshops, and networking opportunities."
    },
    {
      id: 3,
      title: "Charity Run for Hope",
      date: "December 10, 2024",
      time: "8:00 AM - 12:00 PM",
      location: "Central Park Main Entrance",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Run for a cause! Join us for a 5K charity run supporting local community initiatives and health awareness."
    }
  ];

  const handleViewDetails = (eventId) => {
    // Redirect to event details page
    window.open(`/events/${eventId}`, '_blank');
  };

  const handleViewAllEvents = () => {
    // Redirect to events page where users can view all events and add their own
    window.open('/events', '_blank');
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

  return (
    <section id="explore" className="bg-white dark:bg-gray-900 min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6">
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Events</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-2 md:px-0">
            Discover amazing events happening near you. From conferences to community gatherings, 
            find your next unforgettable experience.
          </p>
        </motion.div>

        {/* Events Grid - Only 3 events */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {dummyEvents.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="group cursor-pointer"
            >
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full flex flex-col transform transition-all duration-300"
                variants={cardHover}
              >
                {/* Event Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 md:h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-4 md:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-1">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mb-3 md:mb-4 flex-1 line-clamp-2">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-xs md:text-sm">
                      <svg className="w-3 h-3 md:w-4 md:h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-xs md:text-sm">
                      <svg className="w-3 h-3 md:w-4 md:h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                  </div>

                  {/* Single View Details Button */}
                  <div className="pt-2">
                    <Button
                      label="View Details"
                      onClick={() => handleViewDetails(event.id)}
                      type="primary"
                      size="medium"
                      fullWidth={true}
                      className="text-sm md:text-base font-semibold"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section for Viewing All Events */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3 md:mb-4">
              Want to see more events?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
              Explore our complete event calendar and discover even more amazing experiences.
            </p>
            <Button
              label="View All Events"
              onClick={handleViewAllEvents}
              type="primary"
              size="large"
              className="text-base md:text-lg font-semibold px-8"
            />
            <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm mt-4">
              Or <button onClick={() => window.open('/events?tab=host', '_blank')} className="text-blue-500 dark:text-blue-400 hover:underline">host your own event</button>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Explore;