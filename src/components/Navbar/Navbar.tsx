import Link from 'next/link';
import React, { useState } from 'react'
import { RiLogoutCircleRFill } from "react-icons/ri";
import { IoBag, IoSettings } from "react-icons/io5";
import { FaUserFriends } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { TbUserFilled } from "react-icons/tb";

//// Menu items name & icons
const menus = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <MdDashboard />,
    variant: "default"
  },
  {
    title: "User",
    href: "/dashboard/users",
    icon: <TbUserFilled />,
    variant: "ghost"
  },
  {
    title: "Customers",
    href: "/dashboard/customers",
    icon: <FaUserFriends />,
    variant: "ghost"
  },
  {
    title: "Orders",
    href: "/dashboard/orders",
    icon: <IoBag />,
    variant: "ghost"
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: <IoSettings />,
    variant: "ghost"
  },
  {
    title: "Logout",
    href: "/",
    onclick: () => {
      localStorage.clear();
    },
    icon: <RiLogoutCircleRFill />,
    variant: "ghost"
  }
]



const Navbar = ({ isCollapsed }: any) => {

  const [isSelect, setIsSelect] = useState("Dashboard");

  const handleLogout = (onClick: any) => {
    onClick();
    setIsSelect("Dashboard"); // Reset selected menu to "Dashboard" after logout
  };

  return (
    <>
      <nav className={`${isCollapsed ? "p-2" : "p-6"} pt-[100px]`}>

        <div className='w-full h-full flex flex-col gap-4'>
          {menus.map((menu: any, index: number) => (


            <div
              key={index}
              onClick={() => {
                if (menu.title === "Logout") {
                  handleLogout(menu.onclick);
                } else {
                  setIsSelect(menu.title);
                }
              }}
        
            >

              <Link onClick={() => setIsSelect(menu?.title)} key={index} href={`${menu.href}`}>
                <div className={`cursor-pointer w-full h-auto flex items-center gap-5 text-[#ab5f5f] 
                    rounded-lg px-3 py-2
                    ${isCollapsed ? "justify-center" : null} 
                    ${isSelect === menu?.title ? "bg-[#12265a]/[0.1] text-[#1b2b8d] font-bold" : "bg-transparent font-semibold"}`}>
                  <div className='text-[25px]'>
                    {menu.icon}
                  </div>
                  {!isCollapsed && <h1 className='text-[14px]'>{menu.title}</h1>}
                </div>
              </Link>
            </div>
          ))}
        </div>

      </nav>
    </>
  )
}

export default Navbar
