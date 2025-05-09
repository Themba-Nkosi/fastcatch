import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import fleetImage from '../../assets/fleet-image.png';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] pt-28 flex items-center overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: `url(${fleetImage})`,
            backgroundPosition: 'center 75%'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col items-center justify-center text-center"
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.h1
            className="font-montserrat font-bold text-4xl md:text-5xl lg:text-7xl text-white mb-6"
            variants={fadeIn("up", 0.3)}
          >
            PROFESSIONAL <span className="text-[#E52A30]">SECURITY</span> SERVICES
          </motion.h1>
          
          <motion.p 
            className="max-w-2xl mx-auto text-gray-200 text-lg md:text-xl mb-10"
            variants={fadeIn("up", 0.4)}
          >
            Providing trusted security solutions with cutting-edge technology and highly trained personnel
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeIn("up", 0.5)}
          >
            <a
              href="#about"
              className="bg-[#E52A30] hover:bg-red-700 text-white font-montserrat font-semibold px-8 py-3 rounded-md transition-300 text-lg"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-montserrat font-semibold px-8 py-3 rounded-md transition-300 text-lg"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          repeatType: 'loop' 
        }}
      >
        <a href="#about" className="text-white">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
