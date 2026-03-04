import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoriesPromise=fetch('/categories.json').then(res=>res.json())
const Categories = () => {
    //console.log(categories);
    const categories=use(categoriesPromise);
    //console.log(categories);
    return (
        <div>
            <h2 className='font-bold'>All Categories: ({categories.length})</h2>
            <div className='grid grid-cols-1 mt-5'>
                {
                    categories.map(categories=><NavLink to={`/category/${categories.id}`}
                     className={"btn bg-base-100 border-0 hover:bg-base-200"} 
                     key={categories.id}>{categories.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;