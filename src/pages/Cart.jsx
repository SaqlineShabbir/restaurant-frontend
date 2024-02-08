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
    content = <div className="lg:w-[870px]">
      <table className="min-w-full bg-white rounded-xl shadow-md overflow-hidden">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Product</th>
            <th className="py-3 px-6 text-left">Unit Price</th>
            <th className="py-3 px-6 text-left">Quantity</th>
            <th className="py-3 px-6 text-left">Total</th>
            <th className="py-3 px-6 text-left">Cancel</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {orders?.data.map((order) => (
            <OrderCard key={order._id} order={order}></OrderCard>
          ))}
          {/* <!-- You can replicate the <tr>...</tr> for more rows --> */}
        </tbody>
      </table>
    </div>
  }

  return (
    <div className="grid  grid-cols-1 place-items-center lg:px-[250px] lg:py-[0px]  py-20 gap-5 min-h-[70vh]">
      {/* //menu card */}
      {content}
    </div>
  );
};

export default Cart;
