import React, { useState } from 'react';
import { useMakeAdminMutation } from '../../features/auth/authApi';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [makeAdmin, { data, isLoading, error: responseError }] = useMakeAdminMutation();


    const handleSubmit = (e) => {
        e.preventDefault()
        makeAdmin({ email: email })
    }
    return (
        <div className='flex justify-center items-center dark:text-white min-h-[80vh] dark:bg-[#0a0c1c]'>
            <form onSubmit={handleSubmit} action="" className=''>
                <input type="email" placeholder='x@gmail.com' className='border px-3 py-2' name="" id="" onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" className='bg-orange-500 px-5 py-2 text-white'>Submit</button>
            </form>
        </div>
    );
};

export default MakeAdmin;