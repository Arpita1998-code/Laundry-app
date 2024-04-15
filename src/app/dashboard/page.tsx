'use client';
import PageTitle from "@/components/PageTitle";
import BarChart from "@/components/BarChart";
import { MdRemoveRedEye } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { useEffect, useState } from "react";
import DashboardCard from "@/components/DashboardCard";
import SalesCard, { SalesProps } from "@/components/SalesCard";
import { FaShoppingBag } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { CardContent } from "@/components/Card";
import PieChart from "@/components/PieChart";


const cardData = [
  {
    icon: <MdRemoveRedEye />,
    label: "Total Views",
    amount: "308.402",
    discription: "Start from 1 March 2024"
  },
  {
    icon: <FaShoppingBag />,
    label: "Total Products",
    amount: "10.820",
    discription: "+ Add New Product"
  },
  {
    icon: <HiUsers />,
    label: "Total Customers",
    amount: "8.425",
    discription: "new user noted every day"
  },
  {
    icon: <FaCartShopping />,
    label: "Total Sales",
    amount: "1.028.623",
    discription: "Start from 1 March 2024"
  }
];

const userSalesData: SalesProps[] = [
  {
    no: "01",
    productName: "News Mobile App UI KIT",
    status: "Active",
    sold: "10",
    view: "320"
  },
  {
    no: "02",
    productName: "News Mobile App UI KIT",
    status: "Active",
    sold: "10",
    view: "320"
  },
  {
    no: "03",
    productName: "News Mobile App UI KIT",
    status: "Active",
    sold: "10",
    view: "320"
  },
  {
    no: "04",
    productName: "News Mobile App UI KIT",
    status: "Active",
    sold: "10",
    view: "320"
  },
  {
    no: "05",
    productName: "News Mobile App UI KIT",
    status: "Active",
    sold: "10",
    view: "320"
  }
];


export default function Page() {

  const [fixHydrationError, setFixHydrationError] = useState(false)
  useEffect(() => {
    setFixHydrationError(true)
  }, [])

  return (
    <>
      <div className="flex flex-col w-full min-h-screen bg-gray-200">

        <PageTitle title="Dashboard" />
        <div className="w-full py-4 px-7 overflow-auto">


          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cardData?.map((data: any, index: number) => (
              <div key={index}>
                <DashboardCard
                  topIcons={data?.icon}
                  titleText={data?.label}
                  data={data?.amount}
                  discriptionData={data?.discription} />
              </div>
            ))}

          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="mt-4 py-10 px-10 rounded-xl shadow-xl bg-white">
              <h1 className="text-blue-900 text-[18px] font-bold mt-[-15px]">Chart</h1>
              <PieChart />
            </div>


            <div className="mt-4 py-10 px-10 rounded-xl shadow-xl bg-white relative">
              <h1 className="absolute top-[-155px] left-[32px] mt-[70px] text-blue-900 text-[18px] font-bold sm:px-1 sm:py-[90px]">Views & Sales</h1>
              <div className="absolute top-[-45px] left-[32px] flex w-[15px] h-[15px] bg-blue-400 sm:top-10 sm:left-[50px]"></div>
              <div className="absolute top-[-50px] left-[55px] text-blue-800 font-semibold sm:top-9 sm:left-[69px]">Total Views</div>
              <div className="absolute top-[-45px] left-[166px] flex w-[15px] h-[15px] bg-orange-600 sm:top-[65px] sm:left-[50px]"></div>
              <div className="absolute top-[-50px] left-[190px] text-blue-800 font-semibold sm:top-[60px] sm:left-[69px]">Total Sales</div>
              <div className="mr-10 ml-[-50px] sm:px-[15px] sm:py-[25px] sm:mt-10">
              <BarChart />
              </div>
            </div>

            {/* <div className="mt-4 py-10 px-10 rounded-xl shadow-xl bg-white relative">
              <h1>Empty</h1>
            </div> */}

          </div>

          <div className="mt-6 py-10 px-10 rounded-xl shadow-xl bg-white">
            <h1 className="text-blue-900 text-[18px] font-bold px-2 py-0">Update</h1>
            <div className="mt-10">
              <div className="grid grid-cols-12 mb-2 p-3 space-x-4 rounded-lg bg-blue-500">
                <h1 className="font-bold text-white text-[18px] col-span-1 text-left">No</h1>
                <h1 className="font-bold text-white text-[18px] col-span-4 text-center">Product Name</h1>
                <h1 className="font-bold text-white text-[18px] col-span-3 text-center">Status</h1>
                <h1 className="font-bold text-white text-[18px] col-span-2 text-center">Sold</h1>
                <h1 className="font-bold text-white text-[18px] col-span-2 text-right">View</h1>
              </div>
              {userSalesData.map((d) => (
                <SalesCard
                  no={d.no}
                  productName={d.productName}
                  status={d.status}
                  sold={d.sold}
                  view={d.view}
                />
              ))}
            </div>
          </div>

        </div >
      </div >
    </>
  );
}
