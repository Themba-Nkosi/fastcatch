import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { DogLogo } from "./ui/dog-logo";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-300 ${
      scrolled 
        ? "bg-white shadow-lg py-2" 
        : "bg-gradient-to-b from-black/70 to-transparent py-4"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <DogLogo className="w-24 md:w-32" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="#home" 
              className={`font-montserrat font-medium transition-300 ${
                scrolled ? "text-[#1A365D] hover:text-[#E52A30]" : "text-white hover:text-[#E52A30]"
              }`}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`font-montserrat font-medium transition-300 ${
                scrolled ? "text-[#1A365D] hover:text-[#E52A30]" : "text-white hover:text-[#E52A30]"
              }`}
            >
              About
            </a>
            <a 
              href="#services" 
              className={`font-montserrat font-medium transition-300 ${
                scrolled ? "text-[#1A365D] hover:text-[#E52A30]" : "text-white hover:text-[#E52A30]"
              }`}
            >
              Services
            </a>
            <a 
              href="#contact" 
              className={`font-montserrat font-medium transition-300 ${
                scrolled ? "text-[#1A365D] hover:text-[#E52A30]" : "text-white hover:text-[#E52A30]"
              }`}
            >
              Contact
            </a>
          </nav>
          
          {/* CTA Button */}
          <a 
            href="#contact" 
            className="hidden md:block bg-[#E52A30] hover:bg-red-700 text-white font-montserrat font-semibold px-5 py-2 rounded-md transition-300"
          >
            Take Action
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"} text-2xl ${
              scrolled ? "text-[#1A365D]" : "text-white"
            }`}></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <motion.div 
        className={`md:hidden bg-white shadow-lg absolute w-full ${mobileMenuOpen ? "block" : "hidden"}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: mobileMenuOpen ? "auto" : 0,
          opacity: mobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a 
            href="#home" 
            onClick={closeMobileMenu}
            className="font-montserrat font-medium text-[#1A365D] hover:text-[#E52A30] transition-300"
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={closeMobileMenu}
            className="font-montserrat font-medium text-[#1A365D] hover:text-[#E52A30] transition-300"
          >
            About
          </a>
          <a 
            href="#services" 
            onClick={closeMobileMenu}
            className="font-montserrat font-medium text-[#1A365D] hover:text-[#E52A30] transition-300"
          >
            Services
          </a>
          <a 
            href="#contact" 
            onClick={closeMobileMenu}
            className="font-montserrat font-medium text-[#1A365D] hover:text-[#E52A30] transition-300"
          >
            Contact
          </a>
          <a 
            href="#contact" 
            onClick={closeMobileMenu}
            className="bg-[#E52A30] hover:bg-red-700 text-white font-montserrat font-semibold px-5 py-2 rounded-md transition-300 text-center"
          >
            Take Action
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
