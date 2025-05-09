import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

const ClientLogo = ({ name, icon }: { name: string, icon: string }) => (
  <motion.div 
    className="flex items-center justify-center h-32 bg-gray-50 p-6 rounded-lg hover:shadow-md transition-300"
    whileHover={{ y: -5 }}
  >
    <div className="text-center">
      <div className="w-16 h-16 mx-auto bg-[#333333] rounded-full flex items-center justify-center mb-2">
        <i className={`${icon} text-white text-xl`}></i>
      </div>
      <span className="font-montserrat font-medium text-[#333333]">{name}</span>
    </div>
  </motion.div>
);

const ClientsSection = () => {
  const clients = [
    { name: "Gauteng Province", icon: "fas fa-building" },
    { name: "CE Mobility", icon: "fas fa-car" },
    { name: "GPF", icon: "fas fa-shield-alt" },
    { name: "SKS", icon: "fas fa-briefcase" },
    { name: "TEMI Construction", icon: "fas fa-hard-hat" },
    { name: "JOSHCO", icon: "fas fa-home" },
    { name: "Khabomom Construction", icon: "fas fa-hammer" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-[#333333] mb-2">Our Clients</h2>
          <div className="w-20 h-1 bg-[#E52A30] mx-auto mb-8"></div>
          <p className="font-poppins text-lg text-gray-700 max-w-3xl mx-auto">
            Trusted by leading organizations across South Africa
          </p>
        </motion.div>
        
        {/* Client Logos Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {clients.map((client, index) => (
            <ClientLogo key={index} name={client.name} icon={client.icon} />
          ))}
          
          <motion.div 
            className="flex items-center justify-center h-32 bg-[#E52A30] p-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-montserrat font-bold text-white text-lg">Your Company Here</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
