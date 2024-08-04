import React from 'react';
import htmlicn from '../Assets/html-5.png';
import cssicn from '../Assets/css-3.png';
import jsicn from '../Assets/js.png';
import javaicn from '../Assets/java.png';
import pythonicn from '../Assets/python.png';
import mongoicn from '../Assets/mongodb.png';
import reacticn from '../Assets/react-icon.png';
import sqlicn from '../Assets/mysql.png';
import springicn from '../Assets/spring-icon.png';
import reduxicn from '../Assets/redux-icon.png';
import postmanicn from '../Assets/postman-icon.png';
import tailwindicn from '../Assets/tailwind-icon.png';
import { motion } from 'framer-motion';


const animationVariants = {
    html: {
        initial: { y: -8 },
        animate: {
            y: [8, -8],
            transition: { duration: 2.5, ease: "linear", repeat: Infinity ,repeatType:"reverse"}
        }
    },
    css: {
        initial: { y: -8 },
        animate: {
            y: [8, -8],
            transition: { duration: 1.5, ease: "linear", repeat: Infinity ,repeatType:"reverse" }
        }
    },
    js: {
        initial: { y: -8 },
        animate: {
            y: [8, -8],
            transition: { duration: 2, ease: "linear", repeat: Infinity ,repeatType:"reverse"}
        }
    },
    java: {
        initial: { y: -8 },
        animate: {
            y: [8, -8],
            transition: { duration: 2.6, ease: "linear", repeat: Infinity ,repeatType:"reverse"}
        }
    },
    python: {
        initial: { y: -8 },
        animate: {
            y: [8, -8],
            transition: { duration: 1.8, ease: "linear", repeat: Infinity ,repeatType:"reverse"}
        }
    },
    mongo: {
        initial: { y: -8 },
        animate: {
            y: [8, -8],
            transition: { duration: 2.1, ease: "linear", repeat: Infinity ,repeatType:"reverse"}
        }
    },
    react: {
        initial: { y: -8 },
        animate: {
            y: [8, -8],
            transition: { duration: 2.4, ease: "linear", repeat: Infinity ,repeatType:"reverse"}
        }
    },
    sql: {
        initial: { y: -8 },
        animate: {
            y: [8, -8],
            transition: { duration: 1.5, ease: "linear", repeat: Infinity ,repeatType:"reverse"}
        }
    },
    spring: {
        initial: { y: -8 },
        animate: {
            y: [8, -8],
            transition: { duration: 1.8, ease: "linear", repeat: Infinity ,repeatType:"reverse"}
        }
    },
    redux: {
        initial: { y: -8 },
        animate: {
            y: [8, -8],
            transition: { duration: 2.0, ease: "linear", repeat: Infinity ,repeatType:"reverse"}
        }
    },
    postman: {
        initial: { y: -8 },
        animate: {
            y: [8, -8],
            transition: { duration: 2.4, ease: "linear", repeat: Infinity ,repeatType:"reverse"}
        }
    },
    tailwind: {
        initial: { y: -8 },
        animate: {
            y: [8, -8],
            transition: { duration: 1.7, ease: "linear", repeat: Infinity ,repeatType:"reverse"}
        }
    }
};

const Skills = () => {
    const skill = [
        { id: 1, src: htmlicn, title: 'HTML', style: 'shadow-orange-500', variant: 'html' },
        { id: 2, src: cssicn, title: 'CSS', style: 'shadow-blue-800', variant: 'css' },
        { id: 3, src: jsicn, title: 'JavaScript', style: 'shadow-yellow-500', variant: 'js' },
        { id: 4, src: javaicn, title: 'JAVA', style: 'shadow-blue-500', variant: 'java' },
        { id: 5, src: pythonicn, title: 'Python', style: 'shadow-blue-300', variant: 'python' },
        { id: 6, src: sqlicn, title: 'SQL', style: 'shadow-blue-500', variant: 'sql' },
        { id: 7, src: mongoicn, title: 'Mongodb', style: 'shadow-green-500', variant: 'mongo' },
        { id: 8, src: reacticn, title: 'ReactJS', style: 'shadow-gray-500', variant: 'react' },
        { id: 9, src: springicn, title: 'SpringBoot', style: 'shadow-green-500', variant: 'spring' },
        { id: 10, src: reduxicn, title: 'Redux', style: 'shadow-purple-600', variant: 'redux' },
        { id: 11, src: postmanicn, title: 'Postman', style: 'shadow-orange-600', variant: 'postman' },
        { id: 12, src: tailwindicn, title: 'Tailwind', style: 'shadow-blue-600', variant: 'tailwind' },
    ];

    return (
        <>
            <div id="skills" className='h-screen py-12 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900'>
                <div className='max-w-screen-lg mx-auto p-2 flex flex-col justify-center w-full'>
                    <div>
                        <p className='text-3xl text-gray-200 font-bold border-b-4 border-gray-500 p-2 inline'>My Skills</p>
                    </div>
                    <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center text-gray-300 py-8 px-12 sm:px-0 mt-6'>
                        {
                            skill.map(({ id, title, style, src, variant }) => (
                                <motion.div
                                    key={id}
                                    variants={animationVariants[variant] || {}}
                                    initial="initial"
                                    animate="animate"
                                    className={`shadow-md duration-500 py-2 rounded-lg ${style} flex flex-col items-center justify-center`}
                                >
                                    <img className='w-20 mx-auto' src={src} alt={title} />
                                    <p className='mt-4 font-bold'>{title}</p>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;
