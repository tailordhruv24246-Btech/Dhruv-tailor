import React from "react";
import { Mail, Instagram, Github, MapPin, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
const contactData = [
  {
    title: "Email",
    value: "tailordhurv4005@gmail.com",
    link: "mailto:tailordhurv4005@gmail.com",
    icon: <Mail size={18} />,
  },
  {
    title: "Instagram",
    value: "@yourinstagram",
    link: "https://instagram.com/yourinstagram",
    icon: <Instagram size={18} />,
  },
  {
    title: "GitHub",
    value: "github.com/yourusername",
    link: "https://github.com/yourusername",
    icon: <Github size={18} />,
  },
  {
    title: "Location",
    value: "Rajasthan, India",
    link: "https://www.google.com/maps/place/Rajasthan",
    icon: <MapPin size={18} />,
  },
  {
    title: "Available For Work",
    value: "Frontend Development Projects",
    link: "mailto:tailordhurv4005@gmail.com",
    icon: <Briefcase size={18} />,
  },
];

const Connect = () => {
  return (
   <section data-aos="fade-up"
      className="relative w-full py-20 px-5 bg-cover bg-center  "
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80')",
      }}
    >

      {/* Light Overlay */}

     
      <div data-aos ="fade-up" className="absolute inset-0  bg-teal-900/60"></div>

      <div className="relative  z-10">
        <h2 className="text-white text-3xl font-bold text-center mb-16">
          My Journey
        </h2>

        <div className="relative max-w-6xl mx-auto">

          {/* Center Line */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-white/70"></div>

          {contactData.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex w-full mb-16 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* ICON ON TIMELINE LINE */}
              <div className="absolute left-1/2 -translate-x-1/2 top-6 w-14 h-14 rounded-full bg-white border-4 border-teal-600 flex items-center justify-center z-10">
                {item.icon}
              </div>

              {/* Timeline Card */}
              <div className="bg-white/95 backdrop-blur-md w-[45%] p-6 rounded-2xl shadow-xl">
               <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.value}
                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">
                  {item.link}
                </p>
                 
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Connect;
