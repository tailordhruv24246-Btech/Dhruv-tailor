
import React from "react";
import Dhruv from "../assets/Dhruv-img.png";
import Navbar from "./Navbar";
export const Hero = () => {
  return (
    <div className="w-full bg-white p-0  flex flex-col items-center">

      {/* Top beige strip */}
      <div className="w-full h-[150px]  bg-teal-900/60 flex justify-center items-end relative">

        {/* Profile Image */}
        <img
          src={Dhruv}
          alt="Dhruv Tailor"
          className="w-[230px] h-[230px] rounded-full object-cover border-4 border-white shadow-lg absolute bottom-[-115px]"
        />
      </div>

      {/* Text Section */}
      <div className="mt-[140px] text-center px-4">

        <h1 className="text-4xl font-bold text-gray-700 tracking-wider">
          Dhruv Tailor
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-500 mt-6 leading-tight">
          FRONTEND DEVELOPER & UI DESIGNER
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base mt-6 leading-relaxed">
          I create clean, fast and modern user interfaces using HTML, CSS, Tailwind, 
          JavaScript and React. I focus on beautiful UI, animations and fully responsive design.
        </p>
         
          
          
        <div className="mt-8">
          <a
            href="../../public/DHRUV TAILOR_CV.pdf"
            download
            className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full shadow hover:bg-teal-700 transition"
          >
            Download CV
          </a>
        </div>


          
      </div>
    </div>
  );
};

export default Hero;
