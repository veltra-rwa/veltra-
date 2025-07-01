"use client"

import { motion } from "framer-motion"
import { Home, Briefcase, Palette, TrendingUp, ArrowUpRight, ArrowUpLeft, ArrowDownRight, ArrowDownLeft, Gem } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-20 pb-0 bg-white overflow-hidden">
      {/* Fondo degradado sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e6eef8] via-white to-[#e6eef8]" />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Título principal con font-title y tamaño menor */}
        <div className="relative flex flex-col items-center mb-4">
              <motion.h1
            className="font-title text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 tracking-tight inline-block relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
              >
            <span className="relative">
              Rethinking
              {/* Flecha izquierda para tag Real Estate */}
              <svg className="hidden md:block absolute -left-16 top-1/2 -translate-y-1/2" width="80" height="40" viewBox="0 0 80 40" fill="none">
                <path d="M80 20 Q40 0 0 20" stroke="#E97451" strokeWidth="2" fill="none" />
                <circle cx="0" cy="20" r="3" fill="#E97451" />
              </svg>
            </span>
            <span> Real World </span>
            <span className="relative">
              Assets
              {/* Flecha derecha para tag Alternative Assets */}
              <svg className="hidden md:block absolute -right-16 top-1/2 -translate-y-1/2" width="80" height="40" viewBox="0 0 80 40" fill="none">
                <path d="M0 20 Q40 40 80 20" stroke="#E97451" strokeWidth="2" fill="none" />
                <circle cx="80" cy="20" r="3" fill="#E97451" />
              </svg>
            </span>
              </motion.h1>
          {/* Tags conectados visualmente con las flechas */}
          <div className="w-full flex justify-between items-center mt-2 px-2 md:px-24">
                  <motion.div
              className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
                >
              <Home className="w-4 h-4" />
              Real Estate
            </motion.div>
                <motion.div
              className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
                  >
              <Briefcase className="w-4 h-4" />
              Alternative Assets
            </motion.div>
          </div>
        </div>

        {/* Subtítulo descriptivo */}
        <motion.p
          className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
          initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
                    >
          Leveraging blockchain technology, Veltra grants anyone the ability to invest in RWA with the efficiency, liquidity, and performance standards of institutional finance. Democratizing investment opportunities once reserved for banks, funds, and accredited investors.
        </motion.p>

        {/* Mockup móvil realista, cortado */}
                    <motion.div
          className="relative flex justify-center items-start mb-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
                    >
          <div className="relative w-[340px] h-[340px] md:w-[400px] md:h-[400px] overflow-hidden rounded-t-[2.5rem] shadow-2xl border border-gray-200 bg-gradient-to-b from-[#f8fafc] to-[#e6eef8] z-10">
            {/* Notch y detalles superiores */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black/80 rounded-b-2xl z-20" style={{ top: 6 }} />
            {/* Contenido del portafolio */}
            <div className="relative z-10 pt-10 px-6">
              <div className="text-center mb-2">
                <div className="text-xs text-gray-400 tracking-widest">Portfolio Balance</div>
                <div className="text-3xl font-bold text-gray-900 mono-numbers">$111,200.65</div>
                <div className="text-xs text-orange-500 font-semibold">+2.4% today</div>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-white rounded-xl p-3 flex flex-col items-center shadow border border-gray-100">
                  <Home className="w-5 h-5 text-orange-400 mb-1" />
                  <div className="text-xs text-gray-500">Real State</div>
                  <div className="text-sm font-bold text-gray-900">$8,234</div>
                </div>
                <div className="bg-white rounded-xl p-3 flex flex-col items-center shadow border border-gray-100">
                  <TrendingUp className="w-5 h-5 text-orange-400 mb-1" />
                  <div className="text-xs text-gray-500">DeFi</div>
                  <div className="text-sm font-bold text-gray-900">$2,456</div>
                </div>
                <div className="bg-white rounded-xl p-3 flex flex-col items-center shadow border border-gray-100">
                  <Briefcase className="w-5 h-5 text-purple-500 mb-1" />
                  <div className="text-xs text-gray-500">Alt Assets</div>
                  <div className="text-sm font-bold text-gray-900">$1,234</div>
                </div>
              </div>
              <div className="flex justify-between gap-2 mt-2">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-2xl">+</div>
                  <div className="text-xs text-gray-500 mt-1">Top Up</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-xl">↓</div>
                  <div className="text-xs text-gray-500 mt-1">Withdraw</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-xl">→</div>
                  <div className="text-xs text-gray-500 mt-1">Send</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-xl">★</div>
                  <div className="text-xs text-gray-500 mt-1">Invest</div>
                </div>
              </div>
            </div>
            {/* Efecto de corte inferior */}
            <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-[#e6eef8] to-transparent z-30" />
                      </div>

          {/* Flechas y tarjetas flotantes (assets) */}
          {/* Izquierda */}
          <div className="absolute -left-32 top-16 flex flex-col gap-10 z-0">
            {/* Private Equity & Venture Capital */}
            <div className="relative flex items-center">
              <svg width="90" height="50" viewBox="0 0 90 50" fill="none" className="absolute left-16 top-4">
                <path d="M0 25 Q45 0 90 25" stroke="#E97451" strokeWidth="2" fill="none" opacity="0.7" />
              </svg>
              <div className="bg-white border border-gray-100 rounded-2xl shadow-lg px-6 py-4 flex items-center gap-3 min-w-[170px]">
                <Briefcase className="w-6 h-6 text-purple-500" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Private Equity & VC</div>
                  <div className="text-xs text-gray-500">Growth & innovation</div>
                </div>
              </div>
                            </div>
            {/* Collectibles & Luxury */}
            <div className="relative flex items-center">
              <svg width="70" height="40" viewBox="0 0 70 40" fill="none" className="absolute left-10 top-2">
                <path d="M0 20 Q35 0 70 20" stroke="#FFB800" strokeWidth="2" fill="none" opacity="0.6" />
              </svg>
              <div className="bg-white border border-gray-100 rounded-2xl shadow px-4 py-3 flex items-center gap-2 min-w-[120px]">
                <Gem className="w-5 h-5 text-yellow-500" />
                            <div>
                  <div className="font-semibold text-gray-900 text-xs">Collectibles & Luxury</div>
                </div>
                              </div>
                            </div>
                          </div>
          {/* Derecha */}
          <div className="absolute -right-32 top-24 flex flex-col gap-12 z-0">
            {/* DeFi Strategies */}
            <div className="relative flex items-center">
              <svg width="90" height="50" viewBox="0 0 90 50" fill="none" className="absolute -right-16 top-4">
                <path d="M90 25 Q45 0 0 25" stroke="#4ECDC4" strokeWidth="2" fill="none" opacity="0.7" />
              </svg>
              <div className="bg-white border border-gray-100 rounded-2xl shadow-lg px-6 py-4 flex items-center gap-3 min-w-[160px]">
                <TrendingUp className="w-6 h-6 text-green-500" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">DeFi Strategies</div>
                  <div className="text-xs text-gray-500">Yield optimization</div>
                          </div>
                    </div>
                  </div>
            {/* Art */}
            <div className="relative flex items-center">
              <svg width="70" height="40" viewBox="0 0 70 40" fill="none" className="absolute -right-10 top-2">
                <path d="M70 20 Q35 40 0 20" stroke="#A259FF" strokeWidth="2" fill="none" opacity="0.6" />
              </svg>
              <div className="bg-white border border-gray-100 rounded-2xl shadow px-4 py-3 flex items-center gap-2 min-w-[110px]">
                <Palette className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="font-semibold text-gray-900 text-xs">Art</div>
                </div>
              </div>
            </div>
            </div>
          </motion.div>
      </div>
    </section>
  )
}
