import React from 'react';
import aboutImage from '../assets/aboutimage.png'
import marketPlace from '../assets/marketplace.png'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FiPhoneCall, FiShoppingBag } from "react-icons/fi";
import { BsBoxSeam } from 'react-icons/bs';
import { FaAward } from 'react-icons/fa';


const AboutSection = () => {
    return (
        <div className='main-container about-bg'>
            {/* upper div */}
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-20'>
                {/* left div */}
                <div className='w-full relative'>
                    <img src={aboutImage} alt="" />

                    <img className='absolute top-8 left-1' src={marketPlace} alt="" />
                </div>

                {/* right div */}
                <div className='w-full text-left'>
                    <Tabs>
                        <TabList>
                            <Tab>About</Tab>
                            <Tab>Experience</Tab>
                            <Tab>Contact</Tab>
                        </TabList>

                        {/* About content */}
                        <TabPanel className={' '}>
                            <div className='space-y-4 my-8'>
                                <h1 className='text-[40px] lg:text-6xl bebass-neue'>Exceptional culinary experience and delicious food</h1>
                                <p className='roboto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                            </div>

                            <div className='flex gap-0 lg:gap-8 justify-between lg:justify-start items-center'>
                                <button className='btn-common'>About More</button>
                                <div className='flex gap-2 items-center'>
                                    <FiPhoneCall className='text-xl text-[#B52B1D]' />
                                    <p className=' roboto font-bold text-sm lg:text-lg'>+88 3426 739 485</p>
                                </div>
                            </div>
                        </TabPanel>

                        {/* Experiences content */}
                        <TabPanel className={' '}>
                            <div className='space-y-4 my-8'>
                                <h1 className='text-[40px] lg:text-6xl  bebass-neue'>Exceptional culinary experience and delicious food</h1>
                                <p className='roboto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                            </div>

                            <div className='flex flex-col lg:flex-row gap-8 items-center'>
                                <button className='btn-common'>About More</button>
                                <div className='flex gap-2 items-center'>
                                    <FiPhoneCall className='text-xl text-[#B52B1D]' />
                                    <p className=' roboto font-bold text-sm lg:text-lg'>+88 3426 739 485</p>
                                </div>
                            </div>
                        </TabPanel>

                        {/* Contact content */}
                        <TabPanel className={' '}>
                            <div className='space-y-4 my-8'>
                                <h1 className='text-[40px] lg:text-6xl  bebass-neue'>Exceptional culinary experience and delicious food</h1>
                                <p className='roboto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                            </div>

                            <div className='flex flex-col lg:flex-row gap-8 items-center'>
                                <button className='btn-common'>About More</button>
                                <div className='flex gap-2 items-center'>
                                    <FiPhoneCall className='text-xl text-[#B52B1D]' />
                                    <p className=' roboto font-bold text-sm lg:text-lg'>+88 3426 739 485</p>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>

            {/* bottom div */}
            <div className='mt-[50px] lg:mt-[74px] flex flex-col lg:flex-row gap-8 lg:justify-between justify-normal items-center'>

                {/* delivery */}
                <div className='flex items-center gap-4 w-full'>
                    <p className='icon-shadow'>
                        <BsBoxSeam className='!w-8 !h-8 font-extrabold' />
                    </p>

                    <div>
                        <h1 className='text-3xl text-left  bebass-neue uppercase'>fast delivery</h1>
                        <p className='text-xl text-left'>Within 30 minutes</p>
                    </div>
                </div>

                {/* Dining */}
                <div className='flex items-center gap-4 w-full'>
                    <p className='icon-shadow'>
                        <FaAward className='!w-8 !h-8 font-extrabold' />
                    </p>

                    <div>
                        <h1 className='text-3xl text-left  bebass-neue uppercase'>absolute dining</h1>
                        <p className='text-xl  text-left'>Best buffet restaurant</p>
                    </div>
                </div>


                {/* Pickup */}
                <div className='flex items-center gap-4 w-full'>
                    <p className='icon-shadow'>
                        <FiShoppingBag className='!w-8 !h-8 font-extrabold' />
                    </p>

                    <div>
                        <h1 className='text-3xl text-left  bebass-neue uppercase'>pickup delivery</h1>
                        <p className='text-xl text-left'>Grab your food order</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutSection;