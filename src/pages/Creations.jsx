import React from "react";
import { Palette, ClipboardCheck, Utensils } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    desc: "My personal portfolio built with React & Tailwind.",
    year: "2024",
    icon: <Palette size={18} />,
  },
  {
    title: "Attendance System",
    desc: "JS + React based in/out time attendance system.",
    year: "2024",
    icon: <ClipboardCheck size={18} />,
  },
  {
    title: "Restaurant Website",
    desc: "Spice & Spoon restaurant UI with AOS animation.",
    year: "2025",
    icon: <Utensils size={18} />,
  },
];

const Creations = () => {
  return (
    <section
      className="relative w-full py-20 px-5 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80')",
      }}
    >

      {/* Light Overlay */}

     
      <div className="absolute inset-0  bg-teal-900/60"></div>

      <div className="relative mt-20 z-10">
        <h2 className="text-white text-3xl font-bold text-center mb-16">
          My Journey
        </h2>

        <div className="relative max-w-6xl mx-auto">

          {/* Center Line */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-white/70"></div>

      {projects.map((item, index) => (
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
                  {item.year}
                </h3>


                <p className="text-gray-600 mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Creations;
