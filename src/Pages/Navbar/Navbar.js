import React from 'react';
import '../../css/mainStyle.css';
import logo from '../../assets/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const menuItems = [
        <a href="/" className="text-black font-medium text-lg hover:scale-105 mx-2">Home</a>,
        <a href="/" className="text-black font-medium text-lg hover:scale-105 mx-2">About</a>,
        <a href="/" className="text-black font-medium text-lg hover:scale-105 mx-2">Blog</a>
    ]
    return (
        <nav className="bg-white shadow-lg py-3">
            <div className="px-4 mx-auto max-w-7xl">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <div className='w-32'>
                            <img className='w-full' src={logo} alt="" />
                        </div>
                        <button className="text-2xl font-bold gradient-text" data-text='Authois Resturant'>Authoi's Resturant</button>
                    </div>
                    {/* For mobile */}
                    <div className="navbar-start md:hidden">
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
                    {/* for pc and laptop */}
                    <div className="md:flex md:items-center">
                        {menuItems}
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