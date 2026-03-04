import React, { use } from 'react';
const categoriesPromise=fetch('/categories.json').then(res=>res.json())
const Categories = () => {
    //console.log(categories);
    const categories=use(categoriesPromise);
    //console.log(categories);
    return (
        <div>
            <h2 className='font-bold'>All Categories: {categories.length}</h2>
        </div>
    );
};

export default Categories;