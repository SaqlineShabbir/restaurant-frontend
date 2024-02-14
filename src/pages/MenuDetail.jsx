import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Description from '../components/menu/menuDetails/Description';
import Review from '../components/menu/menuDetails/Review';
import DescriptionLoader from '../components/ui/loaders/DescriptionLoader';
import { useGetMenuByIdQuery } from '../features/menu/menuApi';
import { usePostOrderMutation } from '../features/order/orderApi';
import { useSelector } from 'react-redux';


const MenuDetail = () => {
  const [active, setActive] = useState('description');
  const [error, setError] = useState('');
  const [quantity, setQuantity] = useState(1);
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  //get the menu id
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  //call provided hook from menu api
  const { data: menu, isLoading, isError } = useGetMenuByIdQuery(id);


  // add to cart

  const [
    postOrder,
    { data: orderData, isLoading: isPostOrderLoading, error: postOrderError },
  ] = usePostOrderMutation();


  const handleOrder = () => {

    postOrder({
      user: auth?.user?._id,
      name: menu.data.name,
      description: menu.data.description,
      price: menu.data.price,
      total: total,
      photo: menu.data.photo,
      category: menu.data.category,
      quantity: quantity,
      status: menu.data.status,
    });

  };
  // Handle order and error outside the render method
  useEffect(() => {
    if (postOrderError?.data) {
      setError(postOrderError?.data?.message);
    }

    if (postOrderError?.status === 401) {
      navigate('/login');
    }

    if (orderData?.status === 'success') {
      navigate('/dashboard/cart');
      alert('Successfully ordered');
    }
  }, [postOrderError, orderData, navigate]);

  const total = quantity * menu?.data?.price;


  // handle quantity
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  //decide what to render
  let content = null;
  if (isLoading) {
    content = (
      <>
        <div className="px-[200px] py-20 space-y-5">
          <DescriptionLoader />
          <DescriptionLoader />
          <DescriptionLoader />
        </div>
      </>
    );
  }

  if (!isLoading && isError) {
    content = <p>There is an error occured</p>;
  }
  if (!isLoading && !isError) {
    content = <p>No Menus found</p>;
  }

  if (!isLoading && !isError && menu?.data) {
    content = (
      <div className="lg:px-[200px] px-10 py-20 min-h-screen dark:bg-[#0a0c1c] dark:text-gray-50">
        <div className="lg:flex lg:space-x-10  w-[100%]    space-y-5   ">
          <div className="lg:w-[50%]">
            <img src={menu?.data.photo} alt="" />
          </div>
          <div className="lg:w-[50%]">
            <p className="text-orange-500">${menu?.data.price}</p>
            <p className="text-2xl">{menu?.data.name}</p>
            <span>{menu?.data.description}</span>

            <div className="flex space-x-2 py-5  ">
              <span className="pt-2">Quantity:</span>
              <div className="flex space-x-2  dark:text-black">
                <button
                  onClick={handleDecrement}
                  className="px-5 py-1 text-3xl bg-pink-100"
                >
                  -
                </button>
                <button className="px-5 py-1 text-xl bg-pink-100">
                  {quantity}
                </button>
                <button
                  onClick={handleIncrement}
                  className="px-5 py-1 text-xl bg-pink-100"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleOrder}
                className="px-5 py-1 text-xl bg-orange-400 text-white cursor-pointer"
              >
                Add to cart
              </button>
              <p>{error}</p>
            </div>
            <hr />
          </div>
        </div>
        {/* //here */}
        <div className="space-x-10  py-5">
          <button
            className={`text-xl font-bold active:border-b-2 active:border-b-orange-300 ${active === 'description' && ' border-b-2 border-b-orange-400'
              }`}
            onClick={() => setActive('description')}
          >
            Description
          </button>
          <button
            className={`text-xl font-bold active:border-b-2 active:border-b-orange-300 ${active === 'reviews' && ' border-b-2 border-b-orange-400'
              }`}
            onClick={() => setActive('reviews')}
          >
            Reviews
          </button>
        </div>

        <div>
          {active === 'description' && (
            <Description menu={menu.data}></Description>
          )}
          {active === 'reviews' && <Review menu={menu.data}></Review>}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>{content}</div>
    </div>
  );
};

export default MenuDetail;
