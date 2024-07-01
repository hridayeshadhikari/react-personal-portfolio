
import React from "react";


import profileimg from '../Assets/voterimg.JPG'
import profileimg1 from '../Assets/profileimg1.JPG'
import Header from "../components/Header";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../components/Footer";
import { Link } from "react-scroll";


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

  return (

    <div>
      <Header />
      <div id="home" className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 ">
        <div className="relative isolate px-6 pt-14 lg:px-8 shadow-md">



          <div className="mx-auto -my-10 max-w-2xl py-32 sm:py-24 lg:py-24 md:py-24">

            <div className="text-center">
              <div className="flex justify-center items-center">
                <img className=" w-[38vh] h-[47vh] rounded-lg shadow-2xl shadow-purple-900 " src={profileimg1} alt="profileimg1" />
              </div>
              <h1 className="text-3xl tracking-tight text-gray-200 sm:text-5xl mt-5 ">
                Hello Everyone<span className="emoji">👋</span><br></br>I Am Hridayesh Adhikari
              </h1>
             
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <div

                  className="cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-gray-100 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                ><Link
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
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-gray-100 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Download Resume
                </button>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
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
