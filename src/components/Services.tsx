import React from 'react';
import { GlobeIcon, SmartphoneIcon, ServerIcon, CloudIcon, PaletteIcon, BrainCircuitIcon } from 'lucide-react';
const Services = () => {
  const services = [{
    icon: <GlobeIcon size={48} className="text-bright-blue" />,
    title: 'Web Development',
    description: 'Custom, responsive websites and web applications built with the latest technologies.'
  }, {
    icon: <SmartphoneIcon size={48} className="text-bright-blue" />,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.'
  }, {
    icon: <ServerIcon size={48} className="text-bright-blue" />,
    title: 'Software Solutions',
    description: 'Custom software development tailored to your specific business requirements.'
  }, {
    icon: <CloudIcon size={48} className="text-bright-blue" />,
    title: 'Cloud Services',
    description: 'Scalable cloud solutions for storage, computing, and application deployment.'
  }, {
    icon: <PaletteIcon size={48} className="text-bright-blue" />,
    title: 'UI/UX Design',
    description: 'User-centered design that enhances user experience and engagement.'
  }, {
    icon: <BrainCircuitIcon size={48} className="text-bright-blue" />,
    title: 'Tech Consulting',
    description: 'Expert advice on technology strategy, architecture, and implementation.'
  }];
  return <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-bright-blue mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive technology solutions to help your business
            thrive in the digital landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-bright-blue/20 group">
              <div className="mb-6 flex justify-center transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-bright-blue transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Services;