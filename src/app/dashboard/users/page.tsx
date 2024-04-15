"use client";
import PageTitle from '@/components/PageTitle'
import { UsersHooks } from '@/hooks/UsersHooks';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { CiEdit } from 'react-icons/ci';
import { FaPlus } from 'react-icons/fa';

const page = () => {
    const { getAllUsers, allUsersData, submitNewUsers, deleteUser } = UsersHooks();
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        laundryName: '',
        ownerName: '',
        phoneNo: '',
        location: '',
    });

    const [isLoading, setIsLoading] = useState(true);
    const token = localStorage.getItem('token');
    const postOrder = async () => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_apiurl}/users`, formData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        });
    }

    useEffect(() => {
        getAllUsers();
    }, []);

    const toggleForm = () => {
        setShowForm(!showForm);
    }

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        console.log("Data:", formData);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        submitNewUsers(formData)
        setShowForm(false)
        setFormData({
            laundryName: '',
            ownerName: '',
            phoneNo: '',
            location: '',
        });
    }

    const handleDelete = async (userId: any) => {
        const idBody = {
          "userId": [
            userId
          ]
        }
        deleteUser(idBody)
      }

    useEffect(() => {
        setIsLoading(false);
    }, [allUsersData]);


    return (
        <div className="min-h-screen w-full flex flex-col">

            <PageTitle title="Users" />


            {showForm && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"></div>
            )}


            <div className="flex-grow overflow-y-auto pl-8 pr-8">
                <div className={`w-full mx-auto bg-white rounded-xl ${allUsersData?.length === 0 ? "items-center" : null}`}>


                    <button
                        className="absolute flex gap-2 items-center top-4 right-4 md:right-20 bg-white hover:bg-blue-400 hover:text-white text-blue-400 font-bold py-2 px-4 rounded border-2 border-blue-400"
                        onClick={toggleForm}
                    >
                        ADD
                        <FaPlus />
                    </button>

                    {showForm && (

                        <form
                            onSubmit={handleSubmit}
                            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl rounded px-10 py-12 mb-4 w-80 md:w-96 lg:w-120 z-50"
                        >
                            <div className="mb-4">
                                <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="laundryName">
                                    Laundry Name
                                </label>
                                <input
                                    className="shadow-sm border rounded w-full py-2 px-4 text-xl text-gray-700"
                                    id="laundryName"
                                    type="text"
                                    placeholder="Laundry Name"
                                    name="laundryName"
                                    value={formData.laundryName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="ownerName">
                                    Owner Name
                                </label>
                                <input
                                    className="shadow-sm border rounded w-full py-2 px-4 text-xl text-gray-700"
                                    id="ownerName"
                                    type="text"
                                    placeholder="Owner Name"
                                    name="ownerName"
                                    value={formData.ownerName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="phoneNo">
                                    Phone No
                                </label>
                                <input
                                    className="shadow-sm border rounded w-full py-2 px-4 text-xl text-gray-700"
                                    id="phoneNo"
                                    type="number"
                                    placeholder="Phone No"
                                    name="phoneNo"
                                    value={formData.phoneNo}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="location">
                                    Location
                                </label>
                                <input
                                    className="shadow-sm border rounded w-full py-2 px-4 text-xl text-gray-700"
                                    id="location"
                                    type="text"
                                    placeholder="Location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="flex items-center justify-between mt-6">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm"
                                    type="submit"
                                >
                                    Submit
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-sm"
                                    type="button"
                                    onClick={() => setShowForm(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    )}

                    {allUsersData?.length !== 0 ?
                        <div className='font-semibold w-full sticky top-0'>
                            <div className='text-[18px] md:text-xs lg:text-sm w-full mb-4 grid grid-cols-8 gap-2 font-semibold rounded-lg bg-blue-400 text-white py-2 px-5 sticky top-0 left-0'>
                                <h1 className="md:text-[8px] xl:text-[20px] text-">Sl.No.</h1>
                                <h1 className="text-left md:text-[8px] xl:text-[20px]">Laundry Name</h1>
                                <h1 className=" text-center md:text-[8px] xl:text-[20px]">Location</h1>
                                <h1 className=" text-center md:text-[8px] xl:text-[20px]">Owner Name</h1>
                                <h1 className="text-center md:text-[8px] xl:text-[20px]">Ph No</h1>
                                <h1 className="text-center col-span-1 md:text-[8px] xl:text-[20px]">Date</h1>
                                <h1 className="text-center col-span-1 md:text-[8px] xl:text-[20px]">Role</h1>
                                <h1 className="text-center col-span-1 md:text-[8px] xl:text-[20px]">Actions</h1>
                            </div>

                            <div className='flex flex-col font-medium overflow-y-auto max-h-[calc(100vh-150px)]'>
                                {allUsersData?.map((userdata: any, index: number) => (
                                    <div key={index} className={` grid grid-cols-8 text-lg md:text-xs lg:text-sm text-black px-4 md:px-5 py-2 odd:bg-[#d9d9d9]/[0.4]`}>
                                        <h1 className="md:text-[8px] xl:text-[15px]">{index + 1}</h1>
                                        <h1 className="text-left md:truncate">{userdata?.laundryName}</h1>
                                        <h1 className=" text-center">{userdata?.location}</h1>
                                        <h1 className=" text-center md:truncate">{userdata?.ownerName}</h1>
                                        <h1 className=" text-center">{userdata?.phoneNo}</h1>
                                        <h1 className="text-center md:truncate">{userdata?.updatedAt}</h1>
                                        <h1 className="text-center md:truncate">{userdata?.role}</h1>
                                        <div className="text-center flex items-center justify-center md:gap-2 xl:gap-10 col-span-1">
                                            <CiEdit className="md:text-xs lg:text-sm xl:text-[25px] text-green-500" />
                                            <AiOutlineDelete className="md:text-xs lg:text-sm xl:text-[25px]  text-red-500" onClick={() => handleDelete(userdata._id)} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div> :
                        <h1 className='text-2xl font-bold text-[#d9d9d9] text-center'>{isLoading ? 'No data available' : 'Loading...'}</h1>
                    }
                </div>
            </div>

        </div>
    )
}

export default page
