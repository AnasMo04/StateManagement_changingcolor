import React from 'react';
import {
  Users,
  CreditCard,
  ClipboardList,
  Gavel,
  Wallet,
  FileText,
  Smartphone,
  UserCircle,
  History,
  Settings,
  LayoutDashboard,
  Shield
} from 'lucide-react';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <aside className="w-72 bg-[#1e293b] text-white flex flex-col shrink-0 shadow-2xl z-20">
      <div className="p-8 flex items-center gap-4 border-b border-slate-700/50">
        <div className="bg-emerald-500 p-2.5 rounded-xl shadow-lg shadow-emerald-500/20">
          <Shield size={24} className="text-white" />
        </div>
        <div>
          <h1 className="font-bold text-xl tracking-tight">FLMS</h1>
          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">نظام إدارة العمالة الأجنبية</p>
        </div>
      </div>

      <nav className="flex-1 py-6 overflow-y-auto custom-scrollbar">
        <div className="px-6 mb-4">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">القائمة الرئيسية</p>
        </div>
        <SidebarItem icon={LayoutDashboard} label="لوحة التحكم" active />
        <SidebarItem icon={Users} label="الكفلاء" />
        <SidebarItem icon={Users} label="العمال" />
        <SidebarItem icon={CreditCard} label="البطاقات الذكية" />
        <SidebarItem icon={ClipboardList} label="سجلات التفتيش" />
        <SidebarItem icon={Gavel} label="القضايا القانونية" />
        <SidebarItem icon={Wallet} label="المالية" />
        <SidebarItem icon={FileText} label="المستندات" />
        <SidebarItem icon={Smartphone} label="الأجهزة" />
        <SidebarItem icon={UserCircle} label="المستخدمون" />
        <SidebarItem icon={History} label="سجل المراجعة" />
        <SidebarItem icon={Settings} label="الإعدادات" />
      </nav>
    </aside>
  );
};

export default Sidebar;
