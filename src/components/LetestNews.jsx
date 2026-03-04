import React from 'react';
import Marquee from 'react-fast-marquee';

const LetestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Letest</p>
            <Marquee className='flex gap-5' pauseOnHover={true} speed={60}>
            <p className='font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, dicta!</p>
            <p className='font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, dicta!</p>
            <p className='font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, dicta!</p>
            </Marquee>
        </div>
    );
};

export default LetestNews;