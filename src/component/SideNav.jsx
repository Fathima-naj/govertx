import React from 'react';
import {
  HomeIcon,
  ChartBarIcon,
  UserGroupIcon,
  BriefcaseIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

const navItems = [
  { label: 'Dashboard', icon: <HomeIcon className="w-5 h-5" />, path: '/' },
  { label: 'Analytics', icon: <ChartBarIcon className="w-5 h-5" />, path: '/analytics', active: true },
  { label: 'Connect', icon: <UserGroupIcon className="w-5 h-5" />, path: '/connect' },
  { label: 'Dealroom', icon: <BriefcaseIcon className="w-5 h-5" />, path: '/dealroom' },
  { label: 'Profile', icon: <UserCircleIcon className="w-5 h-5" />, path: '/profile' },
  { label: 'Settings', icon: <Cog6ToothIcon className="w-5 h-5" />, path: '/settings' },
];

import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <aside className="w-64 min-h-screen bg-[#111] text-white p-6 hidden md:block">
      <h1 className="text-xl font-bold mb-10">Vertxlabs, Inc</h1>
      <nav className="space-y-6">
        {navItems.map((item) => (
          <div
            key={item.label}
            onClick={() => handleNavigation(item.path)}
            className={`flex items-center gap-3 text-sm font-medium cursor-pointer transition-colors 
              ${item.active ? 'text-white' : 'text-gray-400 hover:text-white'}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}
