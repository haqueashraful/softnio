import React, { useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Carousel from 'react-multi-carousel';



// images
import profile from '../assets/profile.png'
import slide1 from '../assets/slide1.jpeg'
import slide2 from '../assets/slide2.png'
import slide3 from '../assets/slide3.jpeg'
import slide4 from '../assets/slide4.jpeg'
import slide5 from '../assets/slide5.jpeg'
import play from '../assets/Play.png'

const ReviewSection = () => {

    const carouselRef = useRef();

    const handleNext = () => {
        carouselRef.current.next();
    };

    const handlePrev = () => {
        carouselRef.current.previous();
    };



    return (
        <div className='main-container review-bg text-left'>
            {/* upper div */}
            <div className='lg:flex justify-between  mb-[30px] lg:mb-[60px]'>
                {/* title */}
                <div>
                    <div className='flex gap-2 items-center mb-4'>
                        <span className='square'></span>
                        <p className='roboto text-lg lg:text-xl text-[#B52B1D] font-semibold'>Crispy, Every Bite Taste</p>
                    </div>
                    <h1 className='text-[40px] lg:text-6xl bebass-neue'>What Some of my Customers Say</h1>
                </div>

                {/* button */}
                <div className=' hidden lg:flex gap-4'>
                    <button onClick={handlePrev} className='btn-icon-shadow'>
                        <IoIosArrowBack className='!w-[18px] !h-[18px] font-bold' />
                    </button>
                    <button onClick={handleNext} className='btn-icon-shadow '>
                        <IoIosArrowForward className='!w-[18px] !h-[18px] font-bold' />
                    </button>
                </div>
            </div>

            {/* lower div */}
            <div>
                <Carousel
                    ref={carouselRef}
                    additionalTransfrom={0}
                    arrows={false}
                    autoPlay
                    autoPlaySpeed={2000}
                    centerMode={false}
                    className=""
                    containerClass="container-padding-bottom"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite={true}
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 2560,
                                min: 1024
                            },
                            items: 1,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 640,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 768
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={true}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >

                    {/* card 1 */}
                    <div className=' !w-full h-full flex flex-col-reverse lg:flex-row'>
                        {/* right div */}
                        <div className='right-div'>

                            <div className=' flex'>
                                <sup className='text-4xl times'>&quot;</sup>
                                <h1 className='text-lg lg:text-xl text-left roboto'> 
                                    You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.
                                    </h1>
                            </div>


                            <div className='flex justify-between items-center profile'>
                                <div>
                                    <h1 className='text-lg bebass-neue'>Khalid Al Dawsry</h1>
                                    <p className='text-sm roboto'>Jeddah, Saudi</p>
                                </div>

                                <img src={profile} alt="" />
                            </div>
                        </div>

                        {/* left div */}
                        <div className='left-div'>
                                <div  className=' w-full h-full relative'>
                                     <img className='w-full h-full object-cover' src={slide1} alt="" />
                                    <button className='left-div-button'></button>
                                </div>
                        </div>
                    </div>


                    {/* card 2 */}
                    <div className=' !w-full h-full flex flex-col-reverse lg:flex-row'>
                        {/* right div */}
                        <div className='right-div'>

                            <div className=' flex'>
                                <sup className='text-4xl times'>&quot;</sup>
                                <h1 className='text-lg lg:text-xl text-left roboto'> 
                                    You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.
                                    </h1>
                            </div>


                            <div className='flex justify-between items-center profile'>
                                <div>
                                    <h1 className='text-lg bebass-neue'>Khalid Al Dawsry</h1>
                                    <p className='text-sm roboto'>Jeddah, Saudi</p>
                                </div>

                                <img src={profile} alt="" />
                            </div>
                        </div>

                        {/* left div */}
                        <div className='left-div'>
                                <div  className=' w-full h-full relative'>
                                    <img className='w-full h-full object-cover' src={slide2} alt="" />
                                    <button className='left-div-button'></button>
                                </div>
                        </div>
                    </div>


                    {/* card 3 */}
                    <div className=' !w-full h-full flex flex-col-reverse lg:flex-row'>
                        {/* right div */}
                        <div className='right-div'>

                            <div className=' flex'>
                                <sup className='text-4xl times'>&quot;</sup>
                                <h1 className='text-lg lg:text-xl text-left roboto'> 
                                    You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.
                                    </h1>
                            </div>


                            <div className='flex justify-between items-center profile'>
                                <div>
                                    <h1 className='text-lg bebass-neue'>Khalid Al Dawsry</h1>
                                    <p className='text-sm roboto'>Jeddah, Saudi</p>
                                </div>

                                <img src={profile} alt="" />
                            </div>
                        </div>

                        {/* left div */}
                        <div className='left-div'>
                                <div  className=' w-full h-full relative'>
                                    <img  className='w-full h-full object-cover' src={slide3} alt="" />
                                    <button className='left-div-button'></button>
                                </div>
                        </div>
                    </div>


                    {/* card 4 */}
                    <div className=' !w-full h-full flex flex-col-reverse lg:flex-row'>
                        {/* right div */}
                        <div className='right-div'>

                            <div className=' flex'>
                                <sup className='text-4xl times'>&quot;</sup>
                                <h1 className='text-lg lg:text-xl text-left roboto'> 
                                    You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.
                                    </h1>
                            </div>


                            <div className='flex justify-between items-center profile'>
                                <div>
                                    <h1 className='text-lg bebass-neue'>Khalid Al Dawsry</h1>
                                    <p className='text-sm roboto'>Jeddah, Saudi</p>
                                </div>

                                <img src={profile} alt="" />
                            </div>
                        </div>

                        {/* left div */}
                        <div className='left-div'>
                                <div  className=' w-full h-full relative'>
                                    <img className='w-full h-full object-cover' src={slide4} alt="" />
                                    <button className='left-div-button'></button>
                                </div>
                        </div>
                    </div>


                    {/* card 5 */}
                    <div className=' !w-full h-full flex flex-col-reverse lg:flex-row'>
                        {/* right div */}
                        <div className='right-div'>

                            <div className=' flex'>
                                <sup className='text-4xl times'>&quot;</sup>
                                <h1 className='text-xl text-left roboto'> 
                                    You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.
                                    </h1>
                            </div>


                            <div className='flex justify-between items-center profile'>
                                <div>
                                    <h1 className='text-lg bebass-neue'>Khalid Al Dawsry</h1>
                                    <p className='text-sm roboto'>Jeddah, Saudi</p>
                                </div>

                                <img src={profile} alt="" />
                            </div>
                        </div>

                        {/* left div */}
                        <div className='left-div'>
                                <div  className=' w-full h-full relative'>
                                    <img className='w-full h-full object-cover' src={slide5} alt="" />
                                    <button className='left-div-button'></button>
                                </div>
                        </div>
                    </div>

                </Carousel>
            </div>

            {/* button */}
            <div className=' lg:hidden flex items-center mt-[30px] justify-center  gap-4'>
                <button onClick={handlePrev} className='btn-icon-shadow'>
                    <IoIosArrowBack className='!w-[18px] !h-[18px] font-bold' />
                </button>
                <button onClick={handleNext} className='btn-icon-shadow '>
                    <IoIosArrowForward className='!w-[18px] !h-[18px] font-bold' />
                </button>
            </div>
        </div>
    );
};

export default ReviewSection;