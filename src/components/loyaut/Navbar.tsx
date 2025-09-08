import React from "react";
import { FaGithub, FaLinkedinIn, FaTelegram } from "react-icons/fa";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="py-4 fixed w-full  backdrop-blur-2xl border-b-1 border-gray-400">
      <div className="container flex items-center justify-between">
        <div className="logo text-indigo-400">
          <h2 className="font-bold text-4xl">
            Kamoliddin.<span className="text-white">dev</span>
          </h2>
        </div>
        <div className="links text-xl font-normal text-white flex items-center justify-center gap-5 ">
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>About</Link>
          <Link to={"/"}>Skills</Link>
          <Link to={"/"}>Portfolio</Link>
          <Link to={"/"}>Contact</Link>
        </div>
        <div className="socials text-xl text-white flex items-center justify-center gap-6">
          <Link to={"/"}>
            <FaGithub />
          </Link>
          <Link to={"#"}>
            <LuBriefcaseBusiness />
          </Link>
          <Link to={"/"}>
            <FaLinkedinIn />
          </Link>
          <Link to={"/"}>
            <FaTelegram />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
