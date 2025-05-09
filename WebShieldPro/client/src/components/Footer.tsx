import { DogLogo } from "./ui/dog-logo";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <DogLogo className="w-10 h-10" />
              <span className="font-montserrat font-bold text-lg text-white">
                FAST CATCH SECURITY
              </span>
            </div>
            <p className="font-poppins text-gray-300 mb-6">
              A proudly South African security company providing professional security services nationwide.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="font-poppins text-gray-300 hover:text-white transition-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="font-poppins text-gray-300 hover:text-white transition-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="font-poppins text-gray-300 hover:text-white transition-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="font-poppins text-gray-300 hover:text-white transition-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-montserrat font-bold text-xl mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="font-poppins text-gray-300 hover:text-white transition-300">
                  Corporate Security
                </a>
              </li>
              <li>
                <a href="#services" className="font-poppins text-gray-300 hover:text-white transition-300">
                  Industrial Security
                </a>
              </li>
              <li>
                <a href="#services" className="font-poppins text-gray-300 hover:text-white transition-300">
                  Access Control
                </a>
              </li>
              <li>
                <a href="#services" className="font-poppins text-gray-300 hover:text-white transition-300">
                  Monitoring Systems
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-montserrat font-bold text-xl mb-6">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-[#E52A30] mt-1 mr-3"></i>
                <span className="font-poppins text-gray-300">1163 Eitemal Street, Florida ext 11, Roodepoort 1709</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone text-[#E52A30] mt-1 mr-3"></i>
                <span className="font-poppins text-gray-300">011 674 0922</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope text-[#E52A30] mt-1 mr-3"></i>
                <span className="font-poppins text-gray-300">info@fastcatch.co.za</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-700 text-center">
          <p className="font-poppins text-gray-400">
            &copy; {new Date().getFullYear()} Fast Catch Security. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
