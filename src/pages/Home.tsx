import { Button } from "@/components/ui/button";
import React from "react";
import { CiSaveDown1 } from "react-icons/ci";
import { LuCircleArrowOutUpRight, LuForward } from "react-icons/lu";
import "../App.css";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

function Home() {
  return (
    <>
      <header className="bg-slate-900 py-36">
        <div className="container flex justify-center items-center flex-col">
          <div className="sectionStatus bg-[#6469f920] px-2 py-1 raunded-sm mb-3">
            <p className="text-[#6468f9]">Available for work</p>
          </div>
          <h1
            className="bg-gradient-to-bl from-[#c2c4ff] to-[#5359f7]
            bg-clip-text text-transparent font-bold text-7xl mb-8
          "
          >
            Hi I'm Kamoliddin Mirzaboyev
          </h1>
          <h2 className="text-white font-bold text-4xl mb-4  ">
            Front - End Developer
          </h2>
          <p className="text-white font-medium text-xl">
            Crafting fast, beautiful, and user-first web experiences. Turning
            ideas into responsive, high-performing digital products
          </p>
          <div className="heroButtons flex juftify-center mt-6 items-center gap-6">
            <Button className="bg-[#3d41b2] rounded-sm">
              Download CV{" "}
              <span className="font-bold text-4xl">
                <CiSaveDown1 className="text-red" />
              </span>
            </Button>
            <Button className="bg-[#3d41b2] rounded-sm">
              Contact me{" "}
              <span>
                <LuForward />
              </span>
            </Button>
          </div>
        </div>
      </header>
      <main>
        <section className="bg-slate-800 py-16">
          <div className="container text-center flex justify-center flex-col items-center">
            <div className="w-fit  p-1 bg-[var(--status-bg)]">
              <p className="text-[var(--status-text)]">My Way</p>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-blue-600">About me</h2>
            <p className="text-gray-300 text-md font-medium">
              I’m a front-end developer working with modern technologies such as
              React.js, Next.js, TypeScript, and other technologies. Although
              I’m at the beginning of my career, I have worked on and am
              currently working on several projects where I prioritize attention
              to detail, clean code, and user-friendly design. I strive to learn
              something new and grow my skills and experience through real-world
              development.
            </p>
          </div>
        </section>
        <section className="bg-slate-900 py-24  border-b-1 border-gray-400">
          <div className="container flex justify-center items-center flex-col">
            <div className="px-2 py-1 bg-[var(--status-bg)] mb-2">
              <p className="text-[var(--status-text)]">My technical skills</p>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-blue-600">Skills</h1>
          </div>
          <div className="skillsBlock gap-8 flex justify-center items-center">
            <div className="skillCard border-1 border-gray-600 p-6 rounded-md bg-[#1d283d] w-72">
              <div className="skillImg w-full flex justify-center items-center">
                <img className="w-20" src="/public/html.svg" alt="" />
              </div>
              <div className="skillData pt-4">
                <h2 className="text-xl font-bold text-gray-300 text-center">
                  Foundation
                </h2>
                <p className="text-gray-300 text-center">
                  Using HTML5 and CSS3 and create magic web site design
                </p>
              </div>
            </div>
            <div className="skillCard border-1 border-gray-600 p-6 rounded-md bg-[#1d283d] w-72">
              <div className="skillImg w-full flex justify-center items-center">
                <img className="w-20" src="/public/html.svg" alt="" />
              </div>
              <div className="skillData pt-4">
                <h2 className="text-xl font-bold text-gray-300 text-center">
                  Foundation
                </h2>
                <p className="text-gray-300 text-center">
                  Using HTML5 and CSS3 and create magic web site design
                </p>
              </div>
            </div>
            <div className="skillCard border-1 border-gray-600 p-6 rounded-md bg-[#1d283d] w-72">
              <div className="skillImg w-full flex justify-center items-center">
                <img className="w-20" src="/public/html.svg" alt="" />
              </div>
              <div className="skillData pt-4">
                <h2 className="text-xl font-bold text-gray-300 text-center">
                  Foundation
                </h2>
                <p className="text-gray-300 text-center">
                  Using HTML5 and CSS3 and create magic web site design
                </p>
              </div>
            </div>
            <div className="skillCard border-1 border-gray-600 p-6 rounded-md bg-[#1d283d] w-72">
              <div className="skillImg w-full flex justify-center items-center">
                <img className="w-20" src="/public/html.svg" alt="" />
              </div>
              <div className="skillData pt-4">
                <h2 className="text-xl font-bold text-gray-300 text-center">
                  Foundation
                </h2>
                <p className="text-gray-300 text-center">
                  Using HTML5 and CSS3 and create magic web site design
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 py-16">
          <div className="container flex justify-center items-center flex-col">
            <div className="px-2 rounded-sm py-1 bg-[var(--status-bg)]">
              <p className="text-[var(--status-text)]">
                Recently projects and & Portfolio
              </p>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-blue-600">Portfolio</h1>
            <div className="projectsBlock flex gap-8 justify-center items-center">
              <div className="projectCard bg-[#889ac026] w-96 border-1 border-gray-600 overflow-hidden rounded-md">
                <div className="projectImg">
                  <img className="hover:scale-105 duration-300 transition-all linear" src="/public/exclusive.jpg" alt="" />
                </div>
                <div className="projectData p-4">
                  <h2 className="text-2xl font-bold text-white pb-2">
                    Exclusive
                  </h2>
                  <p className="text-gray-300">
                    A comprehensive admin dashboard for managing online stores
                    with real-time analytics.
                  </p>
                  <div className="projectSkills flex flex-wrap gap-6 pt-6">
                    <span className="bg-[#6468f9] p-1 text-xs rounded-sm text-white">
                      React
                    </span>
                    <span className="bg-[#6468f9] p-1 text-xs rounded-sm text-white">
                      React
                    </span>
                    <span className="bg-[#6468f9] p-1 text-xs rounded-sm text-white">
                      React
                    </span>
                  </div>
                  <div className="projectSource pt-4 flex items-center justify-between">
                    <Link to={"https://github.com/KamoliddinDev/exclusive"}>
                      <button className="text-white flex items-center gap-2 text-md hover:text-[#7478fb] transition-all ease-in">
                        <FaGithub />
                        Source Code
                      </button>
                    </Link>
                    <Link to={"https://github.com/KamoliddinDev/exclusive"}>
                      <button className="text-white flex items-center gap-2 text-md hover:text-[#7478fb] transition-all ease-in">
                        <LuCircleArrowOutUpRight />
                        Live Demo
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="projectCard bg-[#889ac026] w-96 border-1 border-gray-600 overflow-hidden rounded-md">
                <div className="projectImg">
                  <img src="/public/exclusive.jpg" alt="" />
                </div>
                <div className="projectData p-4">
                  <h2 className="text-2xl font-bold text-white pb-2">
                    Exclusive
                  </h2>
                  <p className="text-gray-300">
                    A comprehensive admin dashboard for managing online stores
                    with real-time analytics.
                  </p>
                  <div className="projectSkills flex flex-wrap gap-6 pt-6">
                    <span className="bg-[#6468f9] p-1 text-xs rounded-sm text-white">
                      React
                    </span>
                    <span className="bg-[#6468f9] p-1 text-xs rounded-sm text-white">
                      React
                    </span>
                    <span className="bg-[#6468f9] p-1 text-xs rounded-sm text-white">
                      React
                    </span>
                  </div>
                  <div className="projectSource pt-4 flex items-center justify-between">
                    <Link to={"https://github.com/KamoliddinDev/exclusive"}>
                      <button className="text-white flex items-center gap-2 text-md hover:text-[#7478fb] transition-all ease-in">
                        <FaGithub />
                        Source Code
                      </button>
                    </Link>
                    <Link to={"https://github.com/KamoliddinDev/exclusive"}>
                      <button className="text-white flex items-center gap-2 text-md hover:text-[#7478fb] transition-all ease-in">
                        <LuCircleArrowOutUpRight />
                        Live Demo
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="projectCard bg-[#889ac026] w-96 border-1 border-gray-600 overflow-hidden rounded-md">
                <div className="projectImg">
                  <img className="object-cover" src="/public/exclusive.jpg" alt="" />
                </div>
                <div className="projectData p-4">
                  <h2 className="text-2xl font-bold text-white pb-2">
                    Exclusive
                  </h2>
                  <p className="text-gray-300">
                    A comprehensive admin dashboard for managing online stores
                    with real-time analytics.
                  </p>
                  <div className="projectSkills flex flex-wrap gap-6 pt-6">
                    <span className="bg-[#6468f9] p-1 text-xs rounded-sm text-white">
                      React
                    </span>
                    <span className="bg-[#6468f9] p-1 text-xs rounded-sm text-white">
                      React
                    </span>
                    <span className="bg-[#6468f9] p-1 text-xs rounded-sm text-white">
                      React
                    </span>
                  </div>
                  <div className="projectSource pt-4 flex items-center justify-between">
                    <Link to={"https://github.com/KamoliddinDev/exclusive"}>
                      <button className="text-white flex items-center gap-2 text-md hover:text-[#7478fb] transition-all ease-in">
                        <FaGithub />
                        Source Code
                      </button>
                    </Link>
                    <Link to={"https://github.com/KamoliddinDev/exclusive"}>
                      <button className="text-white flex items-center gap-2 text-md hover:text-[#7478fb] transition-all ease-in">
                        <LuCircleArrowOutUpRight />
                        Live Demo
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-">View all</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
