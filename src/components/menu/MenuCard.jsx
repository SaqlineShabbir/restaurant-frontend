import React from 'react';
import { Link } from 'react-router-dom';

const MenuCard = ({ menu }) => {
  return (
    <Link
      to={{
        pathname: `/menu/x`,
        search: `?id=${menu._id}`,
      }}
    >
      <div className="border  lg:w-[300px]  dark:text-gray-50">
        <img className="lg:h-[200px]  lg:w-[300px]" src={menu.photo} alt="" />
        <span className="font-bold bg-yellow-300 px-20 py-1 relative mb-20">
          ${menu.price}
        </span>
        <div className="  space-y-3 py-5 px-10">
          <p className="">{menu.name}</p>
          <p>{menu.description.slice(0, 70)}</p>
          <button className="border border-orange-400 px-10 active:ring-indigo-50">
            Order Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default MenuCard;
