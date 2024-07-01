import React from 'react'
import htmlicn from '../Assets/html-5.png';
import cssicn from '../Assets/css-3.png'
import jsicn from '../Assets/js.png'
import javaicn from '../Assets/java.png'
import pythonicn from '../Assets/python.png'
import mongoicn from '../Assets/mongodb.png'
import reacticn from '../Assets/react-icon.png'
import sqlicn from '../Assets/mysql.png'
import springicn from '../Assets/spring-icon.png'
import reduxicn from '../Assets/redux-icon.png'
import postmanicn from '../Assets/postman-icon.png'
import tailwindicn from '../Assets/tailwind-icon.png'

const Skills = () => {
    const skill = [
        {
            id: 1,
            src: htmlicn,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: cssicn,
            title: 'CSS',
            style: 'shadow-blue-800'
        },
        {
            id: 3,
            src: jsicn,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: javaicn,
            title: 'JAVA',
            style: 'shadow-blue-500'
        },
        {
            id: 5,
            src: pythonicn,
            title: 'Python',
            style: 'shadow-blue-300'
        },
        {
            id: 6,
            src: sqlicn,
            title: 'SQL',
            style: 'shadow-blue-500'
        },
        {
            id: 7,
            src: mongoicn,
            title: 'Mongodb',
            style: 'shadow-green-500'
        },
        {
            id: 8,
            src: reacticn,
            title: 'ReactJS',
            style: 'shadow-gray-500'
        },
        {
            id: 9,
            src: springicn,
            title: 'SpringBoot',
            style: 'shadow-green-500'
        },
        {
            id: 10,
            src: reduxicn,
            title: 'Redux',
            style: 'shadow-purple-600'
        },
        {
            id: 11,
            src: postmanicn,
            title: 'Postman',
            style: 'shadow-orange-600'
        },
        {
            id: 12,
            src: tailwindicn,
            title: 'Tailwind',
            style: 'shadow-blue-600'
        },
    ]
    return (
        <>
           
            
            <div id="skills" className='py-12 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 ... ' >

                <div className='max-w-screen-lg mx-auto p-2  flex flex-col justify-center w-full '>

                    <div>
                         
                        <p className='text-3xl text-gray-200 font-bold border-b-4 border-gray-500 p-2  inline'>My Skills</p>
                    </div>

                    <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center text-gray-300 py-8 px-12 sm:px-0 mt-6 shadow-2xl rounded-2xl'>

                        {
                            skill.map(({ id, title, style, src }) => (
                                <div
                                    key={id}
                                    className={`shadow-md hover:scale-105 duration-500 py-2  -mr-2 -ml-2 lg:mr-5 lg:ml-5 md:ml-5 md-mr-5 rounded-lg ${style}`}>
                                    <img className='w-20 mx-auto' src={src} alt="" />
                                    <p className='mt-4 font-bold'>{title}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </>

    )
}

export default Skills
