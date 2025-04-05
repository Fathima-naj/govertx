import React from "react";
import { FiHome, FiBarChart2, FiUser } from "react-icons/fi";

export default function BottomNav() {
  return (
    <div className="bg-[#111] text-white flex justify-around items-center py-2 border-t border-gray-800 md:hidden">
   <button className="flex flex-col items-center text-sm">
        <FiHome className="text-lg" />
        Home
      </button>
      <button className="flex flex-col items-center text-sm text-purple-400 font-semibold">
        <FiBarChart2 className="text-lg" />
        Analytics
      </button>
      <button className="flex flex-col items-center text-sm">
        <FiUser className="text-lg" />
        Profile
      </button>
    </div>
  );
}
