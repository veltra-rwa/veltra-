import React from "react";

export default function AppScreenList() {
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
      {/* Lista de activos */}
      <div className="flex-1 overflow-y-auto mt-2">
        <div className="flex justify-between items-center text-xs text-gray-500 mb-1">
          <span>My Assets</span>
          <span className="text-[#E97451] font-semibold cursor-pointer">Add</span>
        </div>
        <ul className="space-y-2">
          <li className="flex justify-between items-center text-sm bg-gray-50 rounded-lg px-3 py-2">
            <span>Real Estate</span>
            <span className="font-semibold text-gray-900">$5,000</span>
          </li>
          <li className="flex justify-between items-center text-sm bg-gray-50 rounded-lg px-3 py-2">
            <span>Art</span>
            <span className="font-semibold text-gray-900">$2,000</span>
          </li>
          <li className="flex justify-between items-center text-sm bg-gray-50 rounded-lg px-3 py-2">
            <span>Bonds</span>
            <span className="font-semibold text-gray-900">$1,000</span>
          </li>
        </ul>
      </div>
      {/* Botones de acción */}
      <div className="mt-4 flex gap-2 justify-center">
        <button className="px-3 py-1 bg-black text-white rounded-full text-xs font-semibold">Invest</button>
        <button className="px-3 py-1 bg-gray-200 text-gray-900 rounded-full text-xs font-semibold">Withdraw</button>
      </div>
    </div>
  );
} 