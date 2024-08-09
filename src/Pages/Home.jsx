
import React from "react";


import profileimg from '../Assets/p1.png'
import Header from "../components/Header";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../components/Footer";
import { Link } from "react-scroll";
import Aos from "aos"
import 'aos/dist/aos.css'
import {useEffect} from 'react'

export default function Home() {

  

  const downloadPdf = () => {

    const pdfUrl = 'resume.pdf';

    const anchor = document.createElement("a");
    anchor.href = pdfUrl;
    anchor.download = "resume.pdf";
    anchor.style.display = "none";

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  useEffect(() => {
   Aos.init({duration:1000})
  }, [])
  

  return (

    <div className="font-Grey Qo">
      <Header />
      <div id="home" className=" bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 ">
        <div className="relative isolate px-6 pt-14 lg:px-8 shadow-md">



          <div className="mx-auto md:max-w-4xl lg:py-16 md:py-2 grid md:grid-cols-2 gap-10">

            <div>
              
              <h1 
              data-aos="fade-right"
                className="text-3xl tracking-tight text-gray-200 sm:text-5xl mt-5 text-start">
                Hello Everyone <span className="emoji">👋</span><br></br>I Am Hridayesh Adhikari
                <p className="pt-4 text-[22px] md:text-[25px] leading-[1.2] text-start ">
                  I build responsive, high-performance web applications with React on the front end and
                   Spring Boot on the back end. My focus is on creating clean, 
                   efficient, and scalable solutions that enhance user experiences and meet business needs.</p>
              </h1>

              <div data-aos="fade-up" className="mt-8 flex gap-x-6">
                <div className="box cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-gray-100 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <Link
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={40}
                    to='about'>
                    About me
                  </Link>
                </div>
                <button
                 
                  onClick={downloadPdf}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-gray-100 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Download Resume
                </button>
              </div>
            </div>
            <div
            data-aos="fade-left"
            className="flex justify-center items-center">
                <img className=" w-96 h-[50vh] md:h-[75vh] " src={profileimg} alt="profileimg1" />
              </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[hsl(261,78%,65%)] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              
            />
          </div>
        </div>
      </div>
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
