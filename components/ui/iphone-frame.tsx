import React from "react";

export default function IphoneFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative w-[260px] h-[540px] ${className}`}>
      <svg
        viewBox="0 0 260 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <rect
          x="8"
          y="8"
          width="244"
          height="524"
          rx="40"
          fill="#fff"
          stroke="#D1D5DB"
          strokeWidth="4"
        />
        {/* Notch */}
        <rect
          x="90"
          y="18"
          width="80"
          height="16"
          rx="8"
          fill="#111"
          opacity="0.9"
        />
        {/* Speaker */}
        <rect
          x="120"
          y="22"
          width="20"
          height="4"
          rx="2"
          fill="#333"
          opacity="0.5"
        />
        {/* Camera */}
        <circle cx="110" cy="26" r="3" fill="#333" opacity="0.5" />
      </svg>
      {/* Pantalla de la app */}
      <div className="absolute left-[20px] top-[32px] w-[220px] h-[488px] rounded-[32px] overflow-hidden bg-white shadow-inner">
        {children}
      </div>
    </div>
  );
} 