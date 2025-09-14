import { Link } from 'react-scroll';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, GithubIcon } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gradient-to-br from-primary to-primary-light text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-bright-blue">
                NEXA LABS
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Innovative software solutions for the digital future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-bright-blue transition-colors duration-300">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-bright-blue transition-colors duration-300">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-bright-blue transition-colors duration-300">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-bright-blue transition-colors duration-300">
                <LinkedinIcon size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-bright-blue transition-colors duration-300">
                <GithubIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-bright-blue">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Software Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Cloud Services
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-bright-blue">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-bright-blue">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Galle, Southern Province, Sri Lanka.</li>
              <li className="text-gray-300">nexalabslk@gmail.com</li>
              <li className="text-gray-300">+94 (76) 380 1197</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} NEXA LABS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;