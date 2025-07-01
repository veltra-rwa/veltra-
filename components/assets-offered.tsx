"use client"

import { motion } from "framer-motion"
import { Home, Gem, Palette, TrendingUp, Building2, Car, Plane, Briefcase, Coins, Zap } from "lucide-react"

  const assets = [
    {
    icon: Home,
      title: "Real Estate",
    subtitle: "Property Investment",
    description: "Premium properties worldwide including residential, commercial, and industrial real estate.",
    minInvestment: "$1",
    returns: "8-12%",
    gradient: "from-[#E97451] to-[#FF8C7A]",
    emoji: "🏠",
    features: ["Global Properties", "Rental Income", "Appreciation"]
    },
    {
    icon: Palette,
    title: "Art",
    subtitle: "Cultural Assets",
    description: "Masterpieces from renowned artists and contemporary works with proven market value.",
    minInvestment: "$5",
    returns: "6-20%",
    gradient: "from-[#FF6B6B] to-[#FFE66D]",
    emoji: "🖼️",
    features: ["Curated Collection", "Expert Valuation", "Insurance"]
    },
    {
    icon: Gem,
    title: "Collectibles & Luxury",
    subtitle: "Precious Assets",
    description: "Investment-grade diamonds, gold, silver, and luxury collectibles with certified quality.",
    minInvestment: "$10",
    returns: "5-15%",
    gradient: "from-[#8B5E3C] to-[#D4AF37]",
    emoji: "💎",
    features: ["Certified Quality", "Storage Included", "Liquidity"]
  },
  {
    icon: Briefcase,
    title: "Private Equity & Venture Capital",
    subtitle: "Growth Investments",
    description: "Access to private companies and venture capital opportunities previously reserved for institutions.",
    minInvestment: "$100",
    returns: "15-50%",
    gradient: "from-[#4ECDC4] to-[#44A08D]",
    emoji: "💼",
    features: ["High Growth", "Diversification", "Expert Management"]
    },
    {
    icon: Coins,
    title: "Alternative Assets",
    subtitle: "Diverse Opportunities",
    description: "Wine, whiskey, watches, and other alternative investments with strong historical returns.",
    minInvestment: "$25",
    returns: "10-25%",
    gradient: "from-[#9B59B6] to-[#8E44AD]",
    emoji: "🍷",
    features: ["Tangible Assets", "Passion Investment", "Storage"]
    },
    {
    icon: Zap,
      title: "DeFi Strategies",
    subtitle: "Digital Finance",
    description: "Tokenized DeFi strategies and yield farming opportunities with automated management.",
    minInvestment: "$1",
    returns: "8-30%",
    gradient: "from-[#E67E22] to-[#D35400]",
    emoji: "⚡",
    features: ["Automated", "High Yield", "Liquidity"]
  }
]

export default function AssetsOffered() {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
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
            <Gem className="w-4 h-4" />
            <span>From the most common to the most exclusive—previously reserved for a privileged few</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-title font-bold text-[#2C2C2C] mb-6">
            Trade & manage seamlessly any type of asset in Veltra's
          </h2>
          <p className="text-xl text-[#666] max-w-3xl mx-auto">
            Diversify your portfolio with our carefully curated selection of real-world assets, 
            all tokenized for easy access and trading.
          </p>
        </motion.div>

        {/* Assets Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assets.map((asset, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                {/* Header with icon and emoji */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-[#F9E5C1]`}>
                    <asset.icon className="w-8 h-8 text-[#E97451]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-[#2C2C2C] mb-2 group-hover:text-[#E97451] transition-colors">
                    {asset.title}
                  </h3>
                
                <p className="text-[#E97451] font-medium text-sm mb-3">
                  {asset.subtitle}
                </p>
                
                <p className="text-[#666] leading-relaxed mb-6">
                  {asset.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-[#666]">Min Investment</div>
                    <div className="text-lg font-bold text-[#E97451]">{asset.minInvestment}</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-[#666]">Expected Returns</div>
                    <div className="text-lg font-bold text-[#E97451]">{asset.returns}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {asset.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#E97451] rounded-full"></div>
                      <span className="text-sm text-[#666]">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E97451] to-[#FF8C7A] rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
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
              Ready to diversify your portfolio?
            </h3>
            <p className="text-[#666] mb-6 max-w-2xl mx-auto">
              Start building your portfolio with real-world assets today. 
              Choose from our diverse range of investment opportunities.
            </p>
            <motion.button
              className="bg-black text-white px-8 py-4 rounded-full font-body font-semibold hover:bg-[#E97451] transition-colors inline-flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore Assets</span>
              <TrendingUp className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
