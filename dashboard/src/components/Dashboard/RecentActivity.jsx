import React from 'react';
import { History, MoreVertical } from 'lucide-react';

const RecentActivity = ({ activities }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
    <div className="p-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
      <h3 className="font-bold text-slate-800 flex items-center gap-2">
        <History size={20} className="text-purple-500" />
        آخر النشاطات
      </h3>
      <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
        <MoreVertical size={20} className="text-slate-400" />
      </button>
    </div>
    <div className="p-8">
      <div className="space-y-8 relative before:absolute before:right-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
        {activities.map((activity, idx) => (
          <div key={idx} className="flex gap-6 items-start relative z-10">
            <div className="w-6 h-6 rounded-full bg-white border-4 border-blue-500 shadow-md flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            </div>
            <div className="flex-1 flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-blue-200 transition-all cursor-default">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  {activity.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{activity.user}</p>
                  <p className="text-xs text-slate-500 font-medium">{activity.action}</p>
                </div>
              </div>
              <span className="text-[11px] font-bold text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-100">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default RecentActivity;
