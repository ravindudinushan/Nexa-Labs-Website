import { RocketIcon, ShieldCheckIcon, UsersIcon, ClockIcon, HeartHandshakeIcon, TrophyIcon } from 'lucide-react';
const WhyChooseUs = () => {
  const reasons = [{
    icon: <RocketIcon size={36} className="text-white" />,
    title: 'Cutting-Edge Technology',
    description: 'We utilize the latest technologies and methodologies to deliver innovative solutions that keep you ahead of the competition.'
  }, {
    icon: <ShieldCheckIcon size={36} className="text-white" />,
    title: 'Secure & Reliable',
    description: 'Security is built into our development process, ensuring your applications and data remain protected at all times.'
  }, {
    icon: <UsersIcon size={36} className="text-white" />,
    title: 'Expert Team',
    description: 'Our team of skilled developers, designers, and consultants bring years of industry experience to every project.'
  }, {
    icon: <ClockIcon size={36} className="text-white" />,
    title: 'Timely Delivery',
    description: 'We value your time and are committed to delivering high-quality solutions within agreed timeframes.'
  }, {
    icon: <HeartHandshakeIcon size={36} className="text-white" />,
    title: 'Client-Centered Approach',
    description: 'We prioritize your needs and work collaboratively to ensure our solutions align perfectly with your business goals.'
  }, {
    icon: <TrophyIcon size={36} className="text-white" />,
    title: 'Proven Results',
    description: 'Our track record speaks for itself, with numerous successful projects and satisfied clients across various industries.'
  }];
  return <section id="why-choose-us" className="py-20 bg-gradient-to-br from-primary via-primary-light to-bright-blue text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Partner with us for exceptional software solutions that drive your
            business forward.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-2 border border-white/20 hover:border-white/40">
              <div className="w-16 h-16 bg-gradient-to-br from-bright-blue to-white/70 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-gray-100">{reason.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default WhyChooseUs;