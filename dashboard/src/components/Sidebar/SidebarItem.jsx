import React from 'react';

const SidebarItem = ({ icon: Icon, label, active = false }) => (
  <div className={`flex items-center gap-3 px-6 py-3 cursor-pointer transition-all duration-200 ${active ? 'bg-blue-600/10 border-l-4 border-blue-500 text-blue-400' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}>
    <Icon size={20} />
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export default SidebarItem;
