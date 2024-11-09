import React from 'react';

const BookTable = () => {
    return (
        <div className='main-container book-table-bg text-left'>

            {/* title */}
            <div className='space-y-4 mb-10'>
                <div className='flex gap-2 items-center'>
                    <span className='square'></span>
                    <p className='roboto text-lg lg:text-xl text-[#B52B1D] font-semibold'>Book Now</p>
                </div>
                <h1 className='text-[40px] text-white lg:text-6xl bebass-neue'>Book Your Table</h1>
                <p className='roboto text-white tex\ w-full lg:w-2/5'>
                    Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
                </p>
            </div>


            {/* form */}
            <div className='space-y-6 w-full lg:w-1/2'>
                <div className='flex flex-col lg:flex-row gap-4'>
                <input type="text" placeholder="Your Name" className="w-full lg:w-1/2  " />
                <input type="text" placeholder="Your Email" className="w-full lg:w-1/2 " />
                </div>
                <div className='flex flex-col lg:flex-row gap-4'>
                <input type="date" placeholder="Reservation Date" className="w-full lg:w-1/2 " />
                <input type="number" placeholder="Number of Person" className="w-full lg:w-1/2 " />
                </div>
                <textarea name="" id="" cols="30" rows="7" placeholder="Message" className='w-full' ></textarea>
                <button className='btn-common'>Book Now</button>
            </div>
        </div>
    );
};

export default BookTable;