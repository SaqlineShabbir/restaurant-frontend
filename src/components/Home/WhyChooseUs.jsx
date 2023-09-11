import React from 'react';
import phoneImg from '../../assets/svg/mobile-removebg.png';
const WhyChooseUs = () => {
  return (
    <div className="main dark:bg-[#0a0c1c] dark:text-gray-100  lg:px-[200px] py-20">
      <div className="text-center">
        <p className="text-3xl font-bold">Why People Choose Us</p>
        <p>Clients’ Most Popular Choise</p>
      </div>

      <div className="grid lg:grid-cols-3 py-20  px-5 lg:px-0">
        <div className="space-y-5 lg:pt-10">
          <div>
            <div className="flex space-x-5">
              <p className="text-2xl">
                30,000 Restaurants
                <br /> Menus
              </p>
              <div className="bg-gray-200 rounded-full flex items-center   justify-center  text-xl  h-[60px] w-[60px] text-center">
                <p className="dark:text-black font-bold">1</p>
              </div>
            </div>
            <p className="py-3">
              We’re working with many restaurants in your city to put food all
              in one place.
            </p>
          </div>
          {/* //2nd */}
          <div>
            <div className="flex space-x-5">
              <p className="text-2xl">
                Easy Ordering by..
                <br /> Phone
              </p>
              <div className="bg-gray-200 rounded-full flex items-center   justify-center  text-xl  h-[60px] w-[60px] text-center">
                <p className="dark:text-black font-bold">2</p>
              </div>
            </div>
            <p className="py-3">
              This allows you to order quickly and easily. Accessible at any
              time.
            </p>
          </div>
          {/* //3rd */}
          <div>
            <div className="flex space-x-5">
              <p className="text-2xl">
                Free Mobile App
                <br /> Service
              </p>
              <div className="bg-gray-200 rounded-full flex items-center   justify-center  text-xl  h-[60px] w-[60px] text-center">
                <p className="dark:text-black  font-bold">3</p>
              </div>
            </div>
            <p className="py-3">
              We’re working with many restaurants in your city to put food all
              in one place.
            </p>
          </div>
        </div>

        <div>
          <img className="h-[500px] w-[700px]" src={phoneImg} alt="" />
        </div>

        <div className="space-y-5  lg:pt-10">
          <div>
            <div className="flex space-x-5">
              <div className="bg-gray-200 rounded-full flex items-center   justify-center  text-xl  h-[60px] w-[60px] text-center">
                <p className="dark:text-black font-bold">4</p>
              </div>
              <p className="text-2xl">
                Easy Online Ordering
                <br /> system
              </p>
            </div>
            <p className="py-3">
              Once logged in, you can easily navigate around the site to
              complete your order.
            </p>
          </div>
          {/* //2nd */}
          <div>
            <div className="flex space-x-5">
              <div className="bg-gray-200 rounded-full flex items-center   justify-center  text-xl  h-[60px] w-[60px] text-center">
                <p className="dark:text-black font-bold">5</p>
              </div>
              <p className="text-2xl">
                100% positive customer
                <br /> feedbacks
              </p>
            </div>
            <p className="py-3">
              We care about our customers, that is why we get 100% positive
              feedbacks.
            </p>
          </div>
          {/* //3rd */}
          <div>
            <div className="flex space-x-5">
              <div className="bg-gray-200 rounded-full flex items-center   justify-center  text-xl  h-[60px] w-[60px] text-center">
                <p className="dark:text-black font-bold">6</p>
              </div>
              <p className="text-2xl">
                Fast Guaranteed Delivery
                <br /> system
              </p>
            </div>
            <p className="py-3">
              We take responsibility for making sure that order are delivered to
              you safely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
