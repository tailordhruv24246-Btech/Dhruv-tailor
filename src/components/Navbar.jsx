
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeNav, setActiveNav] = React.useState("home");

  return (
    <div className="w-full flex justify-center  p-4 mt-6">
      <div className="relative   inset-0  "></div>

      <div className="bg-[#c7b79c] rounded-4xl px-6 py-3 shadow-md">

        <ul className="flex gap-6 items-center">

          <li

            className={`${activeNav === "home"
              ? "text-white bg-black px-5 py-1 rounded-4xl font-bold"
              : "text-black font-semibold"} cursor-pointer`}
            onClick={() => setActiveNav("home")}
          >
            <Link to="/">Home</Link>
          </li>

          <li
            className={`${activeNav === "journey"
              ? "text-white bg-black px-5 py-1 rounded-4xl font-bold"
              : "text-black font-semibold"} cursor-pointer`}
            onClick={() => setActiveNav("journey")}
          >
            <Link to="/journey">Journey</Link>
          </li>

          <li
            className={`${activeNav === "work"
              ? "text-white bg-black px-5 py-1 rounded-4xl font-bold"
              : "text-black font-semibold"} cursor-pointer`}
            onClick={() => setActiveNav("work")}
          >
            <Link to="/creations">Creations</Link>
          </li>

          <li
            className={`${activeNav === "contact"
              ? "text-white bg-black px-5 py-1 rounded-4xl font-bold"
              : "text-black font-semibold"} cursor-pointer`}
            onClick={() => setActiveNav("contact")}
          >
            <Link to="/connect">Connect</Link>
          </li>

        </ul>
       
      </div>
    </div>
  );
};

export default Navbar;
