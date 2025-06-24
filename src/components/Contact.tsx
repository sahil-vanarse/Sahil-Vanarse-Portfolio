import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "sahilvanarse9@email.com",
      link: "mailto:sahilvanarse9@email.com"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 8530038434",
      link: "tel:+918530038434"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Mahad, Maharashtra, India",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col sm:flex-row sm:flex-nowrap gap-6 w-full max-w-5xl">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="flex flex-1 items-center gap-4 p-4 rounded-lg bg-white hover:shadow-md transition-shadow duration-200 group"
              >
                <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-200">
                  <info.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-800">{info.title}</p>
                  <p className="text-slate-600 break-words">{info.content}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
