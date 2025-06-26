import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import ashraf from '../../assets/ashraffounder.jpeg'
import helmy from '../../assets/hemlyfounder.jpeg'
import bars from '../../assets/bars.jpg'
import CoachesSlider from '../CoachesSlider/CoachesSlider.jsx';
import { Link } from 'react-router-dom'
export default function Home() {

    return (
        <div className="relative">
            {/* Navbar - Fixed and Transparent */}
            <Navbar />

            {/* Hero Section - Full Screen */}
            <section className="relative h-screen w-full overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{

                    }}
                >
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="bebas-neue-regular text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            Welcome to <span className="secondary-color bebas-neue-regular">Rage</span>
                        </h1>
                        <p className="bebas-neue-regular text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Push your limits.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 border-2 border-white hover:border-secondary-color text-white font-semibold rounded-lg transition-colors duration-300 transform  shadow-lg">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </section>

            {/* Content Section - This will be below the hero */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-color text-white">
                <div className="max-w-6xl mx-auto">
                    {/* header*/}
                    <div className="text-center mb-12">
                        <h2 className="bebas-neue-regular text-4xl md:text-5xl font-bold text-white mb-4">
                            Founders
                        </h2>
                        <div className="w-24 h-1 bg-secondary-color mx-auto"></div>
                    </div>
                    {/* //header*/}
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-1/3 p-4">
                        <div className="bg-black rounded-lg shadow-lg overflow-hidden">
                            <img src={ashraf} alt="Ashraf Founder" className="w-full h-96 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Ashraf Adel</h3>
                                <p className='bebas-neue-regular text-dimmed-secondary-color'>Power national champion</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 p-4">
                        <div className="bg-black rounded-lg shadow-lg overflow-hidden">
                            <img src={helmy} alt="Hemly Founder" className="w-full h-96 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Ahmed Helmy</h3>
                                <p className='bebas-neue-regular text-dimmed-secondary-color'>freestyle world champion</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>            {/* our coaches Section */}
            <CoachesSlider />
            {/*our facilities section*/}
            <div className="text-center py-16 px-4 sm:px-6 lg:px-8 bg-primary-color text-white">
                {/* header*/}
                <div className="text-center mb-12">
                    <h2 className="bebas-neue-regular text-4xl md:text-5xl font-bold text-white mb-4">
                        Our Facilities
                    </h2>
                    <div className="w-24 h-1 bg-secondary-color mx-auto"></div>
                </div>
                {/* //header*/}
                <div className="flex flex-col lg:flex-row gap-12 justify-center">
                    <div className="">
                        <img className="w-100" src={bars} alt="" />
                    </div>
                    <div className="">
                        <img className="w-100" src={bars} alt="" />
                    </div>
                </div>
                <p className='mt-14 text-lg text-secondary-color bebas-neue-regular'>Train at our professional calisthenics park located at Cairo International Stadium</p>
            </div>
            {/* //our facilities section*/}


            {/* plans */}
            <div className="text-center py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
                {/* header*/}
                <div className="text-center mb-12">
                    <h2 className="bebas-neue-regular text-4xl md:text-5xl font-bold text-white mb-4">
                        Book From Our Plans
                    </h2>
                    <div className="w-24 h-1 bg-secondary-color mx-auto"></div>
                </div>
                {/* //header*/}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center p-4 lg:p-8">
                    {/* GROUP Photo */}
                    <Link to={'/plans'}>
                        <div className="relative p-2 lg:p-4 hover:scale-105 ">
                            <div className="relative w-full max-w-sm lg:w-96 h-48 lg:h-full overflow-hidden rounded-lg shadow-lg mx-auto">
                                {/* Background gradient as photo placeholder */}
                                <div className="w-full h-full">
                                    <img className='w-full h-full object-cover' src={bars} alt="" />
                                </div>
                                {/* Blur overlay */}
                                <div className="absolute inset-0 backdrop-blur-md bg-black bg-opacity-20"></div>
                                {/* Centered text */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h2 className="text-2xl lg:text-4xl font-bold text-white tracking-wider drop-shadow-lg">
                                        GROUP
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                    {/* PRIVATE Photo */}

                    <Link to={'/plans'}>
                        <div className="relative p-2 lg:p-4 hover:scale-105 ">
                            <div className="relative w-full max-w-sm lg:w-96 h-48 lg:h-full overflow-hidden rounded-lg shadow-lg mx-auto">
                                {/* Background gradient as photo placeholder */}
                                <div className="w-full h-full">
                                    <img className='w-full h-full object-cover' src={bars} alt="" />
                                </div>
                                {/* Blur overlay */}
                                <div className="absolute inset-0 backdrop-blur-md bg-black bg-opacity-20"></div>
                                {/* Centered text */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h2 className="text-2xl lg:text-4xl font-bold text-white tracking-wider drop-shadow-lg">
                                        PRIVATE
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
            {/* plans */}

            {/* operating hours*/}
            <div className="text-center py-16 px-4 sm:px-6 lg:px-8 bg-primary-color text-white">
                {/* header*/}
                <div className="text-center mb-12">
                    <h2 className="bebas-neue-regular text-4xl md:text-5xl font-bold text-white mb-4">
                        Operating Hours
                    </h2>
                    <div className="w-24 h-1 bg-secondary-color mx-auto"></div>
                </div>
                {/* //header*/}
                <div className="w-fit mx-auto">
                    <h2 className='text-xl md:text-2xl font-semibold text-start'>Morning: 7:00 AM - 10:00 AM <span className='bebas-neue-regular text-sm text-dimmed-secondary-color'>Private Classes Only</span></h2>
                    <h2 className='text-xl md:text-2xl font-semibold text-start'>Evening: 4:00 PM - 9:00 PM <span className='bebas-neue-regular text-sm text-dimmed-secondary-color'>Group Sessions</span></h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center p-4 lg:p-8">
                    <div className="bg-black rounded-lg shadow-lg p-6 w-full max-w-sm mx-auto">
                        <h2 className='text-secondary-color text-2xl font-bold'>4:00 PM</h2>
                        <h3 className='text-xl opacity-50'>Group <br />Sessions</h3>
                    </div>
                    <div className="bg-black rounded-lg shadow-lg p-6 w-full max-w-sm mx-auto">
                        <h2 className='text-secondary-color text-2xl font-bold'>5:00 PM</h2>
                        <h3 className="text-xl opacity-50">Group <br />Sessions</h3>
                    </div>
                    <div className="bg-black rounded-lg shadow-lg p-6 w-full max-w-sm mx-auto">
                        <h2 className='text-secondary-color text-2xl font-bold'>6:00 PM</h2>
                        <h3 className="text-xl opacity-50">Group <br />Sessions</h3>
                    </div>
                    <div className="bg-black rounded-lg shadow-lg p-6 w-full max-w-sm mx-auto">
                        <h2 className='text-secondary-color text-2xl font-bold'>7:00 PM</h2>
                        <h3 className="text-xl opacity-50">Group <br />Sessions</h3>
                    </div>
                    <div className="bg-black rounded-lg shadow-lg p-6 w-full max-w-sm mx-auto">
                        <h2 className='text-secondary-color text-2xl font-bold'>8:00 PM</h2>
                        <h3 className="text-xl opacity-50">Group <br />Sessions</h3>
                    </div>
                    <div className="bg-black rounded-lg shadow-lg p-6 w-full max-w-sm mx-auto">
                        <h2 className='text-secondary-color text-2xl font-bold'>9:00 PM</h2>
                        <h3 className="text-xl opacity-50">Group <br />Sessions</h3>
                    </div>
                </div>
            </div>

            {/* //operating hours*/}

            {/* Contact Us*/}
            <div className="text-center py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
                {/* header*/}
                <div className="text-center mb-12">
                    <h2 className="bebas-neue-regular text-4xl md:text-5xl font-bold text-white mb-4">
                        Contact Us
                    </h2>
                    <div className="w-24 h-1 bg-secondary-color mx-auto"></div>
                </div>
                {/* //header*/}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center">
                    <div className="bg-primary-color rounded-lg shadow-lg py-6 w-full max-w-sm mx-auto">
                        <i className="fas fa-phone text-4xl text-secondary-color"></i>
                        <h2 className='text-2xl my-3 font-semibold'>Phone</h2>
                        <p className='opacity-50'>01094579550</p>
                    </div>
                    <div className="bg-primary-color rounded-lg shadow-lg py-6 w-full max-w-sm mx-auto">
                        <i className="fas fa-envelope text-4xl text-secondary-color"></i>
                        <h2 className='text-2xl my-3 font-semibold'>Email</h2>
                        <p className='opacity-50'>rage.calisthenics@gmail.com</p>
                    </div>
                    <div className="bg-primary-color rounded-lg shadow-lg py-6 w-full max-w-sm mx-auto">
                        <i className="fa-brands fa-instagram text-4xl text-secondary-color"></i>
                        <h2 className='text-2xl my-3 font-semibold'>Instagram</h2>
                        <p className='opacity-50'>@rage.egypt</p>
                    </div>
                </div>
                <p className='mt-12 text-secondary-color bebas-neue-regular text-lg'>Located at Cairo International Stadium, Cairo, Egypt</p>
            </div>
            {/* // Contact Us*/}

            {/* Follow our journey*/}
            <div className="text-center py-16 px-4 sm:px-6 lg:px-8 bg-primary-color text-white">
                {/* header*/}
                <div className="text-center mb-12">
                    <h2 className="bebas-neue-regular text-4xl md:text-5xl font-bold text-white mb-4">
                        Follow Our Journey
                    </h2>
                    <div className="w-24 h-1 bg-secondary-color mx-auto"></div>
                </div>
                {/* //header*/}            </div>
            {/* //Follow our journey*/}
        </div>
    )
}