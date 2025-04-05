import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

export default function InsightsCard() {
  return (
    <div className="bg-[#1A1A1A] p-4 md:p-6 rounded-lg w-full md:w-auto">
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <h2 className="text-lg md:text-xl font-bold">Insights</h2>
        <select className="bg-[#111] text-white px-2 py-1 rounded text-sm">
          <option>Visitors</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:space-y-6">
        <div className="bg-[#111] md:bg-transparent p-4 md:p-0 rounded-lg">
          <div className="text-xl md:text-2xl font-bold">7.4K</div>
          <div className="text-green-500 text-xs md:text-sm">+1000% (000)</div>
          <div className="text-gray-400 text-xs md:text-sm">Founders</div>
        </div>

        <div className="bg-[#111] md:bg-transparent p-4 md:p-0 rounded-lg">
          <div className="text-xl md:text-2xl font-bold">6.09K</div>
          <div className="text-green-500 text-xs md:text-sm">+1000% (000)</div>
          <div className="text-gray-400 text-xs md:text-sm">Investors</div>
        </div>
      </div>

      <button className="flex items-center justify-center md:justify-start w-full text-sm text-gray-400 mt-4 md:mt-6 hover:text-white">
        View detailed insights
        <ChevronRightIcon className="w-4 h-4 ml-1" />
      </button>
    </div>
  );
}