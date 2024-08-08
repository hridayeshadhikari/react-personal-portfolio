import React from "react"
import { Link } from "react-scroll"
import Aos from "aos"
import 'aos/dist/aos.css'
import {useEffect} from 'react'



const links = [
  { name: 'My Skills', path: 'skills' },
  { name: 'My Projects', path: 'projects' },
  { name: 'My Education', path: 'education' },
]


export default function About() {
  useEffect(() => {
    Aos.init({duration:1000})
   }, [])
  return (
    <div>

      <div id="about" className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 data-aos="fade-right" className="text-3xl font-bold tracking-tight text-white sm:text-6xl">About <span className="text-blue-500">Me</span></h2>
            <p data-aos="fade-right" className="mt-8 text-lg leading-8 text-gray-300">
              Hello! I'm Hridayesh Adhikari, a passionate and dedicated full Stack Web Developer with a strong commitment to crafting exceptional digital experiences.
              With a blend of creativity, technical expertise, and a deep understanding of modern
              web technologies, I thrive on transforming ideas into functional
              and user-friendly web applications.
            </p>

            <h3 data-aos="fade-right" className=" mt-3 -mb-3 font-bold tracking-tight text-white sm:text-2xl">Technical Expertise:</h3>
            <p data-aos="fade-right" className="mt-6 text-lg leading-8 text-gray-300">As a Web Developer, I have honed my skills in
              front-end and back-end development, ensuring that the websites and applications
              I create are not only visually appealing but also perform seamlessly under the hood.
              My proficiency includes HTML, CSS, JavaScript, java, JavaScript ,Reactjs and more.
              I am well-versed in building responsive and
              mobile-friendly interfaces to provide users with a consistent experience across various devices.</p>


            <h3 data-aos="fade-right" className=" mt-3 -mb-3 font-bold tracking-tight text-white sm:text-2xl">Continuous Learning:</h3>
            <p data-aos="fade-right" className="mt-6 text-lg leading-8 text-gray-300">Technology is constantly evolving, and I make it a priority to stay up-to-date with
              the latest trends and advancements in web development and API design. This continuous
              learning allows me to leverage cutting-edge tools
              and methodologies to deliver projects that are at the forefront of the industry.</p>

          </div>
          <div data-aos="fade-up" className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none ">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10 ">
              {
                links.map((link) => (
                  <ul className="cursor-pointer" key={link.name}>
                    <Link to={link.path}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={40} className='hover:text-blue-500'>
                      <li>{link.name} <span aria-hidden="true">&rarr;</span></li>


                    </Link>
                  </ul>
                ))}
            </div>

          </div>
        </div>
      </div>



    </div>
  )
}
