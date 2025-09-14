import { RocketIcon, LightbulbIcon, ShieldCheckIcon } from 'lucide-react';
const About = () => {
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-bright-blue mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary to-bright-blue p-1 rounded-2xl shadow-xl">
              <div className="bg-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 mb-6">
                  At NEXA LABS, we're committed to delivering innovative
                  software solutions that empower businesses to thrive in the
                  digital age. We combine technical expertise with creative
                  thinking to solve complex challenges and drive digital
                  transformation.
                </p>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Our Approach
                </h3>
                <p className="text-gray-700">
                  We believe in collaborative partnerships, transparent
                  communication, and agile methodologies. Our team of expert
                  developers, designers, and consultants work closely with you
                  to understand your unique needs and deliver solutions that
                  exceed expectations.
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-1 gap-8">
            <div className="bg-secondary rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-bright-blue/20">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-bright-blue rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <RocketIcon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4 text-center">
                Innovation
              </h3>
              <p className="text-gray-700">
                We constantly explore cutting-edge technologies and
                methodologies to deliver forward-thinking solutions that give
                your business a competitive edge.
              </p>
            </div>
            <div className="bg-secondary rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-bright-blue/20">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-bright-blue rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <LightbulbIcon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4 text-center">
                Expertise
              </h3>
              <p className="text-gray-700">
                Our team of skilled professionals brings deep technical
                knowledge and industry experience to every project, ensuring
                high-quality results.
              </p>
            </div>
            <div className="bg-secondary rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-bright-blue/20">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-bright-blue rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <ShieldCheckIcon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4 text-center">
                Reliability
              </h3>
              <p className="text-gray-700">
                We build robust, secure, and scalable solutions that you can
                depend on, with ongoing support to ensure long-term success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;