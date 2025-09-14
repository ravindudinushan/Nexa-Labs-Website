import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';
import nexaLogo from '../assets/nexaLogo.png';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-light to-bright-blue text-white pt-16 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-80 h-80 bg-bright-blue/10 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-bright-blue/20 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Content Section */}
          <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
            {/* Main Heading */}
            <div className={`transform transition-all duration-1000 ease-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block animate-slide-in-left">
                  Innovative Software
                </span>
                <span className="block animate-slide-in-left delay-200 mt-2">
                  Solutions for the
                </span>
                <span className="block text-bright-blue animate-slide-in-left delay-300 mt-2 bg-gradient-to-r from-bright-blue to-white bg-clip-text text-transparent">
                  Digital Future
                </span>
              </h1>
            </div>
            
            {/* Description */}
            <div className={`transform transition-all duration-1000 delay-500 ease-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <p className="text-lg sm:text-xl lg:text-2xl text-secondary leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We transform ideas into powerful digital experiences through
                cutting-edge technology and creative innovation.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center lg:justify-start transform transition-all duration-1000 delay-700 ease-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <Link to="services" spy={true} smooth={true} offset={-70} duration={500}>
                <button className="group relative bg-white text-primary hover:bg-bright-blue hover:text-white transition-all duration-300 rounded-full px-10 py-4 font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 overflow-hidden w-full sm:w-auto">
                  <span className="relative z-10">Explore Services</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-bright-blue to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
                </button>
              </Link>
              
              <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                <button className="group relative border-2 border-white hover:border-bright-blue hover:bg-bright-blue transition-all duration-300 rounded-full px-10 py-4 font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 overflow-hidden w-full sm:w-auto">
                  <span className="relative z-10">Contact Us</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-bright-blue to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
                </button>
              </Link>
            </div>
          </div>
          
          {/* Enhanced Logo Section */}
          <div className="flex justify-center items-center relative">
            <div className={`relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] transform transition-all duration-1000 delay-300 ease-out ${
              isLoaded ? 'scale-100 opacity-100 rotate-0' : 'scale-75 opacity-0 rotate-12'
            }`}>
              {/* Multiple rotating rings with different speeds */}
              <div className="absolute -inset-10 border-2 border-bright-blue/20 rounded-full animate-spin-slow"></div>
              <div className="absolute -inset-8 border border-white/10 rounded-full animate-spin-reverse-slow"></div>
              <div className="absolute -inset-6 border border-primary/30 rounded-full animate-spin-slow delay-500"></div>
              
              {/* Enhanced glowing background with multiple layers */}
              <div className="absolute -inset-8 bg-gradient-to-r from-bright-blue/30 via-white/15 to-primary/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -inset-4 bg-gradient-to-br from-bright-blue/20 via-transparent to-primary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
              
              {/* Main logo container with enhanced design */}
              <div className="relative w-full h-full bg-gradient-to-br from-primary via-primary-dark to-primary-darker rounded-full p-16 shadow-2xl border-2 border-white/20 backdrop-blur-lg flex items-center justify-center group hover:scale-105 transition-all duration-500">
                {/* Inner glow ring */}
                <div className="absolute inset-4 border border-bright-blue/40 rounded-full animate-pulse"></div>
                
                {/* Logo image container */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <img 
                    src={nexaLogo}
                    alt="Nexa Labs Logo" 
                    className="w-4/4 h-4/4 object-contain filter brightness-125 drop-shadow-2xl transition-all duration-500 group-hover:brightness-150 group-hover:scale-110 group-hover:drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                  />
                  
                  {/* Logo backdrop glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-bright-blue/10 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
                
                {/* Enhanced floating particles */}
                <div className="absolute top-6 right-6 w-4 h-4 bg-bright-blue rounded-full animate-ping shadow-lg shadow-bright-blue/50"></div>
                <div className="absolute bottom-8 left-8 w-3 h-3 bg-white rounded-full animate-ping delay-500 shadow-lg shadow-white/50"></div>
                <div className="absolute top-1/2 left-4 w-2 h-2 bg-bright-blue rounded-full animate-ping delay-1000 shadow-lg shadow-bright-blue/50"></div>
                <div className="absolute top-1/3 right-4 w-2 h-2 bg-white rounded-full animate-ping delay-700 shadow-lg shadow-white/50"></div>
                <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-primary rounded-full animate-ping delay-300"></div>
                <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-bright-blue rounded-full animate-ping delay-1200"></div>
              </div>
              
              {/* Enhanced orbiting elements */}
              <div className="absolute top-0 left-1/2 w-5 h-5 bg-gradient-to-br from-bright-blue to-primary rounded-full animate-orbit shadow-xl shadow-bright-blue/50"></div>
              <div className="absolute bottom-0 right-1/2 w-4 h-4 bg-gradient-to-br from-white to-bright-blue/80 rounded-full animate-orbit-reverse delay-1000 shadow-xl shadow-white/50"></div>
              <div className="absolute left-0 top-1/2 w-3 h-3 bg-gradient-to-br from-primary to-bright-blue rounded-full animate-orbit delay-500 shadow-lg shadow-primary/50"></div>
              <div className="absolute right-0 top-1/2 w-3 h-3 bg-gradient-to-br from-bright-blue to-white rounded-full animate-orbit-reverse delay-1500 shadow-lg shadow-bright-blue/50"></div>
              
              {/* Floating text elements */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white/60 animate-pulse tracking-widest">
                INNOVATION
              </div>
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-bright-blue/80 animate-pulse delay-500 tracking-widest">
                EXCELLENCE
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-bright-blue/10 to-transparent rounded-full blur-xl animate-float"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl animate-float-delayed"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;