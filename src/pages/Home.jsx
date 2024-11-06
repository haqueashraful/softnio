import React from 'react';
import Banner from '../component/Banner';
import AboutSection from '../component/AboutSection';
import PopularFood from '../component/PopularFood';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <AboutSection />
            <PopularFood />
        </div>
    );
};

export default Home;