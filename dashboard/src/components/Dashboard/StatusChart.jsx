import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { AlertTriangle } from 'lucide-react';

const StatusChart = ({ data }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col">
    <h3 className="font-bold text-slate-800 mb-8 flex items-center gap-2">
      <AlertTriangle size={20} className="text-orange-500" />
      توزيع حالات العمال
    </h3>
    <div className="flex-1 min-h-[320px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={75}
            outerRadius={100}
            paddingAngle={8}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend
            verticalAlign="bottom"
            align="center"
            layout="horizontal"
            iconType="circle"
            iconSize={8}
            formatter={(value) => <span className="text-xs font-bold text-slate-600 mr-2">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
    <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
      <div className="text-center">
        <p className="text-2xl font-bold text-emerald-500">10,400</p>
        <p className="text-[10px] font-bold text-slate-400 uppercase">نشط</p>
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold text-red-500">1,600</p>
        <p className="text-[10px] font-bold text-slate-400 uppercase">هارب</p>
      </div>
    </div>
  </div>
);

export default StatusChart;
