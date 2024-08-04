import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-b from-gray-400 via-gray-500 to-gray-700  pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">Find me on any of these platforms.</h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <a href="https://www.linkedin.com/in/hridayesh-adhikari-43414725a/" target="_blank" rel="noopener noreferrer">
                  <motion.button initial={{ y: -6 }}
                    animate={{
                      y: [6, -6],
                      transition: { duration: 1.5, ease: "linear", repeat: Infinity, repeatType: "reverse" }
                    }} className="bg-white hover:scale-110 duration-500 text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0072b1" }} />
                  </motion.button>
                </a>
                <a href="https://github.com/hridayeshadhikari" target="_blank" rel="noopener noreferrer">
                  <motion.button initial={{ y: -6 }}
                    animate={{
                      y: [6, -6],
                      transition: { duration: 2.4, ease: "linear", repeat: Infinity, repeatType: "reverse" }
                    }} className="bg-white hover:scale-110 duration-500 shadow-lg h-10 w-10 items-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <FontAwesomeIcon icon={faGithub} style={{ color: "#211F1F" }} />
                  </motion.button>
                </a>
                <a href="https://twitter.com/Hridayesh012" target="_blank" rel="noopener noreferrer">
                  <motion.button initial={{ y: -6 }}
                    animate={{
                      y: [6, -6],
                      transition: { duration: 2, ease: "linear", repeat: Infinity, repeatType: "reverse" }
                    }} className="bg-white hover:scale-110 duration-500 shadow-lg h-10 w-10 rounded-full outline-none focus:outline-none mr-2" type="button">
                    <FontAwesomeIcon icon={faTwitter} style={{ color: "#00acee" }} />
                  </motion.button>
                </a>
                <a href="https://wa.me/9548821075" target="_blank" rel="noopener noreferrer">
                  <motion.button initial={{ y: -6 }}
                    animate={{
                      y: [6, -6],
                      transition: { duration: 2.2, ease: "linear", repeat: Infinity, repeatType: "reverse" }
                    }} className="bg-white hover:scale-110 duration-500 shadow-lg h-10 w-10 rounded-full outline-none focus:outline-none mr-2" type="button">
                    <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#4FCE5D" }} />
                  </motion.button>
                </a>
                <a href="https://www.facebook.com/harsh.adhikari.5439" target="_blank" rel="noopener noreferrer">
                  <motion.button initial={{ y: -6 }}
                    animate={{
                      y: [6, -6],
                      transition: { duration: 1.9, ease: "linear", repeat: Infinity, repeatType: "reverse" }
                    }} className="bg-white hover:scale-110 duration-500 shadow-lg h-10 w-10 rounded-full outline-none focus:outline-none mr-2" type="button">
                    <FontAwesomeIcon icon={faFacebook} style={{ color: "#3b5998" }} />
                  </motion.button>
                </a>
                <a href="https://www.instagram.com/h__4__harry/" target="_blank" rel="noopener noreferrer">
                  <motion.button initial={{ y: -6 }}
                    animate={{
                      y: [6, -6],
                      transition: { duration: 1.8, ease: "linear", repeat: Infinity, repeatType: "reverse" }
                    }} className="bg-white hover:scale-110 duration-500 shadow-lg h-10 w-10 rounded-full outline-none focus:outline-none mr-2" type="button">
                    <FontAwesomeIcon icon={faInstagram} style={{ color: "#E4405F" }} />
                  </motion.button>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                  <ul className="list-unstyled">
                    <li>
                      <Link to='/#' className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm cursor-pointer" onClick={() => { document.getElementById('about').scrollIntoView({ behavior: 'smooth' }) }}>About Me</Link>
                    </li>
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://byte-verse.s3.amazonaws.com/pages/index.html">Blog</a>
                    </li>
                    <li>
                      <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/hridayeshadhikari">Github</a>
                    </li>
                    <li>
                      <Link to='/#' className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm cursor-pointer" onClick={() => { document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }}>Contact me</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                <span id="get-current-year">Portfolio by Hridayesh Adhikari</span>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
