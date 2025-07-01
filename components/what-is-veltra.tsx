"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Globe, Zap, Users, Building2 } from "lucide-react"

export default function WhatIsVeltra() {
  return (
    <section id="what-is-veltra" className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #E97451 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Tarjeta 2: Texto y UI elements */}
        <motion.div
            className="bg-white rounded-3xl shadow-xl p-8 flex flex-col justify-between min-h-[420px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Tag y título */}
            <div className="mb-4">
              <span className="inline-flex items-center bg-[#F9E5C1] text-[#8B5E3C] px-4 py-2 rounded-full text-sm font-medium mb-3">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#E97451"/><path d="M7 10h6M10 7v6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
                Open access to global value, anytime, anywhere.
              </span>
              <h2 className="text-3xl md:text-4xl font-title font-bold text-[#2C2C2C] mb-2">What is <span className="text-[#E97451]">Veltra</span>?</h2>
            </div>
            {/* Descripción */}
            <div className="mb-6">
              <p className="text-base md:text-lg text-[#666] mb-2 leading-relaxed">
                <b>VELTRA</b> is an intangible asset investment platform built on the Solana blockchain, which allows users to launch, trade, and manage liquid tokenized real world assets.
              </p>
              <p className="text-base md:text-lg text-[#666] leading-relaxed">
                We make real and intangible assets easily accessible to everyone in a decentralized way. Previously inaccessible asset classes, are now available in a user-friendly app.
              </p>
            </div>
            {/* UI Elements estilo imagen 3 */}
            <div className="flex flex-wrap gap-4 items-end">
              {/* Badge tipo chip */}
              <span className="inline-flex items-center bg-[#E97451]/10 text-[#E97451] px-3 py-1 rounded-full text-xs font-semibold">
                Asset Management
              </span>
              {/* Mini card tipo balance */}
              <div className="bg-[#F9E5C1] rounded-xl px-4 py-2 flex flex-col items-start shadow-sm min-w-[120px]">
                <span className="text-xs text-[#8B5E3C] font-medium">Total Assets</span>
                <span className="text-lg font-bold text-[#2C2C2C]">$3,223.00</span>
              </div>
              {/* Simple bar chart */}
              <div className="flex items-end gap-1 h-10">
                <div className="w-2 h-4 bg-[#E97451] rounded"></div>
                <div className="w-2 h-7 bg-[#E97451]/70 rounded"></div>
                <div className="w-2 h-6 bg-[#E97451]/50 rounded"></div>
                <div className="w-2 h-9 bg-[#E97451] rounded"></div>
                <div className="w-2 h-5 bg-[#E97451]/30 rounded"></div>
              </div>
              {/* Logo Veltra provisional */}
              <span className="ml-auto">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="20" fill="#F9E5C1" />
                  <path d="M20 10L28 30H12L20 10Z" fill="#E97451" />
                </svg>
              </span>
            </div>
        </motion.div>

          {/* Tarjeta 1: Globo con nodos y logos distribuidos en arcos */}
        <motion.div
            className="bg-white rounded-3xl shadow-xl p-8 flex flex-col justify-center items-center relative overflow-hidden min-h-[420px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Arcos concéntricos y logos distribuidos */}
            <div className="relative flex items-center justify-center w-full h-72">
              {/* SVG de arcos */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320" fill="none">
                <circle cx="160" cy="160" r="110" stroke="#F3F4F6" strokeWidth="2" />
                <circle cx="160" cy="160" r="80" stroke="#F3F4F6" strokeWidth="2" />
                <circle cx="160" cy="160" r="50" stroke="#F3F4F6" strokeWidth="2" />
              </svg>
              {/* Logo central Veltra */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-20 h-20 bg-gradient-to-br from-[#E97451] to-[#F9E5C1] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="20" fill="#fff" />
                  <path d="M20 10L28 30H12L20 10Z" fill="#E97451" />
                </svg>
              </div>
              {/* Logos de criptos distribuidos en los arcos */}
              {/* BTC */}
              <div className="absolute" style={{ left: '50%', top: '18%', transform: 'translate(-50%, -50%)' }}>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border">
                  <svg width="24" height="24" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#F7931A"/><text x="7" y="21" fontSize="14" fill="#fff" fontWeight="bold">₿</text></svg>
                </div>
              </div>
              {/* ETH */}
              <div className="absolute" style={{ left: '80%', top: '32%', transform: 'translate(-50%, -50%)' }}>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border">
                  <svg width="24" height="24" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#627EEA"/><polygon points="16,7 24,16 16,13 8,16" fill="#fff"/></svg>
                </div>
              </div>
              {/* USDT */}
              <div className="absolute" style={{ left: '82%', top: '65%', transform: 'translate(-50%, -50%)' }}>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border">
                  <svg width="24" height="24" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#26A17B"/><text x="7" y="21" fontSize="14" fill="#fff" fontWeight="bold">T</text></svg>
                </div>
              </div>
              {/* XRP */}
              <div className="absolute" style={{ left: '50%', top: '85%', transform: 'translate(-50%, -50%)' }}>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border">
                  <svg width="24" height="24" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#23292F"/><path d="M10 20 Q16 14 22 20" stroke="#fff" strokeWidth="2" fill="none"/></svg>
                </div>
              </div>
              {/* USDC */}
              <div className="absolute" style={{ left: '18%', top: '65%', transform: 'translate(-50%, -50%)' }}>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border">
                  <svg width="24" height="24" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#2775CA"/><text x="7" y="21" fontSize="14" fill="#fff" fontWeight="bold">$</text></svg>
                </div>
                  </div>
              {/* SOL */}
              <div className="absolute" style={{ left: '20%', top: '32%', transform: 'translate(-50%, -50%)' }}>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border">
                  <svg width="24" height="24" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#00FFA3"/><rect x="8" y="14" width="16" height="4" rx="2" fill="#fff"/></svg>
                </div>
              </div>
            </div>
            {/* Texto inferior */}
            <div className="mt-8 text-center">
              <span className="inline-block bg-[#F9E5C1] text-[#8B5E3C] px-3 py-1 rounded-full text-xs font-medium mb-2">Multi-chain support</span>
              <div className="text-lg font-semibold text-[#2C2C2C]">Connect and manage assets across top blockchains</div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}
