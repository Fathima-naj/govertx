import React from 'react';
import Sidebar from '../component/SideNav';
import TopNav from '../component/TopNav';
import { LinkedinIcon, TwitterIcon, MailIcon } from 'lucide-react';
import BottomNav from '../component/BottomNav';

export default function Profile() {
  return (
    <div className="flex flex-col md:flex-row bg-black md:bg-[#0D0D0D] min-h-screen text-white">
      <Sidebar />
      <div className="flex-1 pb-20 md:pb-0">
        <TopNav />
        <div className="p-4 md:p-6">
          <div className="flex items-center gap-4 mb-6">
            <button className="text-white font-medium border-b-2 border-white pb-1">Overview</button>
            <button className="text-gray-400 hover:text-white pb-1">Portfolio</button>
            <button className="text-gray-400 hover:text-white pb-1">Experience</button>
            <button className="text-gray-400 hover:text-white pb-1">Media</button>
          </div>

          <h1 className="text-2xl font-bold mb-6">Overview</h1>

          
          <div className="bg-[#111] rounded-lg p-6 mb-8">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-full bg-gray-700"></div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-xl font-bold">Mr A</h2>
                  <span className="text-blue-400">✓</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">Co-Founder & CEO @Vertx</p>
                <div className="flex gap-3">
                  <button className="bg-[#1A1A1A] p-2 rounded-full">
                    <LinkedinIcon size={20} />
                  </button>
                  <button className="bg-[#1A1A1A] p-2 rounded-full">
                    <TwitterIcon size={20} />
                  </button>
                  <button className="bg-[#1A1A1A] p-2 rounded-full">
                    <MailIcon size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
           
            <div className="bg-[#111] rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Founded Companies</h3>
              <div className="text-4xl font-bold mb-6">02</div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-700 rounded"></div>
                    <div>
                      <h4 className="font-medium">Vertx</h4>
                      <p className="text-sm text-gray-400">Founded in 2023 • Fintech</p>
                    </div>
                  </div>
                  <button className="text-sm text-gray-400 hover:text-white">View Profile</button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-700 rounded"></div>
                    <div>
                      <h4 className="font-medium">Company</h4>
                      <p className="text-sm text-gray-400">Detailed information</p>
                    </div>
                  </div>
                  <button className="text-sm text-gray-400 hover:text-white">View Profile</button>
                </div>
              </div>
            </div>

            <div className="bg-[#111] rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Experience</h3>
              <div className="text-4xl font-bold mb-6">03</div>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-700 rounded"></div>
                      <div>
                        <h4 className="font-medium">Company {i}</h4>
                        <p className="text-sm text-gray-400">Position</p>
                      </div>
                    </div>
                    <button className="text-sm text-gray-400 hover:text-white">View Profile</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <BottomNav />
      </div>
    </div>
  );
}