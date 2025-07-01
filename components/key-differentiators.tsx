"use client"

import { motion } from "framer-motion"
import { Clock, Globe, Shield, Zap, TrendingUp, DollarSign, Users, Search } from "lucide-react"

const differentiators = [
    {
    icon: Clock,
    title: "24/7 Liquid RWAs",
    subtitle: "Trade stocks, bonds, and any real world asset at any time in any place",
    description: "Never wait for market hours. Trade real-world assets anytime, anywhere with instant settlement.",
    gradient: "from-[#E97451] to-[#FF8C7A]",
    emoji: "⚡"
    },
  {
    icon: Users,
    title: "Fractional Ownership",
    subtitle: "Collaterize enables fractional ownership of assets, broadening accessibility to a wider audience",
    description: "Access premium assets through fractional ownership, making high-value investments affordable for everyone.",
    gradient: "from-[#8B5E3C] to-[#D4AF37]",
    emoji: "🔗"
  },
    {
    icon: Globe,
    title: "Global Liquidity",
    subtitle: "Instant, borderless transfer of ownership",
    description: "Access premium assets from around the world without geographical restrictions or complex regulations.",
    gradient: "from-[#4ECDC4] to-[#44A08D]",
    emoji: "🌍"
    },
    {
    icon: Shield,
    title: "Open Institutional-Grade Opportunities",
    subtitle: "Exclusive asset classes unbolted to everyone",
    description: "All assets are fully regulated and secured by blockchain technology with institutional-grade security.",
    gradient: "from-[#FF6B6B] to-[#FFE66D]",
    emoji: "🔒"
    },
    {
    icon: Zap,
    title: "High-Value Assets Accessible",
    subtitle: "High-value assets, now affordable and accessible",
    description: "Complete transactions instantly with blockchain technology. No waiting periods or settlement delays.",
    gradient: "from-[#9B59B6] to-[#8E44AD]",
    emoji: "💎"
  },
  {
    icon: Search,
    title: "Traceability",
    subtitle: "Blockchain technology best advantage",
    description: "Full transparency and traceability of all transactions and asset ownership through blockchain technology.",
    gradient: "from-[#E67E22] to-[#D35400]",
    emoji: "🔍"
  }
  ]

export default function KeyDifferentiators() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
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
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Tag */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-[#F9E5C1] text-[#8B5E3C] px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Reshape your financial future with Veltra financial technology</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-title font-bold text-[#2C2C2C] mb-6">
            Digital frontier is transforming how we interact with value
          </h2>
          <p className="text-xl text-[#666] max-w-3xl mx-auto">
            We're revolutionizing real-world asset investment with cutting-edge technology 
            and unprecedented accessibility.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                {/* Emoji representation */}
                <div className="text-4xl mb-4">{item.emoji}</div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-[#2C2C2C] mb-2 group-hover:text-[#E97451] transition-colors">
                  {item.title}
                  </h3>
                
                <p className="text-[#E97451] font-medium text-sm mb-3">
                  {item.subtitle}
                </p>
                
                <p className="text-[#666] leading-relaxed">
                  {item.description}
                </p>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E97451] to-[#FF8C7A] rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-[#E97451] rounded-full opacity-20"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#F9E5C1] to-[#FFE6CC] p-8 rounded-2xl border border-[#E97451]/20">
            <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4">
              Ready to start investing?
            </h3>
            <p className="text-[#666] mb-6 max-w-2xl mx-auto">
              Join thousands of investors who are already building diversified portfolios 
              with Veltra's innovative tokenization platform.
            </p>
              <motion.button
              className="bg-black text-white px-8 py-4 rounded-full font-body font-semibold hover:bg-[#E97451] transition-colors inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              <span>Start Investing Now</span>
              <TrendingUp className="w-5 h-5" />
              </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
