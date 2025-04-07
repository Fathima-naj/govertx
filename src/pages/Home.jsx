import React from 'react';
import Sidebar from '../component/SideNav';
import TopNav from '../component/TopNav';
export default function Home() {
  return (
    
 <div className="flex flex-col md:flex-row bg-black md:bg-[#0D0D0D] min-h-screen text-white">
      <Sidebar />
      <div className="flex-1 pb-20 md:pb-0">
        <TopNav />
        </div>
        </div>
  );
}
