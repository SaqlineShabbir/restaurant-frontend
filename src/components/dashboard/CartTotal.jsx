import React from 'react';

const CartTotal = ({ orders }) => {
    //count totalprice
    const totalPrice = orders.reduce((accumulator, currentOrder) => accumulator + currentOrder.total, 0);



    return (
        <div className='flex flex-col shadow-md py-10 px-10 space-y-5'>
            <div className='flex justify-between    w-full'>
                <p>Subtotal ({orders?.length}) Items</p>
                <p className='text-end '>$ {totalPrice}</p>
            </div>
            <div className='flex justify-between'>
                <p>Delevery Cost</p>
                <p>Free</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Total</p>
                <p>$ {totalPrice}</p>
            </div>
            <button type="button" className='bg-orange-400 py-1 font-bold text-gray-700'>Checkout</button>
        </div>
    );
};

export default CartTotal;