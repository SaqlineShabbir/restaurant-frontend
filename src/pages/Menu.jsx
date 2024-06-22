import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MenuCard from "../components/menu/MenuCard";
import DescriptionLoader from "../components/ui/loaders/DescriptionLoader";
import { useGetMenusQuery } from "../features/menu/menuApi";

const Menu = () => {
  const auth = useSelector((state) => state.auth);
  const { data: menus, isLoading, isError } = useGetMenusQuery();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (menus?.data) {
      const allCategories = [
        "All",
        ...new Set(menus.data.map((menu) => menu.category)),
      ];
      setCategories(allCategories);
    }
  }, [menus]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredMenus =
    selectedCategory === "All"
      ? menus?.data
      : menus?.data.filter((menu) => menu.category === selectedCategory);

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
  } else if (!isLoading && !isError && menus?.data.length === 0) {
    content = <p>No Menus found</p>;
  } else if (!isLoading && !isError && filteredMenus?.length > 0) {
    content = filteredMenus.map((menu) => (
      <MenuCard key={menu._id} menu={menu} />
    ));
  }

  return (
    <div className="menu-main py-20 dark:bg-[#0a0c1c]">
      <div className="w-full">
        <div className="flex lg:space-x-10 space-x-3 justify-center">
          {categories.map((category) => (
            <p
              key={category}
              className={`bg-orange-500 py-1 px-5 rounded text-white cursor-pointer ${
                selectedCategory === category ? "active:ring-1" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </p>
          ))}
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 place-items-center lg:px-[250px] lg:py-[100px] py-20 gap-5">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Menu;
