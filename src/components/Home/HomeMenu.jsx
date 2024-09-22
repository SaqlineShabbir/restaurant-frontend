import React from "react";
import { MdRestaurantMenu } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DescriptionLoader from "../../components/ui/loaders/DescriptionLoader";
import { useGetMenusQuery } from "../../features/menu/menuApi";
import HomeMenuCard from "./HomeMenuCard";
const HomeMenu = () => {
  const auth = useSelector((state) => state.auth);
  const { data: menus, isLoading, isError } = useGetMenusQuery();
  console.log(menus);
  let content = null;
  if (isLoading) {
    content = (
      <>
        <DescriptionLoader />
        <DescriptionLoader />
        <DescriptionLoader />
      </>
    );
  } else if (!isLoading && isError) {
    content = <p>There is an error occurred</p>;
  } else if (!isLoading && !isError && menus?.data?.length === 0) {
    content = <p>No Menus found</p>;
  } else if (!isLoading && !isError && menus?.data?.length > 0) {
    content = menus?.data
      ?.slice(0, Math.min(menus?.data?.length || 0, 4))
      .map((menu) => <HomeMenuCard key={menu._id} menu={menu} />);
  }

  return (
    <div className="menu-main pt-20 dark:bg-[#0a0c1c] px-10">
      <div className="w-full">
        <div className="text-center">
          <div className="flex items-center justify-center">
            <MdRestaurantMenu className="mr-2 dark:text-gray-100" />{" "}
            {/* Add margin to the right of the icon */}
            <p className="text-xl font-bold text-orange-500">Our Menus</p>
          </div>
          <p className="text-4xl font-bold dark:text-gray-100">
            Explore and Order Our Menus
          </p>
        </div>
        <div className="lg:py-[100px] py-20">
          <div className="grid lg:grid-cols-4 grid-cols-1 place-items-center lg:px-[200px]  gap-5">
            {content}
          </div>
          <div className="flex flex-col justify-center  items-center py-10">
            <Link to="/menu">
              <button className=" bg-gradient-to-r from-orange-500 to-orange-300 text-white px-6 py-2  hover:opacity-90 transition duration-300 ease-in-out focus:outline-none focus:ring focus:border-indigo-300">
                <span className="flex items-center justify-center">
                  Explore More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMenu;
