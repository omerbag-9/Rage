import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';

import ashraf from '../../assets/ashraffounder.jpeg';
import helmy from '../../assets/hemlyfounder.jpeg';
import ahmed from '../../assets/ahmedyehia.png';
import menna from '../../assets/menna.png';

const coaches = [
    {
        id: 1,
        name: "Ashraf Adel",
        photo: ashraf,
        instagram: "https://www.instagram.com/ashraf.adel.official"
    },
    {
        id: 2,
        name: "Ahmed Helmy",
        photo: helmy,
        instagram: "https://www.instagram.com/helmy_sw"
    },
    {
        id: 3,
        name: "Ahmed Yehia",
        photo: ahmed,
        instagram: "https://www.instagram.com/ahmedyehi.a"
    },
    {
        id: 4,
        name: "Menna",
        photo: menna,
        instagram: "https://www.instagram.com/mennahshahin"
    }
];

export default function CoachesSlider() {
    const InstagramIcon = () => (
        <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
    );

    const splideOptions = {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        arrows: false,
        pagination: false,
        drag: true,
        gap: '1rem',
        autoplay: true,
        interval: 3000,
        speed: 800,
        pauseOnHover: true,
        resetProgress: false,
        focus: 'center',
        trimSpace: true,

        breakpoints: {
            1200: {
                perPage: 3,
            },
            1024: {
                perPage: 2,
            },
            768: {
                perPage: 1,
            },
            640: {
                perPage: 1,
            },
        },
    };

    return (
        <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="bebas-neue-regular text-4xl md:text-5xl font-bold text-white mb-4">
                        Our Coaches
                    </h2>
                    <div className="w-24 h-1 bg-secondary-color mx-auto"></div>
                </div>

                <Splide options={splideOptions} aria-label="Our Coaches">
                    {coaches.map((coach) => (
                        <SplideSlide key={coach.id}>
                            <div className="flex justify-center items-center h-full">
                                <div className="bg-primary-color rounded-2xl p-6 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl border border-gray-800 w-full max-w-sm">
                                    <div className="relative mb-6">
                                        <div className="w-48 h-48 mx-auto rounded-full overflow-hidden ring-4 ring-gray-700 shadow-xl">
                                            <img
                                                src={coach.photo}
                                                alt={coach.name}
                                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                            />
                                        </div>
                                    </div>

                                    <div className="text-center mb-4">
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {coach.name}
                                        </h3>
                                        <div className="w-16 h-0.5 bg-gray-600 mx-auto"></div>
                                    </div>

                                    <div className="text-center">
                                        <a
                                            href={coach.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white hover:text-secondary-color transition-all duration-300 hover:bg-black hover:scale-110 shadow-lg"
                                            aria-label={`Follow ${coach.name} on Instagram`}
                                        >
                                            <InstagramIcon />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </section>
    );
}