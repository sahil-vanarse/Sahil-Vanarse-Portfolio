import React from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "TokneX - Peer-to-peer communication and collaboration",
      description: "TokneX is a real-time peer-to-peer learning platform that enables collaborative learning through topic-based rooms",
      image: "/TokneX.png",
      technologies: ["Python", "Django", "Django Restframework", "HTML/CSS", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/sahil-vanarse/linkUp"
    },
    {
      title: "CO-s-and-PO-s-Mapping-and-Articulation-Matrix",
      description: "Reduced College staff manual workload by 70% - 80% by calculating the articulation matrix. Generates accurate report according to the given data.",
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "Flask", "JavaScript", "Bootstrap", "MySQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/sahil-vanarse/CO-s-and-PO-s-Mapping-and-Articulation-Matrix"
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A selection of my work showcasing various technologies and problem-solving approaches
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                {/* Removed icon here */}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {/* <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a> */}
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-slate-600 hover:text-slate-700 font-medium transition-colors duration-200"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
