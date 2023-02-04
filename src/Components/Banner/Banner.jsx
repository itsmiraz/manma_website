import React from 'react';
import './Banner.css'
import thumb_1 from '../../assets/thumb_1.png'
import thumb_2 from '../../assets/thumb_2.png'
import thumb_3 from '../../assets/thumb_3.png'
import thumb_4 from '../../assets/thumb_4.png'
import thumb_5 from '../../assets/thumb_5.png'
import thumb_6 from '../../assets/thumb_6.png'
import { Wave } from 'react-animated-text';



const Banner = () => {
    return (
        <section className='banner mt-1 p-20 grid grid-cols-2'>
            <div>
                <div className='font-bold text-4xl pl-5'>
                <Wave
                    text="An Indian"
                    effect="verticalFadeIn"
                    effectChange={5}
                    effectDirection="up"
                    iterations={1}
                   
                    />
                  
                  </div>

                <div className='font-bold text-4xl '>
                <Wave
                    text=" Digital Marketing Agency"
                    effect="verticalFadeIn"
                    effectChange={6}
                    effectDirection="up"
                    iterations={1}
                   
                />
              </div>
                <div className='pl-5 my-4'> 
                <p className='px-4 py-2 font-semibold bg-[#f89d22]  my-2 relative mr-40'><span className='h-full w-1 z-20 bg-white text-white absolute left-0 top-0' ></span> With global edge helping buisnesses grow online</p>

<button className='font-bold bg-white my-2 text-black px-4 py-1 rounded-full'>Discover More</button>
               </div>
            </div>
            <div className='relative'>
                <img src={thumb_6} className='absolute w-10 right-80 top-[-30px] avatar' alt="" />
                <img src={thumb_5} className='absolute w-20 right-48 top-[-50px] avatar' alt="" />
                <img src={thumb_2} className='absolute   w-20 bottom-10 left-16 avatar' alt="" />
                <img src={thumb_3} className='absolute  w-20 bottom-10 left-40  avatarleft' alt="" />
                <img src={thumb_4} className='absolute  product w-20 bottom-20 left-80 ' alt="" />

                <img className='w-60 mx-auto' src={thumb_1} alt="" />
            </div>
        </section>
    );
};

export default Banner;