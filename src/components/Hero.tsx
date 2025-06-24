import React from "react";
import { Mail, Download } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Profile Image (Responsive Circle) */}
          <div className="mb-8">
            <div className="w-52 h-52 sm:w-56 sm:h-56 md:w-72 md:h-72 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg transition-all duration-300">
              <img
                src="/sahil_vanarse.jpg"
                alt="Sahil Vanarse"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-4">
            Sahil Vanarse
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 mb-6">
            Software Engineer | Backend Engineer
          </p>
          <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
            Passionate about creating innovative solutions with modern technologies. 
            Specialized in web development, backend systems, and scalable architectures.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </button>
            <a
              href="/Sahil_Vanarse_Resume.pdf"
              download
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/sahil-vanarse" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                className="w-6 h-6 hover:scale-110 transition-transform duration-200"
              />
            </a>
            <a href="https://linkedin.com/in/sahil-vanarse" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                className="w-6 h-6 hover:scale-110 transition-transform duration-200"
              />
            </a>
            <a href="mailto:sahilvanarse9@email.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/color/48/gmail-new.png"
                alt="Gmail"
                className="w-6 h-6 hover:scale-110 transition-transform duration-200"
              />
            </a>
            <a href="https://leetcode.com/u/sahil_vanarse/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                alt="LeetCode"
                className="w-6 h-6 hover:scale-110 transition-transform duration-200"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
