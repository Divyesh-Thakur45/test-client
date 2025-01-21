import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto flex items-center justify-between py-2 px-4">
                {/* Left: Logo */}
                <div className="flex items-center space-x-2">
                    <NavLink to={"/"} >
                        <span className="text-blue-600 text-2xl font-bold">Back</span>
                        <span className="text-sm text-gray-500">
                            End{" "}
                            <span className="text-yellow-500 font-semibold">Project</span>
                            <sup className="text-yellow-500">✹</sup>
                        </span>
                    </NavLink>
                </div>

                {/* Middle: Search Bar */}
                <div className="flex-1 mx-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for Products, Brands and More"
                            className="w-full rounded-full border border-gray-300 py-2 pl-10 pr-4 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {/* <AiOutlineSearch className="absolute left-3 top-2.5 text-gray-400 text-xl" /> */}
                    </div>
                </div>

                {/* Right: Icons and Links */}
                <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                        {/* <FiUser className="text-xl text-gray-600" /> */}
                        {/* <span className="text-sm text-gray-700 cursor-pointer hover:text-blue-600">
                            <NavLink to={"/Login"} >Login</NavLink>
                            <div>
                                <NavLink to={"/Signup"} >Signup</NavLink>
                            </div>
                        </span> */}
                        <div className="relative group h-8">
                            {/* <span className="text-sm text-gray-700 cursor-pointer hover:text-blue-600">
                                <NavLink to="/Login">Login</NavLink>
                            </span> */}

                            {/* Dropdown Content */}
                            {/* <div className="absolute left-0 mt-2 w-32 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 z-10">
                                <ul className="text-gray-700">
                                    <li className="px-4 py-2 hover:bg-gray-200">
                                        <NavLink to="/Signup">Signup</NavLink>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        {/* <AiOutlineShoppingCart className="text-xl text-gray-600" /> */}
                        <span className="text-sm text-gray-700 cursor-pointer hover:text-blue-600">

                            <NavLink to={"/Product"} >Product</NavLink>
                        </span>
                    </div>
                    <div className="flex items-center space-x-2">
                        {/* <AiOutlineShoppingCart className="text-xl text-gray-600" /> */}
                        <span className="text-sm text-gray-700 cursor-pointer hover:text-blue-600">
                            <NavLink to={"/Create"} >Create</NavLink>

                        </span>
                    </div>

                    <div className="flex items-center space-x-2">
                        {/* <AiOutlineShoppingCart className="text-xl text-gray-600" /> */}
                        <span className="text-sm text-gray-700 cursor-pointer hover:text-blue-600">
                            <NavLink to={"/Signin"} >Signin</NavLink>

                        </span>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Nav