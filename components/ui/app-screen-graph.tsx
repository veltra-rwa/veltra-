import React from "react";

export default function AppScreenGraph() {
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
      {/* Gráfico */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <span className="text-xs text-gray-500 mb-1">Portfolio growth</span>
        <svg width="160" height="60" viewBox="0 0 160 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline
            points="0,50 20,40 40,45 60,30 80,35 100,20 120,25 140,10 160,15"
            fill="none"
            stroke="#E97451"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold text-gray-900">+12.5%</span>
          <span className="text-xs text-green-500 font-semibold">This month</span>
        </div>
      </div>
      {/* Resumen */}
      <div className="mt-4 flex flex-col items-center">
        <span className="text-xs text-gray-500">Total invested</span>
        <span className="text-xl font-bold text-gray-900">$8,000</span>
      </div>
    </div>
  );
} 