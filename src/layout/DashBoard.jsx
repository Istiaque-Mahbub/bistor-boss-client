import React from 'react';
import { FaAd, FaHome, FaShoppingBag, FaShoppingCart } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa6';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { SiFacebookgaming } from 'react-icons/si';
import { TbBrandBooking } from 'react-icons/tb';
import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    <li>
                        <NavLink to="/dashboard/userHome">
                        <FaHome></FaHome> User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation">
                        <FaCalendar></FaCalendar> Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart">
                        <FaShoppingCart></FaShoppingCart> My Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                        <FaAd></FaAd> Add Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/bookings">
                        <TbBrandBooking /> My Booking
                        </NavLink>
                    </li>
                    <div className='divider'></div>
                    <li>
                        <NavLink to="/">
                        <FaHome></FaHome> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">
                        <MdOutlineRestaurantMenu /> Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salads">
                        <FaShoppingBag></FaShoppingBag> Shop
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex-1 p-10'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;