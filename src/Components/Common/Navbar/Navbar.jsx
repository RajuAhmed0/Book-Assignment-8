import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="">
            <div className="navbar ">
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
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-white"
                        >
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? " font-semibold text-[#23BE0A] text-lg " : "text-lg text-[#131313CC]"
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/booksList"
                                className={({ isActive }) =>
                                    isActive ? " font-semibold text-[#23BE0A] text-lg " : "text-lg text-[#131313CC]"
                                }
                            >
                                Listed Books
                            </NavLink>
                            <NavLink
                                to="/pages"
                                className={({ isActive }) =>
                                    isActive ? " font-semibold text-[#23BE0A] text-lg " : "text-lg text-[#131313CC]"
                                }
                            >
                                Pages to Read
                            </NavLink>
                        </ul>
                    </div>
                    <Link typeof={'/'} className="text-[#131313] md:text-[28px] text-xl font-bold">Book Vibe</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-4">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? ' font-semibold rounded-lg text-lg border-solid border border-[#23BE0A]  p-2 text-[#23BE0A]   '
                                    : "text-lg text-[#131313CC] p-2 "
                            }>
                            Home
                        </NavLink>
                        <NavLink
                            to="/booksList"
                            className={({ isActive }) =>
                                isActive
                                    ? ' font-semibold rounded-lg text-lg border-solid border border-[#23BE0A]  p-2 text-[#23BE0A]  '
                                    : "text-lg text-[#131313CC]  p-2"
                            }>
                            Listed Books
                        </NavLink>
                        <NavLink
                            to="/pages"
                            className={({ isActive }) =>
                                isActive
                                    ? ' font-semibold rounded-lg text-lg border-solid border border-[#23BE0A]  p-2 text-[#23BE0A] '
                                    : "text-lg text-[#131313CC] p-2 "
                            }>

                            Pages to Read
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? ' font-semibold rounded-lg text-lg border-solid border border-[#23BE0A]  p-2 text-[#23BE0A] '
                                    : "text-lg text-[#131313CC] p-2 "
                            }>

                            About Us
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive
                                    ? ' font-semibold rounded-lg text-lg border-solid border border-[#23BE0A]  p-2 text-[#23BE0A] '
                                    : "text-lg text-[#131313CC] p-2 "
                            }>

                            Contact
                        </NavLink>
                    </ul>
                </div>
                <div className="navbar-end md:gap-4 gap-2">
                    <button className=" bg-[#23BE0A] hover:bg-[#22be0ad3] md:text-lg text-base font-semibold md:px-4 px-2 md:py-3 py-1 rounded-lg text-white">Sing in</button>
                    <button className=" bg-[#59C6D2] hover:bg-[#59c6d2de] md:text-lg text-base font-semibold md:px-4 px-2 md:py-3 py-1 rounded-lg text-white ">Sing up</button>

                </div>
            </div>
        </div>
    );
};

export default Navbar;