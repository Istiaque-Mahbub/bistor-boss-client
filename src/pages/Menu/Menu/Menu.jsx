import React from 'react';
import {Helmet} from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import menuImage from '../../../assets/menu/banner3.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertImage from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../../assets/menu/pizza-bg.jpg'
import saladImage from '../../../assets/menu/salad-bg.jpg'
import soupImage from '../../../assets/menu/soup-bg.jpg'
const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item=>item.category === 'dessert')
    const soup = menu.filter(item=>item.category === 'soup')
    const salads = menu.filter(item=>item.category === 'salad')
    const pizza = menu.filter(item=>item.category === 'pizza')
    const offered = menu.filter(item=>item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImage} title='Our Menu'></Cover>
            <SectionTitle subHeading="Don't miss" heading="Today's offer"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            <MenuCategory items={desserts} title='desserts' coverImage={dessertImage}></MenuCategory>
          

            <MenuCategory items={pizza} title='pizza' coverImage={pizzaImage}></MenuCategory>

            <MenuCategory items={salads} title='salads' coverImage={saladImage}></MenuCategory>

            <MenuCategory items={soup} title='soup' coverImage={soupImage}></MenuCategory>
        </div>
    );
};

export default Menu;