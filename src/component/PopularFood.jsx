import { useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Carousel from 'react-multi-carousel';

// images
import burger from '../assets/burger.png'
import pizza from '../assets/pizza.png'
import shrimp from '../assets/shrimp.png'
import fries from '../assets/fries.png'

const PopularFood = () => {

    const carouselRef = useRef();

    const handleNext = () => {
        carouselRef.current.next();
    };

    const handlePrev = () => {
        carouselRef.current.previous();
    };



    return (
        <div className='main-container popular-food-bg text-left'>
            {/* upper div */}
            <div className='lg:flex justify-between  mb-[30px] lg:mb-[60px]'>
                {/* title */}
                <div>
                    <div className='flex gap-2 items-center  mb-4'>
                        <span className='square'></span>
                        <p className='roboto text-lg lg:text-xl text-[#B52B1D] font-semibold'>Crispy, Every Bite Taste</p>
                    </div>
                    <h1 className='text-[40px] lg:text-6xl bebass-neue'>POPULAR FOOD ITEMS</h1>
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
                            items: 4,
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
                            items: 2,
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
                    <div className='card'>
                        <div className='card-image'>
                            <img src={burger} className=" border-dashed border-2 mx-auto  mb-4" alt="" />

                        </div>
                        <div className='space-y-2'>
                            <h1 className='bebass-neue text-2xl uppercase'>vegetables burger</h1>
                            <p className='roboto '>Barbecue Italian cuisine burger</p>
                        </div>
                    </div>



                    {/* card 2 */}
                    <div className='card'>
                        <div className='card-image'>
                            <img src={pizza} className=" border-dashed border-2 mx-auto  mb-4" alt="" />

                        </div>
                        <div className='space-y-2'>
                            <h1 className='bebass-neue text-2xl uppercase'>Spacial Pizza </h1>
                            <p className='roboto '>Barbecue Italian cuisine pizza</p>
                        </div>
                    </div>


                    {/* card 3 */}
                    <div className='card'>
                        <div className='card-image'>
                            <img src={fries} className=" border-dashed border-2 mx-auto  mb-4" alt="" />

                        </div>
                        <div className='space-y-2'>
                            <h1 className='bebass-neue text-2xl uppercase'>Shrimp</h1>
                            <p className='roboto '>Barbecue Italian cuisine shrimp</p>
                        </div>
                    </div>


                    {/* card 4 */}
                    <div className='card'>
                        <div className='card-image'>
                            <img src={shrimp} className=" border-dashed border-2 mx-auto  mb-4" alt="" />

                        </div>
                        <div className='space-y-2'>
                            <h1 className='bebass-neue text-2xl uppercase'>vegetables burger</h1>
                            <p className='roboto '>Barbecue Italian cuisine burger</p>
                        </div>
                    </div>


                    {/* card 1 */}
                    <div className='card'>
                        <div className='card-image'>
                            <img src={burger} className=" border-dashed border-2 mx-auto  mb-4" alt="" />

                        </div>
                        <div className='space-y-2'>
                            <h1 className='bebass-neue text-2xl uppercase'>vegetables burger</h1>
                            <p className='roboto '>Barbecue Italian cuisine burger</p>
                        </div>
                    </div>



                    {/* card 2 */}
                    <div className='card'>
                        <div className='card-image'>
                            <img src={pizza} className=" border-dashed border-2 mx-auto  mb-4" alt="" />

                        </div>
                        <div className='space-y-2'>
                            <h1 className='bebass-neue text-2xl uppercase'>Spacial Pizza </h1>
                            <p className='roboto '>Barbecue Italian cuisine pizza</p>
                        </div>
                    </div>


                    {/* card 3 */}
                    <div className='card'>
                        <div className='card-image'>
                            <img src={fries} className=" border-dashed border-2 mx-auto  mb-4" alt="" />

                        </div>
                        <div className='space-y-2'>
                            <h1 className='bebass-neue text-2xl uppercase'>Shrimp</h1>
                            <p className='roboto '>Barbecue Italian cuisine shrimp</p>
                        </div>
                    </div>


                    {/* card 4 */}
                    <div className='card'>
                        <div className='card-image'>
                            <img src={shrimp} className=" border-dashed border-2 mx-auto  mb-4" alt="" />

                        </div>
                        <div className='space-y-2'>
                            <h1 className='bebass-neue text-2xl uppercase'>vegetables burger</h1>
                            <p className='roboto '>Barbecue Italian cuisine burger</p>
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

export default PopularFood;