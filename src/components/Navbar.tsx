import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { MenuIcon, XIcon } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Home',
    to: 'hero'
  }, {
    name: 'About',
    to: 'about'
  }, {
    name: 'Services',
    to: 'services'
  }, {
    name: 'Portfolio',
    to: 'portfolio'
  }, {
    name: 'Contact',
    to: 'contact'
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-bright-blue">
              NEXA LABS
            </span>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(link => <Link key={link.name} to={link.to} spy={true} smooth={true} offset={-70} duration={500} className={`${scrolled ? 'text-primary' : 'text-white'} hover:text-bright-blue cursor-pointer font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-bright-blue after:transition-all after:duration-300 hover:after:w-full`}>
                {link.name}
              </Link>)}
          </div>
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`${scrolled ? 'text-primary' : 'text-white'} focus:outline-none transition-transform duration-300 hover:scale-110`}>
              {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation Menu */}
        {isOpen && <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 animate-fade-in-down">
            <div className="flex flex-col space-y-4">
              {navLinks.map(link => <Link key={link.name} to={link.to} spy={true} smooth={true} offset={-70} duration={500} className="text-primary hover:text-bright-blue cursor-pointer font-medium transition-colors duration-300" onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>)}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;