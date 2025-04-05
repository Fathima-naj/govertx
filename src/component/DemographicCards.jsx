import React from 'react';
import Flag from 'react-world-flags';

const countries = [
  { code: 'IN', name: 'India', percentage: 40, color: 'bg-blue-500', dotColor: 'blue' },
  { code: 'US', name: 'USA', percentage: 25, color: 'bg-orange-500', dotColor: 'orange' },
  { code: 'CA', name: 'CANADA', percentage: 10, color: 'bg-yellow-500', dotColor: 'yellow' },
  { code: 'AE', name: 'UAE', percentage: 7, color: 'bg-green-500', dotColor: 'green' },
];

export default function DemographicsCard() {
  return (
    <div className="bg-[#1A1A1A] p-6 rounded-lg mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Demographics</h2>
        <select className="bg-[#111] text-white px-2 py-1 rounded">
          <option>Visitors</option>
        </select>
      </div>

      <div className="h-48 mb-6 relative bg-[#111] rounded-lg overflow-hidden">
      
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, #333 1px, transparent 1px)`,
            backgroundSize: '10px 10px'
          }}
        />
        
        
        {countries.map((country, index) => (
          <div 
            key={index}
            className={`absolute w-2 h-2 rounded-full animate-pulse`}
            style={{
              backgroundColor: country.dotColor,
              ...getCountryPosition(country.code),
              boxShadow: `0 0 10px ${country.dotColor}`
            }}
          />
        ))}

        <div className="absolute bottom-4 left-4 flex gap-4">
          {countries.map((country, index) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className={`w-2 h-2 rounded-full`}
                style={{ backgroundColor: country.dotColor }}
              />
              <span className="text-xs text-gray-400">{country.code}</span>
            </div>
          ))}
        </div>
      </div>

      
      <div className="space-y-4">
        {countries.map((country) => (
          <div key={country.code} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Flag code={country.code} className="w-6 h-4 rounded" />
              <span className="text-sm font-medium">{country.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 bg-[#111] rounded-full h-1.5">
                <div
                  className={`h-full rounded-full ${country.color}`}
                  style={{ width: `${country.percentage}%` }}
                />
              </div>
              <span className="text-sm font-medium">{country.percentage}%</span>
            </div>
          </div>
        ))}
      </div>

      <button className="text-sm text-gray-400 mt-6 flex items-center hover:text-white">
        View all countries
        <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}


function getCountryPosition(code) {
  const positions = {
    'IN': { top: '40%', left: '70%' },
    'US': { top: '30%', left: '20%' },
    'CA': { top: '20%', left: '15%' },
    'AE': { top: '40%', left: '60%' },
  };
  return positions[code] || { top: '50%', left: '50%' };
}
