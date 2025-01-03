import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaCartArrowDown } from "react-icons/fa";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(err => console.log(err.message))
  }
  const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/menu'>Our Menu</NavLink></li>
    <li><NavLink to='/order/salads'>Order Food</NavLink></li>
    <li><NavLink to='/secret'>Secret</NavLink></li>
    <li>
      <Link to='/'>
        <button className="btn btn-sm">
          <FaCartArrowDown></FaCartArrowDown>
          <div className="badge text-sm badge-secondary">+0</div>
        </button>
      </Link>
    </li>

    {
      user ? <>
        {/* <span>{user?.displayName}</span> */}
        <li className='font-bold' onClick={handleLogout}><NavLink>Logout</NavLink></li>

      </> : <>
        <li><NavLink to='/login'>Login</NavLink></li>
      </>
    }
  </>
  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default NavBar;