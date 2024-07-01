import React from 'react';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from '@fortawesome/free-solid-svg-icons';



const Education = () => {
  const edu = [
    {
      id: 1,
      year: 2017,
      title: 'High school',
      description: 'I successfully completed my 10th grade at Doon Modern Academy Sr. Sec. School.',
      style: 'shadow-blue-500',
      icon : <FontAwesomeIcon icon={faSchool} style={{color: "#8004b9",}} />,
    },
    {
      id: 2,
      year: 2019,
      title: 'Intermediate',
      description: 'I successfully completed my 12th grade at Doon Modern Academy Sr. Sec. School.',
      style: 'shadow-blue-500',
      icon : <FontAwesomeIcon icon={faSchool} style={{color: "#8004b9",}} />,
    },
    {
      id: 3,
      year: 2022,
      title: 'BCA',
      description: 'I have completed my graduation in BCA from Amrapali Institute of Technology and Science Haldwani.',
      style: 'shadow-blue-500',
      icon : <FontAwesomeIcon icon={faGraduationCap} style={{color: "#8004b9",}} />,
    },
    {
      id: 4,
      year: 2023,
      title: 'MCA',
      description: 'I have completed my post graduation in MCA from Amrapali Institute of Technology and Science Haldwani.',
      style: 'shadow-blue-500',
      icon : <FontAwesomeIcon icon={faGraduationCap} style={{color: "#8004b9",}} />,
    },
  ];
  return (
    <div>
      
      <div id='education' className='py-12 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 ...'>
        <div className='max-w-screen-lg mx-auto p-12 flex flex-col justify-start w-full shadow-inner rounded-3xl bg-gradient-to-b from-gray-800 via-gray-800 to-gray-900 ...'>
          <div>
            <p className='text-3xl font-bold border-gray-500 p-2 text-gray-200 flex justify-center'>My Qualification</p>
            <p className="text-xl font-bold flex justify-center mt-10 text-gray-200"><FontAwesomeIcon className='text-3xl mr-3' icon={faBook} beat style={{color: "#2196F3",}} />My Education</p>
          </div>

         

          <div className=' mt-20 border-t-4  border-blue-500 w-full grid grid-cols-1 sm:grid-cols-4 gap-10 text-center py-8 px-12 sm:px-0'>
            {edu.map(({ style, title, description, year,icon }, id) => (
              <div
                key={id}
                className={`shadow-lg border-t-3  hover:scale-105 duration-500 py-2 text-gray-300 bg-gray-800 rounded-3xl ${style}`}
              >
                <p className='text-2xl'>{icon}</p>
                <h1 className='font-bold text-xl'>{year}</h1>
                <h2 className=' mt-2 text-5px font-bold'>{title}</h2>
                <p className='mt-4 font-semibold'>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
