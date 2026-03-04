import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

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
            {filteredNews.length} :Found
        </div>
    );
};

export default CategoryNews;