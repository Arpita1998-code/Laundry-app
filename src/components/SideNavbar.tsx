"use client";
import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function SideNavbar() {
  
  // Initially collapsed for medium-sized screens
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth <= 768); 

  const handelSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // collapsed state
  window.addEventListener("resize", () => {
    setIsCollapsed(window.innerWidth <= 768);
  });

  return (
    <>
      <div className={`bg-white shadow-2xl rounded-xl relative h-screen duration-300 ${isCollapsed ? "w-[70px]" : "w-[300px]"}`}>

        <div className="cursor-pointer absolute right-[-25px] top-2.5 shadow-2xl border-[1px] border-[#e2e2e2]/[0.3] rounded-full bg-white">
          <div onClick={handelSidebar} className=" rounded-full p-2 h-12 w-12 flex justify-center items-center">
            <MdKeyboardArrowRight size={30} />
          </div>
        </div>
        
        <Navbar isCollapsed={isCollapsed} />

      </div>
    </>
  );
}
