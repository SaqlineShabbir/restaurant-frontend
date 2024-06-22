import React, { useEffect, useState } from "react";
import closeImg from "../../assets/svg/close-icon.png";
import {
  useGetMenuByIdQuery,
  useUpdateMenuMutation,
} from "../../features/menu/menuApi";

const EditMenuModal = ({ setOpenModal, menuId }) => {
  const {
    data: menu,
    isLoading,
    isError,
    refetch,
  } = useGetMenuByIdQuery(menuId);
  const [updateMenu] = useUpdateMenuMutation();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    photo: "",
  });

  useEffect(() => {
    if (menu?.data) {
      setFormData({
        name: menu.data.name,
        description: menu.data.description,
        category: menu.data.category,
        price: menu.data.price,
        photo: menu.data.photo,
      });
    }
  }, [menu]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateMenu({ id: menuId, ...formData }).unwrap();
      refetch();
      setOpenModal(false);
    } catch (error) {
      console.error("Failed to update menu:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading menu data</div>;
  }

  return (
    <div
      id="close"
      onClick={(e) => {
        if (e.target.id === "close") {
          setOpenModal(false);
        }
      }}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-50 w-full h-full"
      style={{ marginLeft: 0 }}
    >
      <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <img
          src={closeImg}
          className="w-5 cursor-pointer"
          onClick={() => setOpenModal(false)}
          alt="Close"
        />

        <h1 className="text-center text-3xl text-gray-700 mb-5">Edit Menu</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
              placeholder="Name"
            />
          </div>

          <div>
            <label htmlFor="description" className="sr-only">
              Description
            </label>
            <input
              id="description"
              name="description"
              type="text"
              value={formData.description}
              onChange={handleChange}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
              placeholder="Description"
            />
          </div>

          <div>
            <label htmlFor="category" className="sr-only">
              Category
            </label>
            <input
              id="category"
              name="category"
              type="text"
              value={formData.category}
              onChange={handleChange}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
              placeholder="Category"
            />
          </div>

          <div>
            <label htmlFor="price" className="sr-only">
              Price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
              placeholder="Price"
            />
          </div>

          <div>
            <label htmlFor="photo" className="sr-only">
              Photo URL
            </label>
            <input
              id="photo"
              name="photo"
              type="text"
              value={formData.photo}
              onChange={handleChange}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
              placeholder="Photo URL"
            />
          </div>

          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              type="submit"
              className="bg-slate-400 text-white active:bg-indigo-300 px-3 py-1"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMenuModal;
