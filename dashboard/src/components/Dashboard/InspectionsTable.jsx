import React from 'react';
import { ClipboardList } from 'lucide-react';

const InspectionsTable = ({ inspections }) => (
  <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
    <div className="p-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
      <h3 className="font-bold text-slate-800 flex items-center gap-2">
        <ClipboardList size={20} className="text-blue-500" />
        آخر عمليات التفتيش
      </h3>
      <button className="text-blue-600 text-sm font-bold hover:text-blue-700 transition-colors bg-blue-50 px-4 py-1.5 rounded-lg">عرض الكل</button>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-right text-sm">
        <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-[11px] tracking-wider">
          <tr>
            <th className="px-8 py-5">العامل</th>
            <th className="px-6 py-5">الضابط</th>
            <th className="px-6 py-5">الجهاز</th>
            <th className="px-6 py-5">الوقت</th>
            <th className="px-6 py-5">النتيجة</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {inspections.map((item, idx) => (
            <tr key={idx} className="hover:bg-blue-50/30 transition-colors group">
              <td className="px-8 py-5">
                <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{item.worker}</div>
              </td>
              <td className="px-6 py-5 text-slate-600 font-medium">{item.officer}</td>
              <td className="px-6 py-5">
                <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded font-mono text-[11px] border border-slate-200">{item.device}</span>
              </td>
              <td className="px-6 py-5 text-slate-500 font-medium">{item.time}</td>
              <td className="px-6 py-5">
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold shadow-sm ${item.statusColor}`}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default InspectionsTable;
