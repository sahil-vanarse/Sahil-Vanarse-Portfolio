import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "AssistifAI",
      period: "April 2025 - Present",
      description: [
        "Built scalable FastAPI-based backend with PostgreSQL, Redis, and Celery, enabling async web crawling and 40% faster APIs.",
        "Improved platform reliability with Redis caching, structured logging, and robust error handling.",
        "Collaborated with team members during regular sync-ups and contributed to feature planning and developmentdiscussions.",
      ],
      technologies: ["Python", "Node.js", "FastAPI", "PostgreSQL", "Redis", "Celery", "React"]
    },
  ];

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Work Experience</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My professional journey and key contributions in various roles
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div className="flex items-center gap-3 mb-2 lg:mb-0">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">{exp.title}</h3>
                    <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>
              
              <ul className="text-slate-700 mb-4 list-disc list-inside space-y-1">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
