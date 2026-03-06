import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    return (
        <div className='p-8 border border-base-200'>
            <img className='w-[100%]  rounded-sm' src={news.image_url} alt="" />
            <h2 className='text-2xl font-semibold mt-4'>{news.title}</h2>
            <p className='mt-3 text-accent'>{news.details}</p>
            <Link to={`/category/${news.category_id}`}><button className='btn mt-5 bg-secondary text-white'><FaArrowLeft />
                All news in this category</button></Link>
        </div>
    );
};

export default NewsDetailsCard;