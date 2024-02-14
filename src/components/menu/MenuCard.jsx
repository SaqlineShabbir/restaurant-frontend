import React from 'react';
import { Link } from 'react-router-dom';

const MenuCard = ({ menu }) => {
  return (
    <Link
      to={{
        pathname: `/menu/${menu._id}`,
        search: `?id=${menu._id}`,
      }}
    >
      <div className="border lg:w-[300px] dark:text-gray-50 overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <img className="lg:h-[200px] lg:w-[300px] object-cover" src={menu.photo} alt={menu.name} />

        <div className="relative  ">
          <span className="absolute top-2 right-2 font-bold bg-yellow-400 text-white px-3 py-1 rounded text-sm">
            ${menu.price}
          </span>
        </div>

        <div className="space-y-4 py-5 px-6 ">
          <p className="text-2xl font-bold dark:text-gray-50 text-gray-800">{menu.name}</p>
          <p className="text-gray-600 dark:text-gray-50 leading-tight">{menu.description.slice(0, 70)}</p>

          <button className="block w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2  hover:opacity-90 transition duration-300 ease-in-out focus:outline-none focus:ring focus:border-indigo-300">
            <span className="flex items-center justify-center">
              Order Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 ml-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </Link>

  );
};

export default MenuCard;
