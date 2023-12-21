import React from 'react';
import { useSelector } from 'react-redux';
import OrderCard from '../components/order/OrderCard';
import DescriptionLoader from '../components/ui/loaders/DescriptionLoader';
import { useGetOrdersByUserIdQuery } from '../features/order/orderApi';

const Cart = () => {
  const auth = useSelector((state) => state.auth);

  const {
    data: orders,
    isLoading,
    isError,
  } = useGetOrdersByUserIdQuery(auth?.user?._id);

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
  if (!isLoading && !isError && orders?.data?.length === 0) {
    content = <p>Your Cart is Empty</p>;
  }

  if (!isLoading && !isError && orders?.data?.length > 0) {
    content = orders?.data.map((order) => (
      <OrderCard key={order._id} order={order}></OrderCard>
    ));
  }

  return (
    <div className="grid  grid-cols-1 place-items-center lg:px-[250px] lg:py-[100px]  py-20 gap-5">
      {/* //menu card */}
      {content}
    </div>
  );
};

export default Cart;
