import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos"
import 'aos/dist/aos.css'
import {useEffect} from 'react'

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Aos.init({duration:1000})
   }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_u1vgtes', 'template_n5ae45p', formRef.current, 'FTPn_09fzvW8r-85m')
      .then((result) => {
        console.log(result.text);
        toast.success("Message Sent Successfully", { autoClose: 2000 });
        formRef.current.reset();
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error("Failed to Send Message");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <section id="contact" className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 ... py-20 lg:py-[120px] overflow-hidden relative z-10">
        <div className="max-w-[1100px] mx-auto">
          <span className="block mb-12 text-center font-bold text-gray-200 text-4xl lg:text-[36px] xl:text-[40px]">
            Contact <span className="text-blue-500">Me</span>
          </span>
          <div className="flex flex-wrap -mx-4 lg:justify-between">
            <div data-aos="fade-up-right" className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-1 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <svg
                      width={24}
                      height={30}
                      viewBox="0 0 24 24"
                      className="fill-current"
                      color="white"
                    ><FontAwesomeIcon icon={faLocationDot} />
                    </svg>
                  </div>
                  <div className="w-full">

                    <h4 className="mb-1 text-xl font-bold text-gray-200">Address</h4>
                    <p className="text-base text-gray-300">
                      Pataliya, Kotabagh India
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-1 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <svg
                      width={24}
                      height={26}
                      viewBox="0 0 24 26"
                      className="fill-current"
                      color="white"
                    ><FontAwesomeIcon icon={faPhone} />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-gray-200">Phone No.</h4>
                    <p className="text-base text-gray-300">
                      (+91)9548821075
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-1 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <svg
                      width={30}
                      height={25}
                      viewBox="0 0 28 19"
                      className="fill-current"
                      color="white"
                    ><FontAwesomeIcon icon={faEnvelope} />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-gray-200">Email Address</h4>
                    <p className="text-base text-gray-300">
                      hridayeshadhikari@gmail.com
                    </p>
                  </div>
                </div>
          </div>
          <div data-aos="fade-up-left" className=" w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="relative md:p-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 ... rounded-lg shadow-lg p-10">
              <form ref={formRef} onSubmit={handleSubmit}>
                <ContactInputBox
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                />
                <ContactInputBox
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                />
                <ContactInputBox
                  type="text"
                  name="user_subject"
                  placeholder="Your Subject"
                />
                <ContactTextArea
                  row="4"
                  placeholder="Your Message"
                  name="message"
                  defaultValue=""
                />
                <div>
                  <button
                    type="submit"
                    className={`w-full p-2 text-white transition border rounded border-primary bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 ... hover:bg-opacity-90 ${loading ? 'opacity-50 pointer-events-none' : ''}`}
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                  <ToastContainer className="mt-5"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section >
    </>
  );
}

export default Contact;

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  return (
    <div className="mb-6">
      <textarea
        rows={row}
        placeholder={placeholder}
        name={name}
        className="border-[f0f0f0] w-full resize-none rounded border py-3 px-[14px] text-base text-gray-300 outline-none focus:border-primary focus-visible:shadow-none bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 ..."
        defaultValue={defaultValue}
      />
    </div>
  );
};

const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <div className="mb-6">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-gray-200 outline-none focus:border-primary focus-visible:shadow-none bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 ..."
      />
    </div>
  );
};
