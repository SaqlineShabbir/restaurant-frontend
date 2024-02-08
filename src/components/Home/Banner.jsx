import React from 'react';
import img from '../../assets/logo/unn.JPG'
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div style={{backgroundImage: `url(${img})`,backgroundBlendMode:'hard-light' }}  className="bg-blend-darken relative h-96 md:h-[80vh] overflow-hidden bg-cover bg-center">
      {/* Background Image */}
      <div
        className="absolute inset-0  opacity-50"
        style={{ zIndex: '-1' }}
      ></div>
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center ">
        <div className="text-center ">
          <h1 className="text-4xl font-extrabold mb-2 stroke-black  bg-white">Welcome to Restaurant X</h1>
          <p className="text-lg mb-4 stroke-black bg-white">
            Indulge in a culinary journey of exquisite flavors and delightful experiences.
          </p>
          <p className="text-sm mb-4 stroke-cyan-700 bg-white px-2">
            Our chefs craft each dish with precision, using the finest ingredients to create a memorable dining experience.
          </p>
          <Link to='/menu'><button className="bg-orange-500 hover:bg-orange-400 py-2 px-4 rounded-full">
            Explore Our Menu
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;