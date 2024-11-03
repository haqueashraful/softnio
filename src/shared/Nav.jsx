import React from 'react';
import logo from '../assets/logo.png';

const Nav = () => {
    return (
        <div className='w-full absolute top-0 left-0 px-[30px] lg:px-[300px] lg:py-[32px] flex justify-between items-center'>
            {/* logo div */}
            <div className='flex justify-center items-center gap-10'>
                <img src={logo} alt="logo" />

                {/* nav item */}
                    <ul className='flex justify-center items-center gap-10 text-white'>
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
            <div>
                <button className='btn-common'>Book A Table</button>
            </div>
        </div>
    );
};

export default Nav;