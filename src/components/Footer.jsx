import React from 'react';
import logo from '../assets/Study.jpg'
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className='w-full flex flex-col justify-around border-4 items-center gap-3 px-5 p-3  bg-cyan-950'>
                <div className='flex justify-center items-center w-full gap-64 px-5  p-3 pb-0 bg-cyan-950'>
                    <img src={logo} alt="logo" className='h-44 w-44' />
                    <div className='w-1/2 h-3/4 gap-5 flex flex-col pl-4 pb-0 '>
                        <h2 className='text-white text-4xl'>Title</h2>
                        <div className='flex flex-row w-1/2 pb-0'>
                            <div className='border-r text-white list-none flex flex-col gap-3 p-3 pr-14 pl-4'>
                                <h3 className='text-2xl mb-3'>About</h3>
                                <li><a href="Mission">Mission</a></li>
                                <li><a href="Mission">Vision</a></li>
                                <li><a href="Mission">Team</a></li>
                            </div>
                            <div className='border-r text-white list-none flex flex-col gap-3 p-3 pr-14 pl-10'>
                                <h3 className='text-2xl mb-3'>Support</h3>
                                <li><a href="Mission">Contact</a></li>
                                <li><a href="Mission">FAQs</a></li>

                            </div>
                            <div className='text-white list-none flex flex-col gap-3 p-3 pr-14 pl-10'>
                                <h3 className='text-2xl mb-3'>Social</h3>
                                <li className="flex items-center gap-2">
                                    <FaInstagram />
                                    <a href="Mission">Instagram</a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaLinkedin />
                                    <a href="Mission">LinkedIn</a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaYoutube />
                                    <a href="Mission">YouTube</a>
                                </li>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='border-t border-white w-full  text-white flex justify-between '>
                    <span>copyright © Title</span>
                    <span>All rights reserved</span>
                </div>
            </div>
        </>
    )
}

export default Footer;