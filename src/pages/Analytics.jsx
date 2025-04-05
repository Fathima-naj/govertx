import React from 'react';
import Sidebar from '../component/SideNav';
import ChartCard from '../component/ChartCard';
import DemographicsCard from '../component/DemographicCards';
import TopNav from '../component/TopNav';
import InsightsCard from '../component/InsightsCard';
import BottomNav from '../component/BottomNav';

export default function Analytics() {
  return (
    <div className="flex flex-col md:flex-row bg-black md:bg-[#0D0D0D] min-h-screen text-white">
      <Sidebar />
      <div className="flex-1 pb-20 md:pb-0">
        <TopNav />
        <div className="p-4 md:p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl md:text-2xl font-bold">Overview</h1>
            <div className="flex gap-2 md:gap-4">
              <select className="bg-[#111] text-white text-sm px-2 py-1 rounded">
                <option>Visitors</option>
              </select>
              <select className="bg-[#111] text-white text-sm px-2 py-1 rounded">
                <option>Last 30 days</option>
              </select>
              <button className="bg-[#111] text-white text-sm px-2 py-1 rounded">+ Add</button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
            <div className="flex-1 space-y-4 md:space-y-6">
              <ChartCard />
              <DemographicsCard />
            </div>
            <div className="w-full lg:w-80">
              <InsightsCard />
            </div>
          </div>
        </div>
        <BottomNav />
      </div>
    </div>
  );
}
