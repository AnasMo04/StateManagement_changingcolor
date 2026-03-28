import React from 'react';

const StatCard = ({ label, value, subValue, color, icon: Icon }) => (
  <div className={`rounded-xl p-6 text-white ${color} relative overflow-hidden shadow-lg transition-transform hover:scale-[1.02]`}>
    <div className="flex justify-between items-start relative z-10">
      <div>
        <p className="text-sm opacity-90 mb-1">{label}</p>
        <h3 className="text-3xl font-bold">{value}</h3>
        <p className="text-xs opacity-75 mt-2">{subValue}</p>
      </div>
      <div className="bg-white/20 p-2 rounded-lg">
        <Icon size={24} />
      </div>
    </div>
    {/* Decorative background circle */}
    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
  </div>
);

export default StatCard;
