import React from 'react';
import Nav from '../shared/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer';

const Layout = () => {
    return (
        <div className='relative'>
            {/* Nav bar positioned sticky (on top of everything) */}
            <div className='sticky top-0 left-0 w-full z-50'>
                <Nav />
            </div>

            {/* Content area */}
            <div className='z-0'>
                <Outlet />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
