import React from 'react';
import logo from '../assets/logo.png';
import logo2 from '../assets/logo2.png';
import { IoMenu } from 'react-icons/io5';

const Nav = () => {
    return (
        <div className='w-full absolute top-0 left-0 px-[30px] lg:px-[300px]  py-3 lg:py-6 flex justify-between items-center banner-bg'>
            {/* logo div */}
            <div className='flex justify-center items-center gap-10'>
                <img className='hidden lg:block' src={logo} alt="logo" />
                <img className='block lg:hidden' src={logo2} alt="" />

                {/* nav item */}
                    <ul className='lg:flex justify-center items-center gap-10 text-white hidden'>
                        <li>
                            Home
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Portfolio
                        </li>
                        <li>
                            Client
                        </li>
                        <li>
                            Blog
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
            </div>

            {/* button div */}
            <div className='hidden lg:flex'>
                <button className='btn-common '>Book A Table</button>
            </div>
            <button className='lg:hidden block text-white'><IoMenu className=' w-9 h-9'/>
            </button>
        </div>
    );
};

export default Nav;