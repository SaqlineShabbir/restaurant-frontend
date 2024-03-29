
import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { IoIosApps, IoIosCheckmarkCircle } from 'react-icons/io';
import { FaUserEdit } from "react-icons/fa";
import { MdAdminPanelSettings, MdEditSquare, MdLibraryAdd, MdOutlineManageHistory } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const auth = useSelector((state) => state.auth);


    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={` absolute  h-full left-0 ${isOpen ? 'w-64' : 'w-16'} border bg-white p-4 shadow-lg transition-all duration-300 dark:bg-[#0a0c1c]`}>
            <button className="" onClick={toggleSidebar}>
                {!isOpen && <FaPlus className='text-orange-600' />}
                {isOpen && <FaMinus className='text-orange-600' />}
            </button>

            <div className='flex flex-col space-y-3 justify-start pt-10'>

                <Link to='/dashboard/cart'><div className='flex cursor-pointer  space-x-2 text-orange-500' > <IoIosApps size={30} /> {isOpen && <span className='hover:border-b-2 border-blue-400 cursor-pointer'>Cart</span>}</div></Link>
                <Link to='/dashboard/update-profile'><div className='flex cursor-pointer space-x-2 text-orange-500' > <FaUserEdit size={30} /> {isOpen && <span className='hover:border-b-2 border-blue-400 cursor-pointer'> Update Profile</span>}</div></Link>
                {auth?.user?.role === "admin" && <Link to='/dashboard/add-menu'><div className='flex cursor-pointer space-x-2 text-orange-500' > <MdLibraryAdd size={30} /> {isOpen && <span className='hover:border-b-2 border-blue-400 cursor-pointer'>Post Menu</span>}</div></Link>}
                {auth?.user?.role === "admin" && <Link to='dashboard/manage-menus' className='flex cursor-pointer space-x-2 text-orange-500' > <MdOutlineManageHistory size={30} />  {isOpen && <span className='hover:border-b-2 border-blue-400 cursor-pointer'> Manage Menus</span>}</Link>}
                {auth?.user?.role === "admin" && <Link to='dashboard/make-admin' className='flex cursor-pointer space-x-2 text-orange-500' > <MdAdminPanelSettings size={30} /> {isOpen && <span className='hover:border-b-2 border-blue-400 cursor-pointer'> Make Admin</span>}</Link>}


            </div>
            {/* Your sidebar content goes here */}
        </div>
    );
};

export default SideBar;