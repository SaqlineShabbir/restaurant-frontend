import React from 'react';
import { useSelector } from 'react-redux';

import { useGetOrdersByUserIdQuery } from '../../features/order/orderApi';
import CartTotal from '../../components/dashboard/CartTotal';
import OrderCard from '../../components/order/OrderCard';
import DescriptionLoader from '../../components/ui/loaders/DescriptionLoader';

const Cart = () => {
    const auth = useSelector((state) => state.auth);
    const userid = auth?.user?._id
    const {
        data: orders,
        isLoading,
        isError,
        refetch
    } = useGetOrdersByUserIdQuery(userid);

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
        content = <div className="lg:w-[870px] rounded-xl shadow-md border">
            <table className="min-w-full bg-white  overflow-hidden  ">
                <thead>
                    <tr className="bg-orange-400 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Product</th>
                        <th className="py-3 px-6 text-left">Unit Price</th>
                        <th className="py-3 px-6 text-left">Quantity</th>
                        <th className="py-3 px-6 text-left">Total</th>
                        <th className="py-3 px-6 text-left">Cancel</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {orders?.data.map((order) => (
                        <OrderCard key={order._id} order={order} refetch={refetch}></OrderCard>
                    ))}
                    {/* <!-- You can replicate the <tr>...</tr> for more rows --> */}
                </tbody>
            </table>
            <CartTotal orders={orders?.data}></CartTotal>

        </div>
    }

    return (
        <div className="grid  grid-cols-1 place-items-center lg:px-[250px] lg:py-[0px]  py-20 gap-5 min-h-[70vh] dark:bg-[#0a0c1c] dark:text-white">
            {/* //menu card */}
            {content}

        </div>
    );
};

export default Cart;
