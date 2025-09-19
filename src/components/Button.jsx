import React from "react";
import { motion } from "framer-motion";

const Button = ({ 
  label, 
  onClick, 
  type = "primary", 
  size = "medium",
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = "left",
  fullWidth = false,
  className = ""
}) => {
  // Base classes
  const baseClasses = `
    inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 
    focus:outline-none focus:ring-4 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed
    ${fullWidth ? 'w-full' : ''}
  `;

  // Size classes - Modified for better mobile appearance
  const sizeClasses = {
    small: 'px-3 py-2 text-sm',
    medium: 'px-4 py-2.5 text-base',
    large: 'px-5 py-3 text-lg min-h-[48px]' // Minimum touch target size
  };

  // Type classes - Enhanced for better mobile visibility
  const typeClasses = {
    primary: `
      bg-gradient-to-r from-blue-500 to-purple-600 text-white 
      hover:from-blue-600 hover:to-purple-700 
      focus:ring-blue-500
      active:from-blue-700 active:to-purple-800
      shadow-md hover:shadow-lg
    `,
    outline: `
      border-2 border-white text-white bg-transparent 
      hover:bg-white hover:text-blue-600 
      focus:ring-white focus:ring-opacity-25
      active:bg-white active:text-blue-700
      shadow-md hover:shadow-lg
    `,
    secondary: `
      bg-gray-600 text-white 
      hover:bg-gray-700 
      focus:ring-gray-500
      active:bg-gray-800
    `,
    success: `
      bg-gradient-to-r from-green-500 to-emerald-600 text-white 
      hover:from-green-600 hover:to-emerald-700 
      focus:ring-green-500
      active:from-green-700 active:to-emerald-800
    `,
    danger: `
      bg-gradient-to-r from-red-500 to-pink-600 text-white 
      hover:from-red-600 hover:to-pink-700 
      focus:ring-red-500
      active:from-red-700 active:to-pink-800
    `,
    ghost: `
      text-gray-700 dark:text-gray-300 bg-transparent 
      hover:bg-gray-100 dark:hover:bg-gray-800 
      focus:ring-gray-500
      active:bg-gray-200 dark:active:bg-gray-700
    `
  };

  const classes = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${typeClasses[type]}
    ${className}
  `;

  // Loading spinner component
  const LoadingSpinner = () => (
    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {loading && <LoadingSpinner />}
      {Icon && iconPosition === "left" && !loading && (
        <Icon className="w-4 h-4 mr-2" />
      )}
      <span className="whitespace-nowrap">{label}</span>
      {Icon && iconPosition === "right" && !loading && (
        <Icon className="w-4 h-4 ml-2" />
      )}
    </motion.button>
  );
};

export default Button;