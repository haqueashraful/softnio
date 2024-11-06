import React from 'react';
import Banner from '../component/Banner';
import AboutSection from '../component/AboutSection';
import PopularFood from '../component/PopularFood';
import BookTable from '../component/BookTable';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <AboutSection />
            <PopularFood />
            <BookTable />
        </div>
    );
};

export default Home;