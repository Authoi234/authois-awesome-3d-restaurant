import React from 'react';
import '../../css/mainStyle.css';
import logo from '../../assets/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import '../../css/mainStyle.css';

const Navbar = () => {
    const menuItems = [
        <li className='hover-link'><a href="#" className="link hover-link">Home</a></li>,
        <li className='hover-link'><a href="#" className="link hover-link">About</a></li>,
        <li className='hover-link'><a href="#" className="link hover-link">Blog</a></li>
    ];

    return (
        <nav className="bg-white shadow-lg py-3">
            <div className="px-4 mx-auto max-w-7xl">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <div className='w-32'>
                            <img className='w-full' src={logo} alt="" />
                        </div>
                        <button className="md:text-3xl font-bold gradient-text sm:text-2xl text-xl" data-text='Authois Resturant'>Authoi's Resturant</button>
                    </div>
                    {/* For mobile */}
                    <div className="md:hidden">
                        <div className='navbar-start'>
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-2xl">
                                    <GiHamburgerMenu></GiHamburgerMenu>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    {menuItems}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* for pc and laptop */}
                    <div className="hiding md:items-center">
                        <div className="flex">
                            {menuItems}
                        </div>
                    </div>
                    <div>
                        <button className='three-d-button'>Signup</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;