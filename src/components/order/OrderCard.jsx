import React from 'react';
import { useDeleteOrderMutation } from '../../features/order/orderApi';

const OrderCard = ({ order }) => {
  const [deleteOrder, { isLoading, isSuccess, isError }] =
    useDeleteOrderMutation();

  // const [
  //   updateOrder,
  //   {
  //     isLoading: isUpdateOrderLoading,
  //     isSuccess: isUpdateOrderSuccess,
  //     isError: isUpdateOrderError,
  //   },
  // ] = useUpdateOrderMutation();

  const handleDeleteOrder = () => {
    deleteOrder(order?._id);
  };

  return (

    <tr key={order?._id} className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-3 px-6 text-left whitespace-nowrap flex items-center">
        <img
          src={order?.photo}
          alt="Product Name"
          className="w-16 h-16 rounded mr-4"
        />
        {order?.name}
      </td>
      <td className="py-3 px-6 text-left">${order?.price}</td>
      <td className="py-3 px-6 text-left">{order?.quantity}</td>
      <td className="py-3 px-6 text-left">${order?.total}</td>
      <td className="py-3 px-6 text-left">
        <button
          onClick={handleDeleteOrder}
          className="border   border-orange-200 px-3 rounded  active:bg-orange-300"
        >
          Cancel
        </button>
      </td>
    </tr>

  );
};

export default OrderCard;
