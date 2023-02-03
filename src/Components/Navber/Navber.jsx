import React from 'react';

const Navber = () => {
    return (
        <nav className=' bg-gradient-to-t from-blue-900 to-blue-700 flex items-center justify-between px-40'>
            <div className='flex items-center text-white gap-x-6  justify-center h-20 ml-60'>
                <p className='bg-white text-black px-4 py-2 rounded-full'>
                    Home
                </p>
                <p>
                    About
                </p>
                <p>
                    Products
                </p>
                <p>
                   Careers
                </p>
                <p>
                   Blog
                </p>
                <p>
                   Contact
                </p>
               
            </div>
            <p className='bg-[#f89d22] px-4 py-2 rounded-full text-white'>
                  Enquire Now
                </p>
        </nav>
    );
};

export default Navber;