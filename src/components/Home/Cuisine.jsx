import React from "react";
import { Link } from "react-router-dom";
import imgg from "../../assets/food-photos/food2.jpg";
const CuisineSection = () => {
  return (
    <section className="relative bg-white lg:py-[100px] dark:bg-[#0a0c1c] px-5  lg:px-0">
      <div className=" flex flex-col lg:flex-row items-center justify-between">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 lg:w-96 lg:h-96 overflow-hidden rounded-full clip-half-circle-left">
            <img
              src={imgg} // Replace this with the actual image source
              alt="American Cuisine Dish"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0 mx-10 flex flex-col justify-center">
          <h3 className="text-orange-400 text-lg font-bold uppercase mb-2 text-center">
            <span role="img" aria-label="food">
              🍽️
            </span>{" "}
            About Cuisine
          </h3>
          <h1 className="text-4xl lg:text-৪xl font-bold dark:text-white text-gray-900 mb-4 text-center">
            Variety Of Flavours From Italian Cuisine
          </h1>
          <p className="text-gray-600 mb-8 text-center dark:text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at layout the point
            established fact.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-orange-300 hover:bg-orange-700 text-white font-bold py-2 px-6 ">
            <Link to="/menu">
              Order Now <span className="ml-2">➡️</span>
            </Link>
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mt-8 lg:mt-0">
          <div className="relative w-64 h-64 lg:w-96 lg:h-96 overflow-hidden rounded-full clip-half-circle-right">
            <img
              src={imgg} // Replace this with the actual image source
              alt="American Cuisine Dish"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuisineSection;
