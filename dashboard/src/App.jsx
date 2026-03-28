import React from 'react';
import {
  Users,
  CreditCard,
  ShieldAlert,
  ClipboardList,
  Gavel,
  Wallet,
  FileText,
  Smartphone,
  UserCircle,
  History,
  Settings,
  Search,
  Bell,
  Moon,
  LayoutDashboard,
  MoreVertical,
  CheckCircle2,
  AlertTriangle,
  Clock,
  XCircle,
  Shield
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const SidebarItem = ({ icon: Icon, label, active = false }) => (
  <div className={`flex items-center gap-3 px-6 py-3 cursor-pointer transition-all duration-200 ${active ? 'bg-blue-600/10 border-l-4 border-blue-500 text-blue-400' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}>
    <Icon size={20} />
    <span className="text-sm font-medium">{label}</span>
  </div>
);

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
    <div className="flex min-h-screen bg-[#f8fafc] text-right" dir="rtl">
      {/* Sidebar */}
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

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-10 shrink-0 sticky top-0 z-10 shadow-sm">
          <div className="flex items-center gap-4 flex-1 max-w-2xl">
            <div className="relative w-full group">
              <input
                type="text"
                placeholder="بحث عن عامل، كفيل، أو رقم بطاقة..."
                className="w-full bg-slate-100 border-2 border-transparent rounded-xl py-2.5 pr-12 pl-4 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-sm outline-none"
              />
              <Search className="absolute right-4 top-3 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <button className="p-2.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-all">
                <Moon size={22} />
              </button>
              <button className="p-2.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-all relative">
                <Bell size={22} />
                <span className="absolute top-2 right-2 w-5 h-5 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white font-bold">3</span>
              </button>
              <button className="p-2.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-all">
                <Smartphone size={22} />
              </button>
            </div>

            <div className="flex items-center gap-4 border-r pr-8 border-slate-200">
              <div className="text-left">
                <p className="text-sm font-bold text-slate-800">أحمد المنصوري</p>
                <p className="text-[11px] text-slate-500 font-medium">مدير النظام</p>
              </div>
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30 ring-4 ring-blue-50">
                أم
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
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

          {/* Stats Grid */}
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
            {/* Inspections Table */}
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

            {/* Worker Status Pie Chart */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col">
              <h3 className="font-bold text-slate-800 mb-8 flex items-center gap-2">
                <AlertTriangle size={20} className="text-orange-500" />
                توزيع حالات العمال
              </h3>
              <div className="flex-1 min-h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      innerRadius={75}
                      outerRadius={100}
                      paddingAngle={8}
                      dataKey="value"
                      stroke="none"
                    >
                      {pieData.map((entry, index) => (
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
          </div>

          {/* Recent Activity */}
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
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
