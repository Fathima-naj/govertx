import React from 'react';

export default function TopNav() {
  return (
    <header className="w-full px-6 py-4 bg-[#0D0D0D] border-b border-gray-800 flex items-center justify-between">
      
      <div className="flex items-center space-x-3">
        <img 
          src="" 
          alt="Vertxlabs" 
          className="w-8 h-8 rounded-full bg-white p-1"
        />
        <span className="text-white font-semibold">Vertxlabs, Inc</span>
      </div>

      <nav className="hidden md:flex space-x-6">
        <button className="text-white font-medium border-b-2 border-white pb-1">Overview</button>
        <button className="text-gray-400 hover:text-white pb-1">Demographics</button>
      </nav>

      
      <div className="flex items-center space-x-6 text-sm">
        <button className="text-gray-400 hover:text-white">Activity</button>
        <button className="text-gray-400 hover:text-white">Log out</button>
        <button className="text-gray-400 hover:text-white hidden md:block">More</button>
      </div>
    </header>
  );
}
