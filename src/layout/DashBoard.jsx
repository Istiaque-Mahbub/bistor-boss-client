import React from 'react';
import { FaAd, FaHome, FaList, FaShoppingBag, FaShoppingCart, FaUser, FaUsers, FaUtensils } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa6';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { TbBrandBooking } from 'react-icons/tb';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';


const DashBoard = () => {
    const [cart] = useCart();
    // get isAdmin value from the database
    const [isAdmin] = useAdmin();
    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    {
                        isAdmin ?<>
                        <li>
                        <NavLink to="/dashboard/adminHome">
                        <FaHome></FaHome> Admin Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addItems">
                        <FaUtensils /> Add Items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageItems">
                        <FaList></FaList> Manage Items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageBookings">
                        <TbBrandBooking /> Manage Bookings
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/users">
                        <FaUsers></FaUsers> All Users
                        </NavLink>
                    </li>
                        </> : <>
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
                        <FaShoppingCart></FaShoppingCart> My Cart ({cart.length})
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                        <FaAd></FaAd> Add Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/paymentHistory">
                        <TbBrandBooking /> Payment History
                        </NavLink>
                    </li>
                        </>
                    }
                    {/* shared nav link */}
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