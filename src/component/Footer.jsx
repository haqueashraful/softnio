import React from 'react';
import { CgTime } from 'react-icons/cg';
import { FaFacebookSquare, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';
import { FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';
import { FiPhoneCall } from 'react-icons/fi';
import { SlLocationPin } from 'react-icons/sl';

const Footer = () => {
    return (
        <div className='footer-bg'>
            <div className='main-container bg-[#000000CC]'>

                {/* upper div */}
                <div className=' mb-[120px]'>
                    <h1 className='text-white text-center text-[40px] lg:text-6xl bebass-neue mb-12'>We ready to have you the best dining experiences</h1>
                    <div className='flex flex-col lg:flex-row lg:gap-0 gap-6 justify-between items-center '>


                        
                        {/* card 1 */}
                        <div className='flex flex-col items-center justify-between gap-4'>

                            <CgTime  className=' text-[#FEBF00] w-6 h-6'/>

                            <h1 className='text-white uppercase bebass-neue text-2xl'>Opening Hours</h1>

                            <div className='text-[#F7F8F9] roboto'>
                                <p>Monday - Sunday</p>
                                <p>9:00 AM to 11:30 PM</p>
                            </div>
                        </div>


                        {/* card 2 */}
                        <div className='flex flex-col items-center justify-between gap-4'>

                            <FiPhoneCall  className=' text-[#FEBF00] w-6 h-6'/>

                            <h1 className='text-white uppercase bebass-neue text-2xl'>LET'S TALK</h1>

                            <div className='text-[#F7F8F9] roboto'>
                                <p>Phone: 1-800-222-4545</p>
                               
                                <p>Fax: 1-800-222-4545</p>
                            </div>
                        </div>


                        {/* card 3 */}
                        <div className='flex flex-col items-center justify-between gap-4'>

                            <FaRegEnvelope  className=' text-[#FEBF00] w-6 h-6'/>

                            <h1 className='text-white uppercase bebass-neue text-2xl'>Book a Table</h1>

                            <div className='text-[#F7F8F9] roboto'>
                                <p>Email: demo@website.com</p>
                                <p>Support: support@website.com</p>
                            </div>
                        </div>


                        {/* card 4 */}
                        <div className='flex flex-col items-center justify-between gap-4'>

                            <SlLocationPin  className=' text-[#FEBF00] w-6 h-6'/>

                            <h1 className='text-white uppercase bebass-neue text-2xl'>Our Address</h1>

                            <div className='text-[#F7F8F9] roboto'>
                                <p>123 Stree New York City , United <br />States Of America.</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* lower div */}
                <div>
                    <div className='flex justify-center items-center gap-6 mb-6'>

                        {/* logo */}
                        
                        <div className='flex justify-center items-center p-3 rounded-full border-white border'>
                            <FaFacebookSquare className='text-white lg:w-[18px] w-[14px] lg:h-[18px] h-[14px]'/>
                        </div>

                        <div className='flex justify-center items-center p-3 rounded-full border-white border'>
                            <FaSquareXTwitter className='text-white lg:w-[18px] w-[14px] lg:h-[18px] h-[14px]'/>
                        </div>

                        <div className='flex justify-center items-center p-3 rounded-full border-white border'>
                            <FaSquareInstagram className='text-white lg:w-[18px] w-[14px] lg:h-[18px] h-[14px]'/>
                        </div>

                        <div className='flex justify-center items-center p-3 rounded-full border-white border'>
                            <FaLinkedin className='text-white lg:w-[18px] w-[14px] lg:h-[18px] h-[14px]'/>
                        </div>
                    </div>

                    <p className='text-white roboto text-center'>© 2023 <span className='text-[#FEBF00]'>Niomax</span> All Rights Reserved </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;