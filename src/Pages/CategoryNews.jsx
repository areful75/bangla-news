import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const {id} = useParams();
    const news = useLoaderData();
    const [filteredNews, setFilteredNews] = useState([]);
    //console.log(news);
    //console.log(id);

    useEffect(()=>{

        if(id=="0")
        {
            setFilteredNews(news);
            return;
        }
        else if(id =="1")
        {
            const filteredNews = news.filter((data)=>data.others.is_today_pick==true);
            setFilteredNews(filteredNews);   
        }
       else {
        const filteredNews = news.filter((data)=>data.category_id==id);
        //console.log(filteredNews);
        setFilteredNews(filteredNews);
       }
    },[news,id])
    return (
        <div>
           <h2 className='font-bold mb-5'>Total <span className='text-secondary'>{filteredNews.length}</span> news Found</h2>

           <div className='grid grid-cols-1 gap-5 '>
            {
                filteredNews.map((data)=><NewsCard news={data} key={data.id}></NewsCard>)
            }
        </div>
        </div>
        
    );
};

export default CategoryNews;