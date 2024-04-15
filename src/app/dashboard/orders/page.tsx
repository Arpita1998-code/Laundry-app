import PageTitle from '@/components/PageTitle';
import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { CiEdit } from 'react-icons/ci';

// Dummy data
const dummyData = [
  {
    userId: 'user01',
    name: 'John Doe',
    phoneNo: '1234567890',
    status: 'Reject',
    date: '04-04-2024',
    items: ['Item 3']
  },
  {
    userId: 'user02',
    name: 'Jane Smith',
    phoneNo: '9876543210',
    status: 'Completed',
    date: '03-04-2024',
    items: ['Item 5']
  },
  {
    userId: 'user03',
    name: 'John Doe',
    phoneNo: '1234567890',
    status: 'Pending',
    date: '04-04-2024',
    items: ['Item 2']
  },
  {
    userId: 'user04',
    name: 'Jane Smith',
    phoneNo: '9876543210',
    status: 'Reject',
    date: '03-04-2024',
    items: ['Item 4']
  },
  {
    userId: 'user05',
    name: 'John Doe',
    phoneNo: '1234567890',
    status: 'Pending',
    date: '04-04-2024',
    items: ['Item 3']
  },
  {
    userId: 'user06',
    name: 'Jane Smith',
    phoneNo: '9876543210',
    status: 'Reject',
    date: '03-04-2024',
    items: ['Item 5']
  },
  {
    userId: 'user07',
    name: 'John Doe',
    phoneNo: '1234567890',
    status: 'Pending',
    date: '04-04-2024',
    items: ['Item 1']
  },
  {
    userId: 'user08',
    name: 'Jane Smith', 
    phoneNo: '9876543210',
    status: 'Completed',
    date: '03-04-2024',
    items: ['Item 5']
  },
  {
    userId: 'user09',
    name: 'John Doe',
    phoneNo: '1234567890',
    status: 'Reject',
    date: '04-04-2024',
    items: ['Item 2']
  },
  {
    userId: 'user10',
    name: 'Jane Smith',
    phoneNo: '9876543210',
    status: 'Completed',
    date: '03-04-2024',
    items: ['Item 4']
  },
  {
    userId: 'user11',
    name: 'John Doe',
    phoneNo: '1234567890',
    status: 'Pending',
    date: '04-04-2024',
    items: ['Item 3']
  },
  {
    userId: 'user12',
    name: 'Jane Smith',
    phoneNo: '9876543210',
    status: 'Reject',
    date: '03-04-2024',
    items: ['Item 5']
  },
  {
    userId: 'user13',
    name: 'John Doe',
    phoneNo: '1234567890',
    status: 'Pending',
    date: '04-04-2024',
    items: ['Item 1']
  },
  {
    userId: 'user14',
    name: 'Jane Smith',
    phoneNo: '9876543210',
    status: 'Completed',
    date: '03-04-2024',
    items: ['Item 4']
  },
  {
    userId: 'user15',
    name: 'John Doe',
    phoneNo: '1234567890',
    status: 'Reject',
    date: '04-04-2024',
    items: ['Item 3']
  },
  {
    userId: 'user16',
    name: 'Jane Smith',
    phoneNo: '9876543210',
    status: 'Completed',
    date: '03-04-2024',
    items: ['Item 5']
  },
  {
    userId: 'user17',
    name: 'John Doe',
    phoneNo: '1234567890',
    status: 'Pending',
    date: '04-04-2024',
    items: ['Item 2']
  },
  {
    userId: 'user18',
    name: 'Jane Smith',
    phoneNo: '9876543210',
    status: 'Reject',
    date: '03-04-2024',
    items: ['Item 4']
  },
  {
    userId: 'user19',
    name: 'John Doe',
    phoneNo: '1234567890',
    status: 'Pending',
    date: '04-04-2024',
    items: ['Item 3']
  },
  {
    userId: 'user20',
    name: 'Jane Smith',
    phoneNo: '9876543210',
    status: 'Reject',
    date: '03-04-2024',
    items: ['Item 5']
  },
  {
    userId: 'user21',
    name: 'John Doe',
    phoneNo: '1234567890',
    status: 'Pending',
    date: '04-04-2024',
    items: ['Item 1']
  },
  {
    userId: 'user22',
    name: 'Jane Smith',
    phoneNo: '9876543210',
    status: 'Completed',
    date: '03-04-2024',
    items: ['Item 5']
  },
  {
    userId: 'user23',
    name: 'John Doe',
    phoneNo: '1234567890',
    status: 'Reject',
    date: '04-04-2024',
    items: ['Item 2']
  },
  {
    userId: 'user24',
    name: 'Jane Smith',
    phoneNo: '9876543210',
    status: 'Completed',
    date: '03-04-2024',
    items: ['Item 4']
  },
  {
    userId: 'user25',
    name: 'John Doe',
    phoneNo: '1234567890',
    status: 'Pending',
    date: '04-04-2024',
    items: ['Item 3']
  },
  {
    userId: 'user26',
    name: 'Jane Smith',
    phoneNo: '9876543210',
    status: 'Reject',
    date: '03-04-2024',
    items: ['Item 5']
  },
  {
    userId: 'user27',
    name: 'John Doe',
    phoneNo: '1234567890',
    status: 'Pending',
    date: '04-04-2024',
    items: ['Item 1']
  },
  {
    userId: 'user128',
    name: 'Jane Smith',
    phoneNo: '9876543210',
    status: 'Completed',
    date: '03-04-2024',
    items: ['Item 4']
  },
];

