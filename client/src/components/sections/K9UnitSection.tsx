import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

const K9UnitSection = () => {
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          {/* Content */}
          <motion.div 
            className="md:w-1/2"
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#333333] mb-6">
              K-9 <span className="text-[#E52A30]">Security Unit</span>
            </h2>
            <p className="font-poppins text-lg text-gray-700 mb-6 leading-relaxed">
              Our highly trained K-9 units provide an additional layer of security for properties requiring enhanced protection. Our canine teams are specifically trained for detection, patrol, and deterrence.
            </p>
            <ul className="font-poppins text-gray-700 mb-8 space-y-2">
              <li className="flex items-start">
                <i className="fas fa-check text-[#E52A30] mt-1 mr-2"></i>
                <span>Professionally trained security dogs</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-[#E52A30] mt-1 mr-2"></i>
                <span>Expert handlers with specialized training</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-[#E52A30] mt-1 mr-2"></i>
                <span>Enhanced perimeter security</span>
              </li>
            </ul>
          </motion.div>
          
          {/* Image */}
          <motion.div 
            className="md:w-1/2"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1537210249814-b9a10a161ae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="K-9 Security Unit" 
              className="w-full rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default K9UnitSection;
