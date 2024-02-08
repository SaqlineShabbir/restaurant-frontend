import React from 'react';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import img from '../../assets/workers-photo/job-application.jpg';
const Footer = () => {
  return (
    <div className="lg:px-[200px] px-5 dark:bg-[#0a0c1c] dark:text-white">
      <div>
        {/* logo */}
        <div className="py-3">
          <img className="h-10" src={img} alt="" />
        </div>
        <div className="lg:flex justify-between   pb-10">
          <ul className="items-center space-y-8 md:flex md:space-x-6 md:space-y-0 dark:text-white">
            <li className=" hover:text-black-600 focus:border-gray-100 cursor-pointer">
              <Link smooth to="/">
                <p>Welcome to Restaurant</p>
              </Link>
            </li>

            <li className=" hover:text-black-600 cursor-pointer">
              <Link smooth to="/about-us">
                <p>About us</p>
              </Link>
            </li>

            <li className=" hover:text-black-600 cursor-pointer">
              <Link smooth to="/menu">
                <p>Menu</p>
              </Link>
            </li>
            <li className=" hover:text-black-600 cursor-pointer">
              <Link smooth to="/signup">
                <p>Signup</p>
              </Link>
            </li>
          </ul>
          <div className="flex space-x-3  py-3 lg:py-0">
            <BsFacebook height={200} width={300} className="" />
            <BsLinkedin />
          </div>
        </div>
        <hr />
        <div className="py-5 space-y-3">
          <p className="font-bold">Subscribe to our restaurant</p>
          <input
            type="email"
            className="py-2 border px-2 w-[300px]"
            placeholder="email"
          />
          <button className="bg-orange-400 px-5 py-2 rounded-r">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
