import React from 'react';
import EmailForm from './EmailForm';
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-8">
                <h1 className='text-left font-black text-6xl text-white shadow-text-white underline decoration-sky-500/30 mb-6'>Let's talk!</h1>
                <div className="flex flex-col mb-4">
                    <div className="flex items-center mb-2">
                        <BiLogoGmail className="text-3xl text-white mr-2" />
                        <a className="text-white" href="mailto:eliethbarquero01@gmail.com" target="_blank" rel="noopener noreferrer">
                            eliethbarquero01@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center mb-2">
                        <FaLinkedin className="text-3xl text-white mr-2" />
                        <a className="text-white" href="https://www.linkedin.com/in/elieth-barquero-2b148126a" target="_blank" rel="noopener noreferrer">
                            Elieth Barquero
                        </a>
                    </div>
                    <div className="flex items-center">
                        <FaWhatsapp className="text-3xl text-white mr-2" />
                        <a className="text-white" href="https://wa.link/and7ho" target="_blank" rel="noopener noreferrer">
                            +506 71902328
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center w-full md:w-1/2 mt-8 md:mt-0">
                <EmailForm />
            </div>
        </div>
    );
};

export default Contact;
