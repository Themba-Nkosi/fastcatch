import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  delay 
}: { 
  title: string; 
  description: string; 
  icon: string; 
  delay: number 
}) => (
  <motion.div
    className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition-300 overflow-hidden border border-gray-100"
    variants={fadeIn("up", delay)}
    whileHover={{ y: -10 }}
  >
    <div className="p-1 bg-gradient-to-r from-[#E52A30] to-[#1A365D]"></div>
    <div className="p-8">
      <div className="w-16 h-16 bg-[#E52A30] rounded-lg mb-6 flex items-center justify-center text-white">
        <i className={`${icon} text-2xl`}></i>
      </div>
      <h3 className="font-montserrat font-bold text-2xl text-[#333333] mb-4">{title}</h3>
      <p className="font-poppins text-gray-700 mb-6">
        {description}
      </p>
      <a
        href="#contact"
        className="inline-flex items-center font-montserrat font-semibold text-[#E52A30] hover:text-[#1A365D] transition-300"
      >
        Get a Quote <i className="fas fa-arrow-right ml-2"></i>
      </a>
    </div>
  </motion.div>
);

const ServicesSection = () => {
  const services = [
    {
      title: "Corporate Protection",
      description: "Professional security services for corporate environments, including office buildings, retail spaces, and executive protection.",
      icon: "fas fa-building"
    },
    {
      title: "Industrial & Construction",
      description: "Specialized security solutions for industrial sites, construction areas, and high-value equipment protection.",
      icon: "fas fa-hard-hat"
    },
    {
      title: "Armed & Unarmed Guards",
      description: "Expert security personnel trained in both armed and unarmed security protocols for various security needs.",
      icon: "fas fa-user-shield"
    },
    {
      title: "Access Control Systems",
      description: "Advanced access control and visitor management systems to secure entrances and restrict unauthorized access.",
      icon: "fas fa-key"
    },
    {
      title: "Monitoring Systems",
      description: "Advanced surveillance and monitoring technology integrated with professional security staff for comprehensive protection.",
      icon: "fas fa-video"
    },
    {
      title: "Patrol & Reaction",
      description: "Rapid response teams providing mobile security patrols and emergency reaction services when needed.",
      icon: "fas fa-car"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-5xl text-[#333333] mb-2">Our Services</h2>
          <div className="w-20 h-1 bg-[#E52A30] mx-auto mb-8"></div>
          <p className="font-poppins text-lg text-gray-700 max-w-3xl mx-auto">
            Providing comprehensive security solutions tailored to your specific needs
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={0.2 + index * 0.1}
            />
          ))}
        </motion.div>
        
        <motion.div
          className="mt-16 text-center"
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <a
            href="#contact"
            className="bg-[#E52A30] hover:bg-red-700 text-white font-montserrat font-semibold px-8 py-3 rounded-md transition-300 text-lg inline-flex items-center"
          >
            Request Custom Security Solution <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
