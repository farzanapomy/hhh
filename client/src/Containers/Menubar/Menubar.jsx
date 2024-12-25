import React from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { GrLocationPin } from 'react-icons/gr';
import { IoIosArrowDropdown } from 'react-icons/io';
import { TbWorld } from 'react-icons/tb';

const Menubar = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="navbar px-4 md:px-8 lg:px-16">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Dropdown for mobile */}
          <div className="dropdown">
            <button
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-10 mt-3 w-52 p-2 shadow bg-white"
            >
              <li>
                <a href="#">Option 1</a>
              </li>
              <li>
                <a href="#">Option 2</a>
              </li>
              <li>
                <a href="#">Option 3</a>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <a className="btn btn-ghost text-xl">
            <img
              src="https://avatars.mds.yandex.net/get-bunker/994123/b78e4890b454976f74575e3ea79f24a5eeee5fd8/orig"
              alt="Logo"
              className="h-8"
            />
          </a>

          {/* Search Input (Hidden on mobile) */}
          <div className="hidden lg:flex items-center w-full max-w-xs bg-white border border-gray-300 rounded-2xl mr-3">
            <IoSearchSharp className="m-1" size={25} />
            <input
              type="text"
              placeholder="Search in restaurant"
              className="input rounded w-full bg-transparent focus:outline-none px-2 text-sm"
            />
          </div>

          {/* Location Input (Hidden on mobile) */}
          <div className="hidden lg:flex items-center w-full max-w-xs bg-white border border-gray-300 rounded-2xl mr-3">
            <GrLocationPin className="m-1" size={25} />
            <input
              type="text"
              placeholder="Enter location"
              className="input rounded w-full bg-transparent focus:outline-none px-2 text-sm"
            />
            <IoIosArrowDropdown className="m-1" size={25} />
          </div>
        </div>

        {/* Navbar Center (Empty for now) */}
        <div className="navbar-center hidden lg:flex"></div>

        {/* Navbar End */}
        <div className="navbar-end gap-5 text-black">
          {/* Language Selector */}
          <div className="flex items-center text-sm">
            <TbWorld className="mr-1" size={25} />
            <p>English</p>
          </div>

          {/* Login Button */}
          <button className="btn bg-[#5C5A5719] text-black px-6 py-2 border-none">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
