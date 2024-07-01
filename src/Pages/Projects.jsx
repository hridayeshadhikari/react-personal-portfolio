import React from 'react';
import socialvista from '../Assets/socialvista.png'
import portfolio_img from '../Assets/portfolio.png'
import e_commerce from '../Assets/trendsphere.png'

const Projects = () => {
    const myproj = [
       
        {
            url: 'https://e-commerce-site-frontend-react.vercel.app/',
            image: e_commerce,
            title: "TrendSphere E-Commerce Site",
            description: 'Crafting seamless online shopping experiences, our e-commerce site offers a curated collection of products, intuitive navigation, and secure transactions.',
        },
        {
            url: 'https://social-media-web-app-react.vercel.app/',
            image: socialvista,
            title: "SocialVista social media website",
            description: 'Designed and developed a social media platform using ReactJS for the frontend, Spring Boot for backend services, and MySQL for database storage.',
        },
        {
            url: 'https://react-personal-portfolio-gold.vercel.app/',
            image: portfolio_img,
            title: "Presonal Portfolio Website",
            description: 'My third project personal portfolio website based on reactjs and tailwind css consist basic information about me',
        },
    ];
    const openURL = (url) => {
        window.open(url, '_blank');
    };


    return (
        <div>
            <div id='projects' className='py-12 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 ... '>
                <div className='max-w-screen-lg mx-auto p-2 flex flex-col justify-center w-full'>
                    <div>
                        <p className='text-3xl font-bold border-b-4 border-gray-500 p-2 text-gray-200 inline '>My Projects</p>
                    </div>
                    <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-12 px-4 sm:px-0 mt-6'>
                        {myproj.map(({ title, description, image, url }) => (
                            <div key={title}
                                className="hover:scale-105 duration-500 block rounded-lg bg-white shadow-2xl shadow-blue-500 dark:bg-neutral-700 ">
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
                                    <button
                                        onClick={() => openURL(url)}
                                        type="button"
                                        className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-4 py-2 text-center"
                                    >
                                        Visit Site
                                    </button>
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
