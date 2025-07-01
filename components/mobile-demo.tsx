"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Home, Sparkles, Bot, ArrowRight, TrendingUp, Briefcase, Gem, Palette, Settings, User, BarChart3 } from "lucide-react"
import { useState, useEffect } from "react"

const TAGS = [
  {
    icon: Bot,
    text: "AI assistant"
  },
  {
    icon: Home,
    text: "Frictionless UX"
  }
]

const ANIMATION_STEPS = [
  "portfolio",
  "assets",
  "invest",
  "profile"
]

const NAV_ITEMS = [
  { id: "portfolio", icon: Home, label: "Home" },
  { id: "assets", icon: BarChart3, label: "Assets" },
  { id: "invest", icon: TrendingUp, label: "Invest" },
  { id: "profile", icon: User, label: "Profile" }
]

export default function MobileDemo() {
  const [step, setStep] = useState(0)
  const [activeScreen, setActiveScreen] = useState("portfolio")

  // Auto animation loop - now cycles through all 4 main screens
  useEffect(() => {
    const timeouts = [3000, 3000, 3000, 3000] // 3 seconds for each screen
    const timer = setTimeout(() => {
      setStep((prev) => (prev + 1) % ANIMATION_STEPS.length)
      setActiveScreen(ANIMATION_STEPS[(step + 1) % ANIMATION_STEPS.length])
    }, timeouts[step])
    return () => clearTimeout(timer)
  }, [step])

  const handleNavClick = (screenId: string) => {
    setActiveScreen(screenId)
    // Reset auto animation when user interacts
    setStep(0)
  }

  return (
    <section id="mobile-app" className="relative py-24 bg-white overflow-hidden">
      {/* Background gradient, subtle */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e6eef8] via-white to-[#e6eef8] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Left: Editorial text and tags (on desktop) */}
          <div className="flex-1 flex flex-col gap-8 max-w-lg w-full order-2 lg:order-1 mt-12 lg:mt-0">
            {/* Section Title */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-title text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 tracking-tight mb-4">
                Veltra's app redefines how users interact with their assets.
              </h2>
            </motion.div>

            {/* Tags */}
            <div className="flex flex-row gap-3 mb-3">
              {TAGS.map((tag, i) => (
              <motion.div
                  key={tag.text}
                  className="flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-700 shadow"
                initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                  <tag.icon className="w-5 h-5 text-[#E97451]" />
                  {tag.text}
              </motion.div>
            ))}
          </div>
            {/* Editorial text */}
            <motion.p
              className="text-sm md:text-base text-gray-600 leading-relaxed font-light max-w-xl mt-2 mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ textAlign: "justify" }}
            >
              Veltra empowers users to manage their tokenized real world assets holistically—from acquisition and portfolio tracking to yield generation and liquidity management. <br className="hidden md:block" />
              Whether you're an experienced investor or just beginning, Veltra makes advanced financial tools accessible, understandable, and actionable.
            </motion.p>
            {/* CTA */}
            <motion.button
              className="inline-flex items-center gap-2 px-5 py-2 bg-black text-white rounded-full font-semibold shadow hover:bg-[#E97451] transition-colors text-sm w-fit mt-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore the app experience <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Center: Complete animated mockup */}
          <div className="flex-1 flex justify-center items-center order-1 lg:order-2">
            <motion.div
              className="relative w-[280px] h-[580px] md:w-[320px] md:h-[640px] overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-gray-900 bg-gradient-to-b from-[#f8fafc] to-[#e6eef8] z-10 flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ boxShadow: "0 8px 32px 0 rgba(34, 40, 49, 0.10)" }}
            >
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20" style={{ top: 6 }} />
              
              {/* Status bar */}
              <div className="flex justify-between items-center px-6 pt-8 pb-2 text-xs text-gray-600">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-3 border border-gray-600 rounded-sm">
                    <div className="w-4 h-1.5 bg-gray-600 rounded-sm m-0.5"></div>
          </div>
                  <span>100%</span>
            </div>
          </div>

              {/* Main content area */}
              <div className="flex-1 overflow-hidden">
                <AnimatePresence mode="wait">
                  {activeScreen === "portfolio" && (
                    <motion.div
                      key="portfolio"
                      className="h-full px-6 pt-4"
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* Portfolio balance and asset cards */}
                      <div className="text-center mb-4">
                        <div className="text-xs text-gray-400 tracking-widest">Portfolio Balance</div>
                        <div className="text-2xl font-bold text-gray-900 mono-numbers">$111,200.65</div>
                        <div className="text-xs text-orange-500 font-semibold">+2.4% today</div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="bg-white rounded-xl p-2 flex flex-col items-center shadow border border-gray-100">
                          <Home className="w-4 h-4 text-orange-400 mb-1" />
                          <div className="text-xs text-gray-500">Real Estate</div>
                          <div className="text-sm font-bold text-gray-900">$8,234</div>
                        </div>
                        <div className="bg-white rounded-xl p-2 flex flex-col items-center shadow border border-gray-100">
                          <TrendingUp className="w-4 h-4 text-orange-400 mb-1" />
                          <div className="text-xs text-gray-500">DeFi</div>
                          <div className="text-sm font-bold text-gray-900">$2,456</div>
                        </div>
                        <div className="bg-white rounded-xl p-2 flex flex-col items-center shadow border border-gray-100">
                          <Briefcase className="w-4 h-4 text-purple-500 mb-1" />
                          <div className="text-xs text-gray-500">Alt Assets</div>
                          <div className="text-sm font-bold text-gray-900">$1,234</div>
          </div>
        </div>
                      <div className="flex justify-between gap-2 mb-4">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-lg">+</div>
                          <div className="text-xs text-gray-500 mt-1">Top Up</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-sm">↓</div>
                          <div className="text-xs text-gray-500 mt-1">Withdraw</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-sm">→</div>
                          <div className="text-xs text-gray-500 mt-1">Send</div>
          </div>
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-sm">★</div>
                          <div className="text-xs text-gray-500 mt-1">Invest</div>
          </div>
        </div>
                      
                      {/* Recent activity */}
                      <div className="bg-white rounded-xl p-3 shadow border border-gray-100">
                        <div className="text-sm font-semibold text-gray-900 mb-2">Recent Activity</div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-600">Real Estate investment</span>
                            <span className="text-green-500">+$234</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-600">DeFi yield earned</span>
                            <span className="text-green-500">+$45</span>
                          </div>
                        </div>
                      </div>
      </motion.div>
                  )}

                  {activeScreen === "assets" && (
        <motion.div
                      key="assets"
                      className="h-full px-6 pt-4"
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="text-center mb-4">
                        <div className="text-lg font-bold text-gray-900">My Assets</div>
                        <div className="text-xs text-gray-500">Manage your investments</div>
                      </div>
                      
                      {/* Asset categories */}
                      <div className="space-y-3">
                        <div className="bg-white rounded-xl p-3 shadow border border-gray-100">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Home className="w-5 h-5 text-orange-400" />
                              <div>
                                <div className="text-sm font-semibold text-gray-900">Real Estate</div>
                                <div className="text-xs text-gray-500">3 properties</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-bold text-gray-900">$8,234</div>
                              <div className="text-xs text-green-500">+4.2%</div>
                            </div>
                          </div>
                </div>
                        
                        <div className="bg-white rounded-xl p-3 shadow border border-gray-100">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <TrendingUp className="w-5 h-5 text-green-500" />
                              <div>
                                <div className="text-sm font-semibold text-gray-900">DeFi Protocols</div>
                                <div className="text-xs text-gray-500">5 strategies</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-bold text-gray-900">$2,456</div>
                              <div className="text-xs text-green-500">+12.8%</div>
                            </div>
                          </div>
              </div>

                        <div className="bg-white rounded-xl p-3 shadow border border-gray-100">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Gem className="w-5 h-5 text-purple-500" />
                              <div>
                                <div className="text-sm font-semibold text-gray-900">Collectibles</div>
                                <div className="text-xs text-gray-500">2 items</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-bold text-gray-900">$1,234</div>
                              <div className="text-xs text-green-500">+8.5%</div>
                            </div>
                          </div>
                        </div>
            </div>
          </motion.div>
                  )}

                  {activeScreen === "invest" && (
          <motion.div
                      key="invest"
                      className="h-full px-6 pt-4"
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                        transition={{ duration: 0.6 }}
                      >
                      <div className="text-center mb-4">
                        <div className="text-lg font-bold text-gray-900">Invest</div>
                        <div className="text-xs text-gray-500">Discover opportunities</div>
                      </div>
                      
                      {/* Investment opportunities */}
                      <div className="space-y-3">
                        <div className="bg-white rounded-xl p-3 shadow border border-gray-100">
                          <div className="flex items-center gap-3 mb-2">
                            <Home className="w-5 h-5 text-orange-400" />
                            <div>
                              <div className="text-sm font-semibold text-gray-900">Premium Real Estate</div>
                              <div className="text-xs text-gray-500">Min: $1 • Returns: 8-12%</div>
                            </div>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-2 text-xs text-gray-600">
                            Premium properties worldwide including residential, commercial, and industrial real estate.
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-xl p-3 shadow border border-gray-100">
                          <div className="flex items-center gap-3 mb-2">
                            <TrendingUp className="w-5 h-5 text-green-500" />
                            <div>
                              <div className="text-sm font-semibold text-gray-900">DeFi Yield Farming</div>
                              <div className="text-xs text-gray-500">Min: $10 • Returns: 15-25%</div>
                            </div>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-2 text-xs text-gray-600">
                            Automated yield optimization across multiple DeFi protocols.
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-xl p-3 shadow border border-gray-100">
                          <div className="flex items-center gap-3 mb-2">
                            <Gem className="w-5 h-5 text-purple-500" />
                      <div>
                              <div className="text-sm font-semibold text-gray-900">Art & Collectibles</div>
                              <div className="text-xs text-gray-500">Min: $50 • Returns: 5-20%</div>
                            </div>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-2 text-xs text-gray-600">
                            Curated collection of fine art, luxury items, and rare collectibles.
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeScreen === "profile" && (
                    <motion.div
                      key="profile"
                      className="h-full px-6 pt-4"
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <User className="w-8 h-8 text-gray-500" />
                        </div>
                        <div className="text-lg font-bold text-gray-900">John Doe</div>
                        <div className="text-xs text-gray-500">Premium Investor</div>
                      </div>
                      
                      {/* Profile stats */}
                      <div className="bg-white rounded-xl p-3 shadow border border-gray-100 mb-3">
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <div className="text-lg font-bold text-gray-900">$111K</div>
                            <div className="text-xs text-gray-500">Total Value</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-gray-900">+24.5%</div>
                            <div className="text-xs text-gray-500">YTD Return</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Menu items */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow border border-gray-100">
                          <span className="text-sm text-gray-900">Account Settings</span>
                          <Settings className="w-4 h-4 text-gray-400" />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow border border-gray-100">
                          <span className="text-sm text-gray-900">Security</span>
                          <div className="w-4 h-4 text-gray-400">🔒</div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow border border-gray-100">
                          <span className="text-sm text-gray-900">Support</span>
                          <div className="w-4 h-4 text-gray-400">💬</div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                  </div>

              {/* Navigation bar */}
              <div className="bg-white border-t border-gray-200 px-4 py-2">
                <div className="flex justify-around">
                  {NAV_ITEMS.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                        activeScreen === item.id 
                          ? 'text-[#E97451] bg-orange-50' 
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="text-xs">{item.label}</span>
                    </button>
              ))}
            </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
