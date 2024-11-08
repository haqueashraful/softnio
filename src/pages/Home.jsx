import React from 'react';
import Banner from '../component/Banner';
import AboutSection from '../component/AboutSection';
import PopularFood from '../component/PopularFood';
import BookTable from '../component/BookTable';
import ReviewSection from '../component/ReviewSection';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <AboutSection />
            <PopularFood />
            <BookTable />
            <ReviewSection />
        </div>
    );
};

export default Home;