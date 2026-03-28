import React from 'react';
import {
  Users,
  CreditCard,
  Gavel,
  Wallet,
  History,
  Search,
  Clock
} from 'lucide-react';

import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import StatCard from './components/Dashboard/StatCard';
import InspectionsTable from './components/Dashboard/InspectionsTable';
import StatusChart from './components/Dashboard/StatusChart';
import RecentActivity from './components/Dashboard/RecentActivity';

const Dashboard = () => {
  const pieData = [
    { name: 'نشط', value: 65, color: '#10b981' },
    { name: 'موقوف', value: 15, color: '#f59e0b' },
    { name: 'منتهي', value: 10, color: '#6366f1' },
    { name: 'هارب', value: 10, color: '#ef4444' },
  ];

  const inspections = [
    { worker: 'محمد أحمد علي', officer: 'خالد السعيدي', device: 'NFC-001', time: '2026-02-23 09:15', status: 'نشط', statusColor: 'bg-green-100 text-green-700' },
    { worker: 'عبدالله كمارا', officer: 'سالم العبيدي', device: 'NFC-003', time: '2026-02-23 08:45', status: 'موقوف', statusColor: 'bg-yellow-100 text-yellow-700' },
    { worker: 'راجيش كومار', officer: 'خالد السعيدي', device: 'NFC-001', time: '2026-02-23 08:30', status: 'نشط', statusColor: 'bg-green-100 text-green-700' },
    { worker: 'فيكتور أونيكا', officer: 'أحمد الفقيه', device: 'NFC-005', time: '2026-02-22 16:20', status: 'منتهي', statusColor: 'bg-indigo-100 text-indigo-700' },
    { worker: 'جون مارك', officer: 'سالم العبيدي', device: 'NFC-003', time: '2026-02-22 15:10', status: 'هارب', statusColor: 'bg-red-100 text-red-700' },
  ];

  const activities = [
    { user: 'أحمد المنصوري', action: 'تحديث بيانات عامل', time: 'منذ 5 دقائق', icon: <History size={14} className="text-blue-500" /> },
    { user: 'خالد السعيدي', action: 'فحص ميداني جديد', time: 'منذ 12 دقيقة', icon: <Search size={14} className="text-emerald-500" /> },
    { user: 'سالم العبيدي', action: 'إصدار بطاقة ذكية', time: 'منذ 30 دقيقة', icon: <CreditCard size={14} className="text-purple-500" /> },
    { user: 'أحمد الفقيه', action: 'فتح قضية قانونية', time: 'منذ ساعة', icon: <Gavel size={14} className="text-orange-500" /> },
  ];

  return (
    <div className="flex min-h-screen bg-[#f8fafc] text-right font-sans" dir="rtl">
      <Sidebar />

      <main className="flex-1 flex flex-col min-w-0">
        <Header />

        <div className="p-10 overflow-y-auto">
          <div className="mb-10 flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 tracking-tight">لوحة التحكم</h2>
              <p className="text-slate-500 mt-1 font-medium">نظرة عامة على نظام إدارة العمالة الأجنبية</p>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm text-sm font-medium text-slate-600 flex items-center gap-2">
              <Clock size={16} />
              <span>آخر تحديث: اليوم، 10:30 صباحاً</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <StatCard
              label="إجمالي العمال"
              value="16,000"
              subValue="+125 هذا الشهر"
              color="bg-[#1e293b]"
              icon={Users}
            />
            <StatCard
              label="البطاقات النشطة"
              value="12,450"
              subValue="78% من الإجمالي"
              color="bg-[#0f766e]"
              icon={CreditCard}
            />
            <StatCard
              label="القضايا المفتوحة"
              value="48"
              subValue="+3 هذا الأسبوع"
              color="bg-[#d97706]"
              icon={Gavel}
            />
            <StatCard
              label="مدفوعات معلقة"
              value="54,200"
              subValue="ريال سعودي"
              color="bg-[#be123c]"
              icon={Wallet}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            <InspectionsTable inspections={inspections} />
            <StatusChart data={pieData} />
          </div>

          <RecentActivity activities={activities} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
