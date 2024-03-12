import React from 'react';
import { useDeleteMenuMutation, useGetMenusQuery } from '../../features/menu/menuApi';
import DescriptionLoader from '../../components/ui/loaders/DescriptionLoader';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai'
import { MdEditSquare } from 'react-icons/md'
const ManageMenu = () => {
    // getmenus
    const { data: menus, isLoading, isError } = useGetMenusQuery();

    //decide what to  render
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
    if (!isLoading && !isError && menus?.data.length > 0) {
        content = <p>No Menus found</p>;
    }

    if (!isLoading && !isError && menus?.data?.length > 0) {
        content = menus?.data.map((menu) => (
            <div key={menu?._id} className='border '>
                <div className='group  rounded-md overflow-hidden hover:shadow-lg  border'>
                    <div className=' w-full h-32'>
                        <img
                            src={menu?.photo}
                            alt='service image'
                            layout='fill'
                            objectFit='cover'
                            className=' transition-opacity'
                        />
                        <div className=''>

                        </div>
                    </div>

                </div>
                <div className='p-4 bg-white dark:bg-[#0a0c1c] flex justify-between'>
                    <h3 className='text-xl font-semibold mb-2'>{menu?.name}</h3>
                    <div className='flex space-x-5'>
                        <span className='text-pink-500 text-2xl cursor-pointer'><MdEditSquare /></span>
                        <span className=' text-2xl text-pink-500 cursor-pointer'><AiFillDelete onClick={() => handleDeleteService(menu?._id)} /></span>
                    </div>

                </div>
                {/* {openModal && <EditServiceModal setOpenModal={setOpenModal} service={serviceData} fetchData={fetchData} />} */}
            </div>
        ));
    }
    //delete menu
    const [deleteMenu, { isLoading: loading, isSuccess: success, isError: error }] =
        useDeleteMenuMutation();
    const handleDeleteService = (id) => {
        deleteMenu(id)
    }
    return (
        <div className='min-h-[90vh] lg:px-20 pt-20 px-5 dark:bg-[#0a0c1c] dark:text-white'>
            <div className='grid md:grid-cols-3 grid-col-1 gap-2 '>
                {content}
            </div>
        </div>
    );
};

export default ManageMenu;