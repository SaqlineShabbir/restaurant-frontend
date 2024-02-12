import React from 'react';
import { useSelector } from 'react-redux';

const profile = () => {
    const auth = useSelector((state) => state.auth);
    return (
        <div className='flex justify-center flex-col items-center'>
            <p className=' px-5 py-3 text-2xl border-4 border-orange-500 rounded-full font-bold'>{auth?.user?.name?.slice(0, 1)}</p>
            <p> WELCOME TO THE RESTAURANT X DASHBOARD</p>
        </div>
    );
};

export default profile;