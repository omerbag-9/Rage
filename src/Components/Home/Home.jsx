import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import ashraf from '../../assets/ashraffounder.jpeg'
import helmy from '../../assets/hemlyfounder.jpeg'
import bars from '../../assets/bars.jpg'
import CoachesSlider from '../CoachesSlider/CoachesSlider.jsx';
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
                    <div className="w-full sm:w-1/2 md:w-1/3 p-4">
                        <div className="bg-black rounded-lg shadow-lg overflow-hidden">
                            <img src={ashraf} alt="Ashraf Founder" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Ashraf Adel</h3>
                                <p className='bebas-neue-regular text-dimmed-secondary-color'>Power national champion</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 p-4">
                        <div className="bg-black rounded-lg shadow-lg overflow-hidden">
                            <img src={helmy} alt="Hemly Founder" className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Ahmed Helmy</h3>
                                <p className='bebas-neue-regular text-dimmed-secondary-color'>freestyle world champion</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* our coaches Section */}
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
                <div className="flex gap-12 justify-center">
                    <div className="">
                        <img className="w-100" src={bars} alt="" />
                    </div>
                    <div className="">
                        <img className="w-100" src={bars} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}