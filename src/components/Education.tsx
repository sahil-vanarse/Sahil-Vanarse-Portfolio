import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  cgpa: string;
};

const education: EducationItem[] = [
  {
    degree: "Masters of Computer Applications",
    institution: "G.H. Raisoni College of Engineering and Management",
    location: "Pune, Maharashtra",
    duration: "Aug 2023 – May 2025",
    cgpa: "CGPA: 9.48 / 10.00",
  },
  {
    degree: "Bachelor of Science (Computer Science)",
    institution: "Vivekanand College",
    location: "Kolhapur, Maharashtra",
    duration: "Sep 2020 – May 2023",
    cgpa: "CGPA: 9.03 / 10.00",
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Education</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My academic background and performance
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div className="flex items-center gap-3 mb-2 lg:mb-0">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">{edu.degree}</h3>
                    <p className="text-lg text-blue-600 font-medium">{edu.institution}</p>
                    <p className="text-sm text-slate-500">{edu.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{edu.duration}</span>
                </div>
              </div>
              <p className="text-slate-700 font-medium">{edu.cgpa}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
