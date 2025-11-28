import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Paintbrush,
  Rocket,
  Briefcase,
  Target
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const timelineData = [
  {
    title: "Started Coding Journey",
    desc: "I began learning web development and found my passion for design and frontend technologies.",
    icon: <Code className="text-teal-600" />,
  },
  {
    title: "Frontend Development Spark",
    desc: "Learned HTML, CSS and started creating clean, responsive UI designs.",
    icon: <Paintbrush className="text-teal-600" />,
  },
  {
    title: "React & Real Projects",
    desc: "Built projects like Attendance System, Todo App and Quote Generator using React.",
    icon: <Rocket className="text-teal-600" />,
  },
  {
    title: "Professional Work",
    desc: "Currently working at SappyTech, Jaipur as a Frontend React Developer.",
    icon: <Briefcase className="text-teal-600" />,
  },
  {
    title: "Future Vision",
    desc: "To become a full-stack developer and build an e-commerce platform for Indian users.",
    icon: <Target className="text-teal-600" />,
  },
];

const HomeTimeline = () => {
 
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []); 

  return (
      <><section data-aos="fade-up"
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

          {timelineData.map((item, index) => (
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

                <p className="text-gray-600 mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section></>
  );
};

export default HomeTimeline;
