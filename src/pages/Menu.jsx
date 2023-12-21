import React from 'react';
import { useSelector } from 'react-redux';

import MenuCard from '../components/menu/MenuCard';
import DescriptionLoader from '../components/ui/loaders/DescriptionLoader';
import { useGetMenusQuery } from '../features/menu/menuApi';

const Menu = () => {
  //user from redux state
  const auth = useSelector((state) => state.auth);
  //call provided hook from menu api
  const { data: menus, isLoading, isError } = useGetMenusQuery();

  // console.log(auth.user._id);
  // console.log('by id', data);
  // console.log('menudata', menus?.data[0]);
  // decide what to  render
  let content = null;
  if (isLoading) {
    content = (
      <>
        <DescriptionLoader />
        <DescriptionLoader />
        <DescriptionLoader />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <p>There is an error occured</p>;
  }
  if (!isLoading && !isError && menus?.data.length > 0) {
    content = <p>No Menus found</p>;
  }

  if (!isLoading && !isError && menus?.data?.length > 0) {
    content = menus?.data.map((menu) => (
      <MenuCard key={menu._id} menu={menu}></MenuCard>
    ));
  }

  return (
    <div className="menu-main  py-20  dark:bg-[#0a0c1c] ">
      <div>
        <div className="flex space-x-10 justify-center">
          <p className="bg-orange-500 py-3 px-10 rounded   text-white active:ring-1">
            Pizza
          </p>
          <p className="bg-orange-500 py-3 px-10 rounded   text-white active:ring-1">
            Burger
          </p>
          <p className="bg-orange-500 py-3 px-10 rounded   text-white active:ring-1">
            Pasta
          </p>
          <p className="bg-orange-500 py-3 px-10 rounded   text-white active:ring-1">
            Noodles
          </p>
        </div>
        {/* //all menus */}
        <div className="grid lg:grid-cols-3 grid-cols-1 place-items-center lg:px-[250px] lg:py-[100px]  py-20 gap-5">
          {/* //menu card */}
          {content}
        </div>
      </div>
    </div>
  );
};

export default Menu;
