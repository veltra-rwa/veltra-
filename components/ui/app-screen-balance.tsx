import React from "react";

export default function AppScreenBalance() {
  return (
    <div className="w-full h-full bg-white flex flex-col p-4">
      {/* Barra de estado */}
      <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-6 h-3 border border-gray-300 rounded-sm flex items-center justify-center">
            <div className="w-4 h-1.5 bg-gray-300 rounded-sm" />
          </div>
          <span>100%</span>
        </div>
      </div>
      {/* Saldo principal */}
      <div className="flex flex-col items-center my-4">
        <span className="text-xs text-gray-500">Available balance</span>
        <span className="text-3xl font-bold text-gray-900 tracking-tight">$12,500</span>
        <div className="flex gap-2 mt-2">
          <button className="px-3 py-1 bg-black text-white rounded-full text-xs font-semibold">Deposit</button>
          <button className="px-3 py-1 bg-gray-200 text-gray-900 rounded-full text-xs font-semibold">Withdraw</button>
        </div>
      </div>
      {/* Lista de movimientos */}
      <div className="flex-1 overflow-y-auto mt-2">
        <div className="flex justify-between items-center text-xs text-gray-500 mb-1">
          <span>Recent activity</span>
          <span className="text-[#E97451] font-semibold cursor-pointer">See all</span>
        </div>
        <ul className="space-y-2">
          <li className="flex justify-between items-center text-sm">
            <span>Investment - Real Estate</span>
            <span className="text-green-500 font-semibold">+$1,000</span>
          </li>
          <li className="flex justify-between items-center text-sm">
            <span>Withdrawal</span>
            <span className="text-red-500 font-semibold">-$200</span>
          </li>
          <li className="flex justify-between items-center text-sm">
            <span>Yield - Bonds</span>
            <span className="text-green-500 font-semibold">+$50</span>
          </li>
        </ul>
      </div>
    </div>
  );
} 