import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A passionate backend developer with a knack for building fast, scalable systems
          </p>
        </div>

        <div className="text-slate-700 text-lg space-y-6 leading-relaxed">
          <p>
            I'm a software engineer who thrives in backend environments, with a strong focus on performance,
            scalability, and clean system design. During my internship at <strong>AssistifAI</strong>, I built 
            production-grade RESTful APIs using <strong>FastAPI</strong> and <strong>PostgreSQL</strong>, 
            optimized background processing with <strong>Celery</strong> and <strong>Redis</strong>, and implemented 
            structured caching and observability to enhance system reliability.
          </p>

          <p>
            I have hands-on experience with web crawling, asynchronous job execution, and building resilient
            backend services that scale. My stack includes Python, Node.js, Docker, and modern databases like 
            PostgreSQL and MongoDB. I care deeply about writing maintainable code and following solid engineering 
            practices.
          </p>

          <p>
            Outside of coding, I enjoy diving into Data Structure and Algorithms, System Design concepts, and learning new tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
