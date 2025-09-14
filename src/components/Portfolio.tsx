import React from 'react';
const Portfolio = () => {
  const portfolioItems = [{
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
  }, {
    title: 'Financial Dashboard',
    category: 'Desktop Application',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
  }, {
    title: 'Health & Fitness App',
    category: 'Mobile Application',
    image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
  }, {
    title: 'Real Estate Portal',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2273&q=80'
  }, {
    title: 'Inventory Management',
    category: 'Desktop Application',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
  }, {
    title: 'Social Networking App',
    category: 'Mobile Application',
    image: 'https://images.unsplash.com/photo-1573152958734-1922c188fba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
  }];
  return <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Portfolio Showcase
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => <div key={index} className="group overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <div className="relative aspect-video overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.category}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Portfolio;