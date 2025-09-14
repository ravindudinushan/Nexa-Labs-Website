import React, { useState } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real implementation, you would send this data to a server
    console.log('Form submitted:', formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  return <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-bright-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your digital presence? Let's discuss your
            project.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 flex flex-col gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-bright-blue/20">
                <div className="flex items-start">
                  <div className="p-3 bg-gradient-to-br from-primary to-bright-blue rounded-full mr-4">
                    <MailIcon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Email Us
                    </h3>
                    <p className="text-gray-600">nexalabslk@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-bright-blue/20">
                <div className="flex items-start">
                  <div className="p-3 bg-gradient-to-br from-primary to-bright-blue rounded-full mr-4">
                    <PhoneIcon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Call Us
                    </h3>
                    <p className="text-gray-600">+94 (76) 380 1197</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-bright-blue/20">
                <div className="flex items-start">
                  <div className="p-3 bg-gradient-to-br from-primary to-bright-blue rounded-full mr-4">
                    <MapPinIcon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Visit Us
                    </h3>
                    <p className="text-gray-600">
                      Galle, Southern Province, Sri Lanka.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8 border border-transparent hover:border-bright-blue/20 transition-all duration-300">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-all duration-300" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Your Email
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-all duration-300" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject
                  </label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-all duration-300" placeholder="Project Inquiry" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-all duration-300" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-primary to-bright-blue hover:from-bright-blue hover:to-primary text-white transition-all duration-500 rounded-lg px-8 py-4 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;