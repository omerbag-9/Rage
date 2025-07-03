import React from 'react';
import whiteLogo from '../../assets/white.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      {/* Font Awesome CSS */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossOrigin="anonymous"
      />
      
      <footer className="bg-black text-white">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Logo and Company Info */}
            <div className="lg:col-span-2">
              <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                <div className="mb-4 sm:mb-0 sm:mr-4">
                  <Link to={"/"}>
                  <img src={whiteLogo} className='w-20 sm:w-24' alt="RAGE Logo" />
                  </Link>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Calisthenics Training</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-8 max-w-2xl">
                Transform your body with the power of calisthenics. Master bodyweight movements, 
                build functional strength, and achieve your fitness goals with our expert training programs.
              </p>
              
              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <i className="fas fa-phone text-secondary-color w-5 flex-shrink-0"></i>
                    <span className="ml-3 text-gray-300">+201094579550</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-envelope text-secondary-color w-5 flex-shrink-0"></i>
                    <span className="ml-3 text-gray-300 break-all">ragecalisthenics@gmail.com</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-start">
                    <i className="fas fa-map-marker-alt text-secondary-color w-5 flex-shrink-0 mt-1"></i>
                    <span className="ml-3 text-gray-300">Cairo International Stadium, Cairo, Egypt</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-secondary-color">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-secondary-color transition-colors duration-200 block">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-secondary-color transition-colors duration-200 block">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-secondary-color transition-colors duration-200 block">Training Programs</a></li>
                <li><a href="#" className="text-gray-300 hover:text-secondary-color transition-colors duration-200 block">Personal Training</a></li>
                <li><a href="#" className="text-gray-300 hover:text-secondary-color transition-colors duration-200 block">Classes</a></li>
                <li><a href="#" className="text-gray-300 hover:text-secondary-color transition-colors duration-200 block">Nutrition</a></li>
                <li><a href="#" className="text-gray-300 hover:text-secondary-color transition-colors duration-200 block">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-6 text-secondary-color">Follow Us</h4>
              <div className="flex justify-center space-x-4 flex-wrap gap-y-4">
                <a href="#" className="bg-primary-color p-3 rounded-full hover:bg-secondary-color transition-colors duration-200">
                  <i className="fab fa-facebook-f text-white text-lg"></i>
                </a>
                <a href="#" className="bg-primary-color p-3 rounded-full hover:bg-secondary-color transition-colors duration-200">
                  <i className="fab fa-instagram text-white text-lg"></i>
                </a>
                <a href="#" className="bg-primary-color p-3 rounded-full hover:bg-secondary-color transition-colors duration-200">
                  <i className="fab fa-youtube text-white text-lg"></i>
                </a>
                <a href="#" className="bg-primary-color p-3 rounded-full hover:bg-secondary-color transition-colors duration-200">
                  <i className="fab fa-tiktok text-white text-lg"></i>
                </a>
                <a href="#" className="bg-primary-color p-3 rounded-full hover:bg-secondary-color transition-colors duration-200">
                  <i className="fab fa-twitter text-white text-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-primary-color border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 gap-4">
              <div className="text-center sm:text-left">
                <p>&copy; 2025 RAGE Calisthenics. All rights reserved.</p>
              </div>
              <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6">
                <a href="#" className="hover:text-secondary-color transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="hover:text-secondary-color transition-colors duration-200">Terms of Service</a>
                <a href="#" className="hover:text-secondary-color transition-colors duration-200">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;