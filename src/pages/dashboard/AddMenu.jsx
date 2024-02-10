import React, { useState } from 'react';
import { usePostMenuMutation } from '../../features/menu/menuApi';
import { Toaster } from 'react-hot-toast';
import { IoCloudUploadOutline } from "react-icons/io5";
const AddMenu = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [photo, setPhoto] = useState('')
    const [category, setCategory] = useState('')

    const formData = new FormData()

    formData.append('name', name)
    formData.append('description', description)
    formData.append('price', price)
    formData.append('category', category)
    formData.append('status', "in-stock")
    formData.append('photo', photo)
    formData.append('quantity', 30)

    // add to menu
    const [
        postMenu,
        { data, isLoading: isPostMenuLoading, error: postMenuError },
    ] = usePostMenuMutation();

    const handleSubmit = (e) => {
        e.preventDefault()
        postMenu(formData)
    }
    console.log(data)
    if (postMenuError) {
        console.log(postMenuError)
    }
    return (
        <main>
            <section className='py-10'>
                <div className='flex justify-start items-center'>
                    <form onSubmit={handleSubmit} className='bg-green-50 w-[500px] p-10 shadow space-y-4 rounded'>

                        <div>
                            <label className='text-lg text-slate-500'>Title</label>
                            <input type="text" placeholder='Enter Name'
                                required
                                className='rounded-md py-2 px-2 border w-full'
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <Toaster />
                        <div>
                            <label className='text-lg text-slate-500'>Menu description</label>
                            <textarea

                                name="description"
                                rows="4"
                                className="mt-1 p-2 w-full border rounded focus:outline-none focus:border-black"
                                placeholder="Enter description..."
                                required
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>

                        <div>
                            <label className='text-lg text-slate-500'>Menu Price</label>
                            <input type="number" placeholder='Enter price'
                                className='rounded-md py-2 px-2 border w-full'
                                required
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className='text-lg text-slate-500'>Menu Category</label>
                            <input type="text" placeholder='Enter price'
                                className='rounded-md py-2 px-2 border w-full'
                                required
                                onChange={(e) => setCategory(e.target.value)}
                            />
                        </div>

                        {/* <div>
                            <label className='text-lg text-slate-500'>Category</label>
                            <br /> <select
                                className='px-2 py-2 w-full'
                                value={'Piza'}
                            onChange={(e) => handleChangeStatus((e)=>setStatus)}
                            >
                                <option value="Pending">Pending</option>
                                <option value="Ongoing">Ongoing</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div> */}


                        <label className='text-lg text-slate-500' >Image</label>
                        <div className='flex space-x-2'>
                            <label className="flex justify-center items-center px-4 py-1 bg-orange-100 text-orange-500 rounded-md cursor-pointer border-2 border-orange-300 w-full">
                                <IoCloudUploadOutline className="w-8 h-8 mr-4" />
                                Upload File
                                <input
                                    name='photo'
                                    type="file"
                                    className="hidden"
                                    onChange={(e) => setPhoto(e.target.files[0])}
                                />
                            </label>


                            <button type='submit' className='bg-orange-500   px-6  text-white'>Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default AddMenu;