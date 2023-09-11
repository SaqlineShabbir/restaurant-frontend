import React from 'react';
import img1 from '../../assets/food-photos/food1.jpg';
import img2 from '../../assets/food-photos/food2.jpg';
import img3 from '../../assets/food-photos/food3.jpg';
import img4 from '../../assets/food-photos/food4.jpg';
import img5 from '../../assets/food-photos/food5.jpeg';
import img6 from '../../assets/food-photos/food6.jpg';
const FoodGallery = () => {
  return (
    <div className="gallery-main mt-20  dark:bg-[#0a0c1c]">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 place-items-center">
        <div>
          <img
            className="lg:h-[400px] h-[200px] lg:w-[400px] w-[350px]"
            src={img3}
            alt=""
          />
        </div>
        <div>
          <img
            className="lg:h-[400px] h-[200px] lg:w-[400px] w-[350px]"
            src={img2}
            alt=""
          />
        </div>
        <div>
          <img
            className="lg:h-[400px] h-[200px] lg:w-[400px]   w-[350px]"
            src={img1}
            alt=""
          />
        </div>
        <div>
          <img
            className="lg:h-[400px] h-[200px] lg:w-[400px] w-[350px]"
            src={img4}
            alt=""
          />
        </div>
        <div>
          <img
            className="lg:h-[400px]  h-[200px] lg:w-[400px] w-[350px]"
            src={img5}
            alt=""
          />
        </div>
        <div>
          <img
            className="lg:h-[400px]  h-[200px] lg:w-[400px] w-[350px]"
            src={img6}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FoodGallery;
