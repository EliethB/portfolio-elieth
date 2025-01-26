import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import js from '../img/javascript.png';
import HTML1 from '../img/HTML.webp';
import css1 from '../img/css.png';
import ReactJS from '../img/ReactJS.png';
import tailwind from '../img/tailwind.png';
import node from '../img/node.png';
import mysql from '../img/mysql.png';
import bootstrap from '../img/bootstrap.png';
import typescript from '../img/typescript.png';
import cc from '../img/CC.png';
import dotNET from '../img/dotNET.png';
import JAVA from '../img/JAVA.png';
import SQLSERVER from '../img/SQLSERVER.png';
import Laravel from '../img/Laravel.png';
import VUE from '../img/vue.png';
import Visual_Studio_Code from '../img/Visual_Studio_Code.png';
import Visual_Studio from '../img/Visual_Studio.png';
import Vitejs from '../img/Vitejs.png';
import npmicon from '../img/npm-icon.png';
import nodemon from '../img/nodemon.png';
import github from '../img/github.png';
import Git from '../img/Git.png';
import Jira from '../img/jira.png';
import Notion from '../img/Notion-logo.png';
import PostMan from '../img/postman.png';


const skillsData = [
  { name: "JavaScript", icon: js, shadowColor: "rgba(255, 223, 0, 0.6)" },
  { name: "HTML", icon: HTML1, shadowColor: "rgba(255, 87, 34, 0.6)" },
  { name: "CSS", icon: css1, shadowColor: "rgba(33, 150, 243, 0.6)" },
  { name: "React.js", icon: ReactJS, shadowColor: "rgba(97, 218, 251, 0.6)" },
  { name: "Tailwind", icon: tailwind, shadowColor: "rgba(6, 182, 212, 0.6)" },
  { name: "Node.js", icon: node, shadowColor: "rgba(102, 187, 106, 0.6)" },
  { name: "MySQL", icon: mysql, shadowColor: "rgba(0, 123, 255, 0.6)" },
  { name: "Bootstrap", icon: bootstrap, shadowColor: "rgba(108, 117, 225, 0.6)" },
  { name: "TypeScript", icon: typescript, shadowColor: "rgba(66, 165, 245, 0.6)" },
  { name: "C#", icon: cc, shadowColor: "rgba(63, 81, 181, 0.6)" },
  { name: ".NET", icon: dotNET, shadowColor: "rgba(25, 118, 210, 0.6)" },
  { name: "Java", icon: JAVA, shadowColor: "rgba(244, 67, 54, 0.6)" },
  { name: "SQL SERVER", icon: SQLSERVER, shadowColor: "rgba(183, 28, 28, 0.6)" },
  { name: "Laravel", icon: Laravel, shadowColor: "rgba(239, 83, 80, 0.6)" },
  { name: "Vue.js", icon: VUE, shadowColor: "rgba(76, 175, 80, 0.6)" },
];

const toolsData = [
  { name: "VS Code", icon: Visual_Studio_Code, shadowColor: "rgba(33, 150, 243, 0.6)" },  
  { name: "Visual Studio", icon: Visual_Studio, shadowColor: "rgba(108, 117, 225, 0.6)" }, 
  { name: "git", icon: Git, shadowColor: "rgba(240, 80, 51, 0.6)" },  
  { name: "github", icon: github, shadowColor: "rgb(255, 255, 255)" },  
  { name: "nodemon", icon: nodemon, shadowColor: "rgba(63, 186, 80, 0.6)" },  
  { name: "npm", icon: npmicon, shadowColor: "rgba(183, 28, 28, 0.6)" },  
  { name: "Vite.js", icon: Vitejs, shadowColor: "rgba(255, 215, 64, 0.6)" },  
  { name: "Jira", icon: Jira, shadowColor: "rgba(0, 82, 204, 0.6)" },  
  { name: "Notion", icon: Notion, shadowColor: "rgb(255, 255, 255)" },  
  { name: "PostMan", icon: PostMan, shadowColor: "rgba(255, 87, 34, 0.6)" }, 
];


const SkillCard = ({ name, icon, shadowColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-20 h-20 mb-1 bg-gray-800 shadow-lg rounded-lg transition-all duration-300 hover:bg-gray-300 hover:rounded-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered ? `0 10px 50px ${shadowColor}` : "none",
      }}
      whileHover={{ scale: 1.1 }}
    >
      <img
        src={icon}
        alt={name}
        className="absolute w-14 h-14 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />

      {isHovered && (
        <div className="absolute w-full text-center bottom-[-30px] text-gray-300 text-sm font-semibold">
          {name}
        </div>
      )}
    </motion.div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section id="skills" className="py-20 mt-10">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start">
        <div className="lg:w-1/2 w-full lg:text-left text-center mb-8 lg:mb-0">
          <h6 className="text-4xl text-teal-600">Skills & Tools</h6>
          <h3 className="text-2xl font-semibold text-gray-200 mt-4 sm:mt-6">
            What My Programming Skills Include?
          </h3>
          <h4 className="text-lg text-gray-200 mt-6">
            Skilled in developing responsive web apps with HTML, CSS, and JS.
            Proficient in full-stack development using C#, ASP.NET, and SQL
            Server. Experienced in React.js, Node.js, MySQL, and Java for
            scalable solutions.
          </h4>
          <div className="relative w-3/12 mx-auto mt-4">
            <ul className="flex justify-center list-none rounded-full bg-slate-100">
              <li className="flex-1 text-center">
                <button
                  className={`flex items-center justify-center w-full h-7 px-4 py-2 text-sm transition-all ease-in-out border-0 rounded-full cursor-pointer sm:px-6 ${
                    activeTab === "skills"
                      ? "text-black bg-teal-600"
                      : "text-slate-600 bg-inherit"
                  }`}
                  onClick={() => setActiveTab("skills")}
                >
                  Skills
                </button>
              </li>
              <li className="flex-1 text-center">
                <button
                  className={`flex items-center justify-center w-full h-7 px-4 py-2 text-sm transition-all ease-in-out border-0 rounded-full cursor-pointer ${
                    activeTab === "tools"
                      ? "text-black bg-teal-600"
                      : "text-slate-600 bg-inherit"
                  }`}
                  onClick={() => setActiveTab("tools")}
                >
                  Tools
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:w-1/2 w-full ml-12 flex flex-wrap gap-10">
          <AnimatePresence>
            {activeTab === "skills" &&
              skillsData.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <SkillCard {...skill} />
                </motion.div>
              ))}
            {activeTab === "tools" &&
              toolsData.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <SkillCard {...tool} />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
