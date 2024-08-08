import React from 'react';
import socialvista from '../Assets/socialvista.png'
import portfolio_img from '../Assets/portfolio.png'
import e_commerce from '../Assets/trendsphere.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Aos from "aos"
import 'aos/dist/aos.css'
import {useEffect} from 'react'

const Projects = () => {
    const myproj = [

        {
            url: 'https://e-commerce-site-frontend-react.vercel.app/',
            image: e_commerce,
            title: "TrendSphere E-Commerce Site",
            description: 'Crafting seamless online shopping experiences, our e-commerce site offers a curated collection of products, intuitive navigation, and secure transactions.',
            techUsed: ["React.js", "MySql", "Java", "Spring Boot", "Tailwind", "Redux"]
        },
        {
            url: 'https://social-media-web-app-react.vercel.app/',
            image: socialvista,
            title: "SocialVista social media website",
            description: 'Designed and developed a social media platform using ReactJS for the frontend, Spring Boot for backend services, and MySQL for database storage.',
            techUsed: ["React.js", "MySql", "Java", "Spring Boot", "Tailwind", "Redux"]
        },
        {
            url: 'https://react-personal-portfolio-gold.vercel.app/',
            image: portfolio_img,
            title: "Presonal Portfolio Website",
            description: 'My third project personal portfolio website based on reactjs and tailwind css consist basic information about me',
            techUsed: ["React.js", "Tailwind"]
        },
    ];
    const openURL = (url) => {
        window.open(url, '_blank');
    };

    useEffect(() => {
        Aos.init({duration:1000})
       }, [])

    return (
        <div>
            <div id='projects' className='py-12 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 ... '>
                <div className='max-w-screen-lg mx-auto p-2 flex flex-col justify-center w-full'>
                    <div>
                        <p className='text-3xl font-bold border-b-4 border-gray-500 p-2 text-gray-200 inline '>My Projects</p>
                    </div>
                    <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-12 px-4 sm:px-0 mt-6'>
                        {myproj.map(({ title, description, image, url, techUsed }) => (
                            <div
                                data-aos="flip-up"
                                className=" block rounded-lg bg-white shadow-2xl shadow-blue-500 dark:bg-neutral-700 ">
                                <img
                                    className="rounded-t-lg h-32 w-full object-cover"
                                    src={image}
                                    alt=""
                                />
                                <div className="p-4">
                                    <h5 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                        {title}
                                    </h5>
                                    <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-200">
                                        {description}
                                    </p>
                                    <div className='flex flex-wrap gap-2 text-white text-[15px] my-4'>
                                        <p className='text-white font-bold'>Tech used:</p>
                                        {techUsed?.map((tech, index) => (
                                            <p key={index} className='bg-gray-500 px-2 rounded-xl'>
                                                {tech}
                                            </p>
                                        ))}
                                    </div>
                                    <div className='mt-4'>
                                        <a
                                            onClick={() => openURL(url)}
                                            className='cursor-pointer text-white hover:text-blue-500 font-bold'
                                        >
                                            visit site <FontAwesomeIcon icon={faArrowRight} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
