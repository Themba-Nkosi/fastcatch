import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { useEffect, useState, useRef } from "react";

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  icon: string;
  delay: number;
}

const StatCard = ({ value, suffix = "", label, icon, delay }: StatCardProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = Math.ceil(end / (duration / 20));
    
    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={countRef}
      className="bg-white rounded-lg shadow-lg p-6 text-center"
      variants={fadeIn("up", delay)}
    >
      <div className="mb-4 mx-auto w-16 h-16 flex items-center justify-center bg-[#E52A30] text-white rounded-full">
        <i className={`${icon} text-2xl`}></i>
      </div>
      
      <div className="font-montserrat font-bold text-4xl md:text-5xl text-[#1A365D] mb-2">
        {count}{suffix}
      </div>
      
      <div className="font-poppins text-gray-700">{label}</div>
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    { value: 140, suffix: "+", label: "Security Guards", icon: "fas fa-user-shield" },
    { value: 98, suffix: "%", label: "Client Satisfaction", icon: "fas fa-star" },
    { value: 24, suffix: "/7", label: "Service Availability", icon: "fas fa-clock" },
    { value: 10, suffix: "+", label: "Years Experience", icon: "fas fa-trophy" },
  ];

  return (
    <section className="py-20 bg-[#1A365D] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-5xl mb-2">Security By The Numbers</h2>
          <div className="w-20 h-1 bg-[#E52A30] mx-auto mb-8"></div>
          <p className="font-poppins text-lg max-w-3xl mx-auto">
            Fast Catch Security's track record speaks for itself - we deliver results and protect what matters most
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
              delay={0.2 + index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;