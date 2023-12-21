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
    <div className="lg:w-[870px]">
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
          <tr className="border-b border-gray-200 hover:bg-gray-100">
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
          {/* <!-- You can replicate the <tr>...</tr> for more rows --> */}
        </tbody>
      </table>
    </div>
  );
};

export default OrderCard;
