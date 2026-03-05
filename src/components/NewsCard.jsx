// import React from 'react';

// const NewsCard = ({news}) => {
//     return (
//         <div>
//             news card{news.title}
//             <img src={news.image_url} alt="" />
//         </div>
//     );
// };

// export default NewsCard;

import React from "react";
import { FaStar, FaEye, FaShareAlt, FaBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    thumbnail_url,
    details,
    rating,
    total_view,
    author,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="card bg-base-100 shadow-md ">
      
      {/* Header */}
      <div className="flex justify-between items-center bg-base-200 p-4 rounded-t-xl">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex gap-4 text-gray-500 text-lg cursor-pointer">
          <FaBookmark />
          <FaShareAlt />
        </div>
      </div>

      {/* Body */}
      <div className="card-body">
        <h2 className="card-title text-xl font-bold">{title}</h2>

        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-lg my-4 w-full object-cover"
        />

        <p className="text-gray-600">
          {details.length > 250
            ? details.slice(0, 250) + "..."
            : details}
        </p>

        {details.length > 250 && (
          <button className="text-orange-500 font-semibold mt-2">
            Read More
          </button>
        )}

        <div className="divider"></div>

        {/* Footer */}
        <div className="flex justify-between items-center">
          
          {/* Rating */}
          <div className="flex items-center gap-2 text-orange-400">
            {[...Array(rating.number).keys()].map((star) => (
              <FaStar key={star} />
            ))}
            <span className="text-gray-600 ml-2">
              {rating.number}
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewsCard;