import React from "react";
import "../About.css";
import imgURL2 from "../img/about.jpg";
import { FaLinkedin, FaWhatsapp, FaFile } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import cv from "../file/CV ELIETH BARQUERO.pdf";

function About() {
  return (
    <div className="flex flex-col-reverse md:flex-row min-h-screen items-center justify-center px-4">
      <div className="flex flex-col justify-center w-full md:w-1/2 text-section">
        <div className="relative content">
          <div className="visible flex items-center gap-2">
            <p className="text-teal-600 parp">[</p>
            Hello World!
            <p className="text-teal-600 parp">]</p>
          </div>
          <div className="pStyle mt-4">
            <p className="text-white">I am</p>
            <p className="text-teal-600 mt-2">Elieth Barquero</p>
          </div>
          <div className="mt-4">
            <p className="text-white text-lg">
              I am Software Developer, passionate about embracing new challenges
              with the right attitude, consistently delivering the best results.
              Committed to continuous learning and improvement in every project.
              Demonstrates strong teamwork skills, effective leadership under
              pressure, and high motivation. Proven ability to communicate
              effectively and adapt to various situations.
            </p>
          </div>
          <div className="flex justify-around mt-4">
            <a href="https://www.linkedin.com/in/elieth-barquero-2b148126a">
              <i>
                <FaLinkedin className="text-3xl" />
              </i>
            </a>
            <a href="mailto:eliethbarquero@gmail.com">
              <i>
                <BiLogoGmail className="text-3xl" />
              </i>
            </a>
            <a href="https://wa.link/and7ho">
              <i>
                <FaWhatsapp className="text-3xl" />
              </i>
            </a>
            <a
              className="text-white"
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              download="EliethBarquero_CV"
            >
              <FaFile className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full md:w-1/2 mb-8 md:mb-0 image-section">
        <div className="w-64 h-64 border-4 border-teal-600 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-full"
            src={imgURL2}
            alt="Descripción de la imagen"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
