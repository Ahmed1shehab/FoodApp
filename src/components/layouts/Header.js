import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Import NavLink
import logo from '../../assets/logo/logoFood.png';

export const Header = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-18" alt="Food Logo" />
        </Link>

        {/* Centered Menu */}
        <div className="hidden md:flex flex-grow justify-center" id="navbar-default">
          <ul className="font-medium flex space-x-8 rtl:space-x-reverse">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'block py-2 px-3 text-gray-900 rounded border-b-2 border-yellow-500' // Active link with yellow underline
                    : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500' // Inactive link
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'block py-2 px-3 text-gray-900 rounded border-b-2 border-yellow-500' // Active link with yellow underline
                    : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500' // Inactive link
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="relative md:block">
          <input
            type="text"
            placeholder="Search..."
            className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
    </nav>
  );
};
