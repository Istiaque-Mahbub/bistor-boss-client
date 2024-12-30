import React from 'react';
import MenuItem from '../../shared/MenuItem/MenuItem';
import Cover from '../../shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,coverImage,title}) => {
    return (
       <div className='my-10 space-y-10'>
        {title && <Cover img={coverImage} title={title}></Cover>}
        
         <div className='grid md:grid-cols-2 gap-10 my-10'>
        {
            items.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
        }
    </div>
    <Link className='flex justify-center' to={`/order/${title}`}><button className='btn btn-outline border-0 mt-4 border-b-4'>Order You Favorite Food</button></Link>
       </div>
    );
};

export default MenuCategory;