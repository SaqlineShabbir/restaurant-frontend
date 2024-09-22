import React from "react";
import { Link } from "react-router-dom";

const HomeMenuCard = ({ menu }) => {
  return (
    <Link
      to={{
        pathname: `/menu/${menu._id}`,
        search: `?id=${menu._id}`,
      }}
    >
      <div className="border lg:w-[300px] lg:h-[400px] dark:text-gray-50 overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <img
          className="lg:h-[200px] lg:w-[300px] object-cover"
          src={menu.photo}
          alt={menu.name}
        />

        <div className="relative  ">
          <span className="absolute top-2 right-2 font-bold bg-yellow-400 text-white px-3 py-1 rounded text-sm">
            ${menu.price}
          </span>
        </div>

        <div className="space-y-4 py-5 px-6 ">
          <p className="text-2xl font-bold dark:text-gray-50 text-gray-800">
            {menu.name}
          </p>
          <p className="text-gray-600 dark:text-gray-50 leading-tight">
            {menu.description.slice(0, 58)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HomeMenuCard;
