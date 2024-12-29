import React from 'react';
import {Helmet} from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import menuImage from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/popularMenu/PopularMenu';
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImage} title='Our Menu'></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImage} title='Our Menu'></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImage} title='Our Menu'></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImage} title='Our Menu'></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;