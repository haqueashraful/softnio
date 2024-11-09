import React from 'react';
import banner from '../assets/banner.png';
import bannerImage from '../assets/image1.png';
import offer from '../assets/offer.png';
import star from '../assets/vector.png';

const Banner = () => {
    return (
        <div className='main-container lg:!pt-[200px] !pt-[100px] banner-bg flex flex-col lg:flex-row gap-8 lg:gap-0 items-center'>
            {/* banner text */}
            <div className='relative z-10 w-full lg:w-1/2 text-left lg:space-y-8 space-y-4'>
                <h1 className='banner-text-gradient bebass-neue text-5xl lg:text-[120px] text-white lg:w-[850px] lg:h-[252px] lg:leading-[130px]'>
                    Taste the authentic
                    <br />
                    Saudi cuisine
                </h1>
                <p className='roboto text-xl lg:text-2xl text-white'>
                    Among the best Saudi chefs in the world, serving you something beyond flavor. 
                </p>
                <div>
                    <button className='btn-common'>Explore Menu</button>
                </div>
            </div>

            {/* banner image */}
            <div className='relative lg:w-1/2'>
                <img src={bannerImage} alt="Banner Image" className="w-full h-auto object-cover" />
                <img className='absolute top-0 lg:bottom-[99%] right-0 lg:-right-[4%] lg:-top-[5%]' src={star} alt="star" />
                <img className='absolute bottom-0 lg:top-[80%] right-0 lg:-right-[10%]' src={offer} alt="offer" />
                
            </div>
        </div>
    );
};

export default Banner;
