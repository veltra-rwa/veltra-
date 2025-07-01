"use client"

import { motion } from "framer-motion"
import { AlertTriangle, X } from "lucide-react"
import { useState } from "react"

export default function ContractStrip() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      exit={{ y: -100 }}
      className="sticky top-0 z-50 bg-gradient-to-r from-[#E97451] to-[#FF8C7A] text-white py-3 px-4 border-b border-[#E97451]/20"
    >
      <div className="container mx-auto flex items-center justify-center space-x-2 text-sm font-medium">
        <AlertTriangle className="w-4 h-4 flex-shrink-0" />
        <span>
          <strong>CONTRATO:</strong> Veltra operates under regulatory compliance. All investments are subject to market risks.
        </span>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 p-1 hover:bg-white/20 rounded-full transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  )
} 