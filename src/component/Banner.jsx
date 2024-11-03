import React from 'react';
import banner from '../assets/banner.png';
import bannerImage from '../assets/image1.png';
import offer from '../assets/offer.png';
import star from '../assets/vector.png';

const Banner = () => {
    return (
        <div className='main-container !pt-[240px] banner-bg lg:flex items-center'>
            {/* banner text */}
            <div className='relative z-10 lg:w-1/2 text-left space-y-8'>
                <h1 className='banner-text-gradient bebass-neue text-[120px] text-white w-[850px] h-[252px] leading-[130px]'>
                    Taste the authentic
                    <br />
                    Saudi cuisine
                </h1>
                <p className='roboto text-2xl text-white'>
                    Among the best Saudi chefs in the world, serving you something beyond flavor. 
                </p>
                <div>
                    <button className='btn-common'>Explore Menu</button>
                </div>
            </div>

            {/* banner image */}
            <div className='relative lg:w-1/2'>
                <img src={bannerImage} alt="Banner Image" className="w-full h-auto object-cover" />
                <img className='absolute bottom-[99%] -right-[5%]' src={star} alt="star" />
                <img className='absolute top-[80%] -right-[10%]' src={offer} alt="offer" />
                
            </div>
        </div>
    );
};

export default Banner;
