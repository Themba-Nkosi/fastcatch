import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import companyFleetImage from '../../assets/company-fleet.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* About Content */}
          <motion.div 
            className="md:w-1/2"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#333333] mb-6">
              Fast Catch Security is a <span className="text-[#E52A30]">Black Owned Company</span>
            </h2>
            
            <p className="font-poppins text-lg text-gray-700 mb-6 leading-relaxed">
              We offer tailored solutions for clients in need of Security Services.
              We lead from the front and set the standard in being totally hardworking, professional and ethical.
              We are a proudly South African company understanding the needs and the challenges of our country.
            </p>
            
            <a 
              href="#services" 
              className="inline-block bg-[#E52A30] hover:bg-red-700 text-white font-montserrat font-semibold px-8 py-3 rounded-md transition-300 text-lg"
            >
              Learn More
            </a>
          </motion.div>
          
          {/* About Image */}
          <motion.div 
            className="md:w-1/2"
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src={companyFleetImage}
                alt="Fast Catch Security Fleet" 
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <span className="bg-[#E52A30] text-white px-3 py-1 rounded-md text-sm font-semibold">
                  Our Headquarters
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
