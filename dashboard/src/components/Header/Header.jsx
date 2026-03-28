import React from 'react';
import { Search, Moon, Bell, Smartphone } from 'lucide-react';

const Header = ({ username = "أحمد المنصوري", role = "مدير النظام" }) => {
  return (
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
            <p className="text-sm font-bold text-slate-800">{username}</p>
            <p className="text-[11px] text-slate-500 font-medium">{role}</p>
          </div>
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30 ring-4 ring-blue-50">
            {username.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
