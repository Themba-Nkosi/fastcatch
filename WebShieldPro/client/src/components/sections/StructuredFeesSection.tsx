import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import fleetImage from '../../assets/fleet-image.png';

const PricingFeature = ({ feature }: { feature: string }) => (
  <div className="flex items-center mb-4">
    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
      <i className="fas fa-check text-sm text-[#E52A30]"></i>
    </div>
    <span className="font-poppins">{feature}</span>
  </div>
);

const StructuredFeesSection = () => {
  const features = [
    "Competitive pricing without compromising quality",
    "Compliant with all labor laws and regulations",
    "Transparent billing with no hidden fees",
    "Customizable security packages",
    "Flexible payment terms available",
    "Value-added services included"
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#E52A30] to-[#C41E24] text-white relative overflow-hidden">
      {/* Background overlay with fleet pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="h-full w-full bg-repeat" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h20v20H0V0zm2 2v16h16V2H2z\' fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
          backgroundSize: '15px 15px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Content */}
          <motion.div 
            className="md:w-1/2"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">STRUCTURED FEES</h2>
            <p className="font-poppins text-lg mb-8 leading-relaxed">
              We offer a highly competitive fee structure that provides exceptional value without compromising on quality or compliance.
            </p>

            <div className="mb-8">
              {features.map((feature, index) => (
                <PricingFeature key={index} feature={feature} />
              ))}
            </div>

            <a 
              href="#contact" 
              className="inline-block bg-white hover:bg-gray-100 text-[#E52A30] font-montserrat font-semibold px-8 py-3 rounded-md transition-300 text-lg shadow-lg hover:shadow-xl"
            >
              Get a Custom Quote
            </a>
          </motion.div>
          
          {/* Image */}
          <motion.div 
            className="md:w-1/2"
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={fleetImage}
                alt="Fast Catch Security Fleet" 
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="font-montserrat font-bold text-2xl mb-2">Our Modern Fleet</div>
                <p className="font-poppins text-sm">Branded vehicles equipped with the latest security technology</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StructuredFeesSection;
