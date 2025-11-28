import React from "react";
import { Code, Award, GraduationCap, BookOpen, Rocket } from "lucide-react";

const journeyData = [
  {
    title: "School Journey",
    desc: "Completed schooling and built strong basics in education.",
    icon: <BookOpen size={18} />,
  },
  {
    title: "12th Class (92%)",
    desc: "Scored 92% in 12th and strengthened my academic confidence.",
    icon: <Award size={18} />,
  },
  {
    title: "BTech CSE (JEC Kukas)",
    desc: "Started my engineering journey and explored programming.",
    icon: <GraduationCap size={18} />,
  },
  {
    title: "Frontend Skills Growth",
    desc: "Learned HTML, CSS, Tailwind and responsive design.",
    icon: <Code size={18} />,
  },
  {
    title: "React Learning",
    desc: "Started React and built real-world projects.",
    icon: <Rocket size={18} />,
  },
];

const Journey = () => {
  return (
    <section
      className="relative w-full py-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1400&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-teal-900/60"></div>

      {/* Content */}
      <div className="relative z-10 mt-20 max-w-5xl mx-auto">
        <h2 className="text-white text-3xl font-bold text-center mb-12">
          My Journey
        </h2>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-white/60"></div>

          {journeyData.map((item, index) => (
            <div
              key={index}
              className={`flex w-full mb-12 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Icon */}
              <div className="absolute left-1/2 -translate-x-1/2 mt-5 w-10 h-10 rounded-full bg-white flex items-center justify-center text-teal-600 border-2 border-teal-600 z-10">
                {item.icon}
              </div>

              {/* Card */}
              <div className="bg-white/95 backdrop-blur-sm w-[45%] p-5 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
