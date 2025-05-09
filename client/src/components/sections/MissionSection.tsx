import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { DogLogo } from "../ui/dog-logo";

const MissionSection = () => {
  return (
    <section className="py-20 bg-[#F5F5F5] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Logo background element */}
        <div className="absolute right-0 top-0 opacity-5 md:opacity-10">
          <DogLogo className="text-[#E52A30] w-[300px] h-[300px]" />
        </div>
        
        <motion.div 
          className="text-center mb-16"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#333333] mb-2">Our Core Principles</h2>
          <div className="w-20 h-1 bg-[#E52A30] mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Mission */}
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-300"
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="w-16 h-16 bg-[#E52A30] rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-bullseye text-white text-2xl"></i>
            </div>
            <h3 className="font-montserrat font-bold text-2xl text-[#333333] mb-4 text-center">Mission</h3>
            <p className="font-poppins text-gray-700 text-center">
              Provide qualified, experienced, continuously trained staff. Promote integrity, professionalism, and reward excellence.
            </p>
          </motion.div>
          
          {/* Values */}
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-300"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="w-16 h-16 bg-[#1A365D] rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-heart text-white text-2xl"></i>
            </div>
            <h3 className="font-montserrat font-bold text-2xl text-[#333333] mb-4 text-center">Values</h3>
            <p className="font-poppins text-gray-700 text-center">
              Service excellence, governance, best labor practices, empathy, dignity, and goal orientation.
            </p>
          </motion.div>
          
          {/* Vision */}
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-300"
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="w-16 h-16 bg-[#333333] rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-eye text-white text-2xl"></i>
            </div>
            <h3 className="font-montserrat font-bold text-2xl text-[#333333] mb-4 text-center">Vision</h3>
            <p className="font-poppins text-gray-700 text-center">
              Become the leading security partner for clients in infrastructure and asset protection.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
