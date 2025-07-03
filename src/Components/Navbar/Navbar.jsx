import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import yellowLogo from '../../assets/white-yellow.png'
import Cookies from 'js-cookie';
import cali2 from '../../assets/calisthenicsuser2.jpg'

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const token = Cookies.get('token');
    
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleUserDropdown = () => {
        setIsUserDropdownOpen(!isUserDropdownOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const closeUserDropdown = () => {
        setIsUserDropdownOpen(false);
    };

    // Close dropdowns when clicking outside
    const handleOutsideClick = (e) => {
        if (!e.target.closest('#user-menu-button') && !e.target.closest('#user-dropdown')) {
            setIsUserDropdownOpen(false);
        }
        if (!e.target.closest('#mobile-menu-button') && !e.target.closest('#mobile-menu')) {
            setIsMobileMenuOpen(false);
        }
    };

    const signout = () => {
        Cookies.remove('token');
        window.location.href = '/login';
    };

    React.useEffect(() => {
        if (isMobileMenuOpen || isUserDropdownOpen) {
            document.addEventListener('click', handleOutsideClick);
            return () => document.removeEventListener('click', handleOutsideClick);
        }
    }, [isMobileMenuOpen, isUserDropdownOpen]);

    const navLinkClass = ({ isActive }) =>
        isActive
            ? "secondary-color transition-colors duration-200"
            : "text-white hover:secondary-color transition-colors duration-200";

    const mobileNavLinkClass = ({ isActive }) =>
        isActive
            ? "block py-2 px-3 secondary-color rounded transition-colors duration-200"
            : "block py-2 px-3 text-white hover:secondary-color rounded transition-colors duration-200";

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-10">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                
                {/* Mobile Menu Button - Left on mobile */}
                <button
                    id="mobile-menu-button"
                    onClick={toggleMobileMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg lg:hidden hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 transition-colors duration-200"
                    aria-controls="mobile-menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    {isMobileMenuOpen ? (
                        // Close icon
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        // Hamburger icon
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    )}
                </button>

                {/* Brand - Center on all screens */}
                <div className="absolute left-1/2 transform -translate-x-1/2 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:order-2">
                    {/* <span className="text-2xl secondary-color font-bold drop-shadow-lg">Rage</span> */}
                    <img className='w-28' src={yellowLogo} alt="" />
                </div>

                {/* Desktop Navigation Links - Left side on large screens */}
                <div className="hidden lg:flex items-center lg:order-1">
                    <ul className="flex space-x-8 ">
                        <li>
                            <NavLink to="/" className={navLinkClass}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={navLinkClass}>
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/plan" className={navLinkClass}>
                                Plans
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={navLinkClass}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Conditional Right Section - User Section or Auth Buttons */}
                <div className="flex items-center lg:order-3 space-x-3 relative">
                    {token ? (
                        // Authenticated User Section
                        <>
                            {/* User name - hidden on mobile, visible on tablet+ */}
                            <span className="hidden md:block text-white text-sm drop-shadow-md">John Doe</span>
                            
                            {/* User avatar button */}
                            <button 
                                id="user-menu-button"
                                onClick={toggleUserDropdown}
                                type="button" 
                                className="flex text-sm bg-gray-800 bg-opacity-70 rounded-full focus:ring-4 focus:ring-white focus:ring-opacity-30 hover:ring-4 hover:ring-white hover:ring-opacity-20 transition-all duration-200 backdrop-blur-sm" 
                                aria-expanded={isUserDropdownOpen}
                            >
                                <span className="sr-only">Open user menu</span>
                                <img className="w-8 h-8 rounded-full" src={cali2} alt="user photo" />
                            </button>
                            
                            {/* User Dropdown Menu */}
                            {isUserDropdownOpen && (
                                <div 
                                    id="user-dropdown"
                                    className="absolute right-0 top-12 z-50 w-48 text-base list-none bg-white bg-opacity-95 backdrop-blur-md divide-y divide-gray-100 rounded-lg shadow-lg border border-gray-200"
                                >
                                    <div className="px-4 py-3">
                                        <span className="block text-sm text-gray-900 font-medium">John Doe</span>
                                        <span className="block text-sm text-gray-500 truncate">john@example.com</span>
                                    </div>
                                    <ul className="py-2">
                                        <li>
                                            <a href="#" onClick={closeUserDropdown} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:bg-opacity-70 transition-colors duration-200">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={closeUserDropdown} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:bg-opacity-70 transition-colors duration-200">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={closeUserDropdown} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:bg-opacity-70 transition-colors duration-200">Earnings</a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={signout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:bg-opacity-70 transition-colors duration-200 border-t border-gray-100">Sign out</a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </>
                    ) : (
                        // Unauthenticated User Section - Sign In/Sign Up Buttons (Hidden on mobile)
                        <>
                            <NavLink 
                                to="/login" 
                                className="hidden lg:block px-4 py-2 text-sm bg-primary-color rounded-lg"
                            >
                                Sign In
                            </NavLink>
                            <NavLink 
                                to="/signup" 
                                className="hidden lg:block px-4 py-2 text-sm bg-primary-color text-secondary-color rounded-lg "
                            >
                                Sign Up
                            </NavLink>
                        </>
                    )}
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div 
                    id="mobile-menu"
                    className="lg:hidden absolute top-full left-0 right-0 z-40 bg-black bg-opacity-90 backdrop-blur-md border-t border-gray-700 border-opacity-50"
                >
                    <div className="px-4 py-4 space-y-2">
                        <ul className="space-y-2">
                            <li>
                                <NavLink
                                    to="/"
                                    onClick={closeMobileMenu}
                                    className={mobileNavLinkClass}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    onClick={closeMobileMenu}
                                    className={mobileNavLinkClass}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/services"
                                    onClick={closeMobileMenu}
                                    className={mobileNavLinkClass}
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/pricing"
                                    onClick={closeMobileMenu}
                                    className={mobileNavLinkClass}
                                >
                                    Pricing
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    onClick={closeMobileMenu}
                                    className={mobileNavLinkClass}
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        
                        {/* Mobile user section - conditional */}
                        {token ? (
                            // Authenticated mobile user info
                            <div className="pt-4 mt-4 border-t border-gray-700 border-opacity-50">
                                <div className="flex items-center space-x-3 px-3 py-2">
                                    <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
                                    <div>
                                        <span className="block text-sm text-white font-medium">John Doe</span>
                                        <span className="block text-xs text-gray-300">john@example.com</span>
                                    </div>
                                </div>
                                <div className="mt-2 space-y-1">
                                    <a href="#" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-10 rounded transition-colors duration-200">Dashboard</a>
                                    <a href="#" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-10 rounded transition-colors duration-200">Settings</a>
                                    <a href="#" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-10 rounded transition-colors duration-200">Earnings</a>
                                    <a href="#" onClick={signout} className="block px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-white hover:bg-opacity-10 rounded transition-colors duration-200">Sign out</a>
                                </div>
                            </div>
                        ) : (
                            // Unauthenticated mobile auth buttons
                            <div className="pt-4 mt-4 border-t border-gray-700 border-opacity-50 space-y-2">
                                <NavLink
                                    to="/login"
                                    onClick={closeMobileMenu}
                                    className="block px-3 py-2 text-sm text-white hover:text-gray-200 hover:bg-white hover:bg-opacity-10 rounded transition-colors duration-200"
                                >
                                    Sign In
                                </NavLink>
                                <NavLink
                                    to="/signup"
                                    onClick={closeMobileMenu}
                                    className="block px-3 py-2 text-sm text-white rounded  transition-all duration-200"
                                >
                                    Sign Up
                                </NavLink>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    )
}