// Functional component
const Page = () => {

  const statusColor = (status: any) => {
    if (status === 'Pending') 
    {
      return 'text-yellow-600';
    } 
    if (status === 'Completed') {
      return 'text-green-600';
    } 
    if (status === 'Reject') {
      return 'text-red-600';
    }
    
  };

  return (
    <div className="min-h-screen w-full flex flex-col">
      <PageTitle title="Orders" />

      <div className="flex-grow overflow-y-auto pl-4 pr-4">
        <div className='w-full mx-auto bg-white rounded-xl'>
          <div className='w-full font-semibold sticky top-0'>
            <div className='text-[18px] w-full mb-6 grid grid-cols-7 gap-2 font-semibold rounded-lg bg-blue-400 text-white p-2 px-5'>
              <h1 className="md:text-[8px] xl:text-[20px]">Sl.No.</h1>
              <h1 className="text-left md:text-[8px] xl:text-[20px]">User id</h1>
              <h1 className="text-left md:text-[8px] xl:text-[20px]">Name</h1>
              <h1 className="text-center md:text-[8px] xl:text-[20px]">Ph No</h1>
              <h1 className="text-center md:text-[8px] xl:text-[20px]">Status</h1>
              <h1 className="text-center md:text-[8px] xl:text-[20px]">Date</h1>
              {/* <h1 className="text-center col-span-1 md:text-[8px] xl:text-[20px]">Items</h1> */}
              <h1 className="text-center col-span- md:text-[8px] xl:text-[20px]">Actions</h1>
            </div>

            <div className='flex flex-col font-medium overflow-y-auto max-h-[calc(100vh-150px)]'>
              {dummyData.map((item, index) => (
                <div key={index} className={`w-full grid grid-cols-7 text-[13px] text-black px-2 sm:px-5 py-2 odd:bg-[#d9d9d9]/[0.4]`}>
                  <h1 className="md:text-[8px] xl:text-[15px]">{index + 1}</h1>
                  <h1 className="text-left md:truncate">{item.userId}</h1>
                  <h1 className="text-left col-span-1 md:truncate">{item.name}</h1>
                  <h1 className="text-center md:truncate">{item.phoneNo}</h1>
                  <h1 className={`text-center md:truncate ${statusColor(item.status)}`}>{item.status}</h1>
                  <h1 className="text-center col-span-1 md:truncate">{item.date}</h1>
                  {/* <h1 className="text-center col-span-1 md:truncate">{item.items.join(', ')}</h1> */}
                  <div className="text-center flex items-center justify-center xl:gap-4 md:gap-2 col-span-1">
                    <CiEdit className="text-[20px] md:text-xs lg:text-sm xl:text-[25px] text-green-500"/>
                    <AiOutlineDelete className="text-[20px] md:text-xs lg:text-sm xl:text-[25px] text-red-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
