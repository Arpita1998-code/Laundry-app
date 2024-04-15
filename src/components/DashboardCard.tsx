import React from 'react'

const DashboardCard = ({ topIcons, titleText, data, discriptionData }: any) => {
    return (
        <div className='w-full'>
            <div className=' bg-white p-6 rounded-xl shadow-xl hover:bg-blue-500 hover:text-white transition-colors duration-300'>

                <h1 className='flex w-[50px] h-[50px] px-3 py-3 bg-green-100 text-2xl text-blue-400'>{topIcons}</h1>

                <h1 className='text-[14px] font-semibold mt-4 text-gray-300 '>{titleText}</h1>

                <h1 className='flex mb-1.5 text-[30px] font-bold text-gray-800 py-1'>{data}</h1>

                <hr className=''></hr>

                <h1 className='divide-y divide-gray-400 text-[14px] font-semibold mt-4 text-yellow-600'>
                    {discriptionData}
                </h1>

            </div>
        </div>
    )
}

export default DashboardCard
