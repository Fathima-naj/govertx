import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: "Mar 1", visitors: 400, connections: 300 },
  { name: "Mar 5", visitors: 1200, connections: 900 },
  { name: "Mar 10", visitors: 900, connections: 600 },
  { name: "Mar 15", visitors: 700, connections: 500 },
  { name: "Mar 20", visitors: 1600, connections: 1200 },
  { name: "Mar 25", visitors: 800, connections: 700 },
  { name: "Mar 30", visitors: 1400, connections: 1100 },
];

export default function ChartCard() {
  return (
    <div className="bg-[#1A1A1A] p-4 md:p-6 rounded-lg">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div className="flex flex-wrap gap-4 md:gap-8">
          <div>
            <div className="text-2xl md:text-3xl font-bold">13.49K</div>
            <div className="text-green-500 text-xs md:text-sm">+169% (897)</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold">3.49K</div>
            <div className="text-green-500 text-xs md:text-sm">+180% (697)</div>
          </div>
        </div>
      </div>

      <div className="h-[200px] md:h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis 
              dataKey="name" 
              stroke="#666"
              tick={{ fontSize: 12 }}
              interval="preserveStartEnd"
            />
            <YAxis 
              stroke="#666"
              tick={{ fontSize: 12 }}
              width={30}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#111', border: 'none' }}
              itemStyle={{ color: '#fff', fontSize: 12 }}
            />
            <Line 
              type="monotone" 
              dataKey="visitors" 
              stroke="#fff" 
              strokeWidth={2}
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="connections" 
              stroke="#9333EA" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
  