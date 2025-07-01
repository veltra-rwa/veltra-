import Hero from "@/components/hero"
import VeltraBenefitsSection from "@/components/veltra-benefits-section"
import WhatIsVeltra from "@/components/what-is-veltra"
import MobileDemo from "@/components/mobile-demo"
// import KeyBenefits from "@/components/key-benefits"
// import KeyDifferentiators from "@/components/key-differentiators"
import AssetsOffered from "@/components/assets-offered"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "VELTRA - Plataforma de inversión en activos del mundo real tokenizados",
  description: "Invierte en activos reales tokenizados desde $1. Bienes raíces, arte, diamantes y más con liquidez 24/7.",
  keywords: "inversión, activos reales, tokenización, bienes raíces, arte, diamantes, RWA, DeFi",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WhatIsVeltra />
      <MobileDemo />
      {/* <KeyBenefits /> */}
      <VeltraBenefitsSection />
      {/* <KeyDifferentiators /> */}
      <AssetsOffered />
      <Footer />
    </main>
  )
}
