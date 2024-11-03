import React from 'react';
import Banner from '../component/Banner';

const Home = () => {
    return (
        <div className=''>
            <Banner />
                <h1 className='text-red-500 text-7xl'>This is home</h1>
                <p className='text-red-500'>Edit <code>src/App.jsx</code> and save to test HMR</p>
                <button className='btn-common'>Home</button>
        </div>
    );
};

export default Home;