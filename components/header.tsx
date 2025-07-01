"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Twitter, BookOpen, Smartphone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { label: "Home", id: "hero", icon: null },
    { label: "X", href: "https://twitter.com/veltra", icon: null },
    { label: "Learn", href: "https://docs.veltra.com", icon: BookOpen },
    { label: "Mobile App", href: "#mobile-app", icon: Smartphone },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-12 w-full z-40 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-sand-200/50" : "bg-white/90 backdrop-blur-xl"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link
              href="/"
              className="text-2xl font-title font-bold text-[#2C2C2C]"
            >
              VELTRA
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.href ? (
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link
                      href={item.href}
                      target={item.href.startsWith('http') ? "_blank" : "_self"}
                      rel={item.href.startsWith('http') ? "noopener noreferrer" : ""}
                      className="text-[#666] hover:text-[#2C2C2C] transition-colors font-body font-medium relative group inline-flex items-center space-x-2"
                    >
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span>{item.label}</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E97451] transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </motion.div>
                ) : (
                  <motion.button
                    onClick={() => scrollToSection(item.id!)}
                    className="text-[#666] hover:text-[#2C2C2C] transition-colors font-body font-medium relative group inline-flex items-center space-x-2"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
                    <span>{item.label}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E97451] transition-all duration-300 group-hover:w-full" />
                  </motion.button>
                )}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                className="bg-black hover:bg-[#E97451] text-white font-body rounded-full px-6 py-2 transition-all duration-300"
                onClick={() => scrollToSection("hero")}
              >
                Start Investing
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6 text-[#2C2C2C]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6 text-[#2C2C2C]" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-white/95 backdrop-blur-xl border-t border-[#F9E5C1] overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        target={item.href.startsWith('http') ? "_blank" : "_self"}
                        rel={item.href.startsWith('http') ? "noopener noreferrer" : ""}
                        className="block px-3 py-3 text-[#666] hover:text-[#2C2C2C] hover:bg-[#F9E5C1] transition-all duration-200 w-full text-left rounded-lg font-body font-medium inline-flex items-center space-x-2"
                      >
                        {item.icon && <item.icon className="w-4 h-4" />}
                        <span>{item.label}</span>
                      </Link>
                    ) : (
                      <button
                        onClick={() => scrollToSection(item.id!)}
                        className="block px-3 py-3 text-[#666] hover:text-[#2C2C2C] hover:bg-[#F9E5C1] transition-all duration-200 w-full text-left rounded-lg font-body font-medium inline-flex items-center space-x-2"
                      >
                        {item.icon && <item.icon className="w-4 h-4" />}
                        <span>{item.label}</span>
                      </button>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  className="px-3 py-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                >
                  <Button
                    className="bg-black hover:bg-[#E97451] text-white font-body rounded-full w-full transition-all duration-300"
                    onClick={() => scrollToSection("hero")}
                  >
                    Start Investing
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
