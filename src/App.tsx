import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CodingStats from './components/CodingStats'; 
// import VisitCounter from './components/VisitCounter';

function App() {
  // const [visitCount, setVisitCount] = useState(0);

  // useEffect(() => {
  //   // Get current visit count from localStorage
  //   const currentCount = localStorage.getItem('portfolioVisitCount');
  //   const count = currentCount ? parseInt(currentCount, 10) : 0;
    
  //   // Increment visit count
  //   const newCount = count + 1;
  //   localStorage.setItem('portfolioVisitCount', newCount.toString());
  //   setVisitCount(newCount);
  // }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <CodingStats />
      {/* Uncomment the VisitCounter component if you want to display visit count */}
      {/* <VisitCounter count={visitCount} /> */}
      <Contact />
      <Footer />
      {/* <VisitCounter count={visitCount} /> */}
    </div>
  );
}

export default App;