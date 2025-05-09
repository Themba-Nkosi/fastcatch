import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import ContactForm from "@/components/ui/contact-form";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-[#1A365D] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-2">Contact Us</h2>
          <div className="w-20 h-1 bg-[#E52A30] mx-auto mb-8"></div>
          <p className="font-poppins text-lg max-w-3xl mx-auto">
            Ready to enhance your security? Get in touch with our team for a personalized security solution.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-8"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h3 className="font-montserrat font-bold text-2xl text-[#333333] mb-6">Send Us a Message</h3>
            <ContactForm />
          </motion.div>
          
          {/* Contact Information */}
          <motion.div 
            className="flex flex-col"
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="mb-10">
              <h3 className="font-montserrat font-bold text-2xl mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-[#E52A30] rounded-full flex items-center justify-center">
                      <i className="fas fa-map-marker-alt text-white text-xl"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-lg mb-1">Address</h4>
                    <p className="font-poppins">1163 Eitemal Street, Florida ext 11, Roodepoort 1709</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-[#E52A30] rounded-full flex items-center justify-center">
                      <i className="fas fa-phone text-white text-xl"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-lg mb-1">Phone</h4>
                    <p className="font-poppins">011 674 0922</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-[#E52A30] rounded-full flex items-center justify-center">
                      <i className="fas fa-envelope text-white text-xl"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-lg mb-1">Email</h4>
                    <p className="font-poppins">info@fastcatch.co.za</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h3 className="font-montserrat font-bold text-2xl mb-6">Connect With Us</h3>
              <div className="flex space-x-4">
                <motion.a 
                  href="#" 
                  className="w-12 h-12 bg-[#E52A30] hover:bg-red-700 rounded-full flex items-center justify-center transition-300"
                  whileHover={{ y: -5 }}
                >
                  <i className="fab fa-facebook-f text-white text-xl"></i>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-12 h-12 bg-[#E52A30] hover:bg-red-700 rounded-full flex items-center justify-center transition-300"
                  whileHover={{ y: -5 }}
                >
                  <i className="fab fa-twitter text-white text-xl"></i>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-12 h-12 bg-[#E52A30] hover:bg-red-700 rounded-full flex items-center justify-center transition-300"
                  whileHover={{ y: -5 }}
                >
                  <i className="fab fa-linkedin-in text-white text-xl"></i>
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-12 h-12 bg-[#E52A30] hover:bg-red-700 rounded-full flex items-center justify-center transition-300"
                  whileHover={{ y: -5 }}
                >
                  <i className="fab fa-instagram text-white text-xl"></i>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
