"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Twitter, Linkedin, Github, Mail, FileText, HelpCircle, ArrowRight, MessageCircle, MessageSquare } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    about: [
      { label: "Docs", href: "https://docs.veltra.com" },
      { label: "Learn", href: "https://docs.veltra.com" },
    ],
    assets: [
      { label: "Real Estate", href: "#" },
      { label: "Fine Art", href: "#" },
      { label: "Diamonds", href: "#" },
      { label: "Treasury Bonds", href: "#" },
    ],
    platform: [
      { label: "How It Works", href: "#" },
      { label: "Security", href: "#" },
      { label: "Regulations", href: "#" },
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
    support: [
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Documentation", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Risk Disclosure", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/veltra", label: "Twitter / X" },
    { icon: <MessageCircle className="w-5 h-5" />, href: "#", label: "Discord" },
    { icon: <MessageSquare className="w-5 h-5" />, href: "#", label: "Telegram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Mail className="w-5 h-5" />, href: "#contact", label: "Email" },
  ]

  return (
    <footer className="bg-white text-[#2C2C2C] relative overflow-hidden border-t border-[#F9E5C1]">
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="text-3xl font-title font-bold text-[#2C2C2C] mb-4 inline-block">
                Veltra
              </Link>
              <p className="text-[#666] font-body mb-6 max-w-md leading-relaxed">
                The future of real-world asset investment. Tokenized assets with 24/7 liquidity for everyone.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="text-[#666] hover:text-[#2C2C2C] transition-colors p-2 rounded-lg hover:bg-[#F9E5C1]"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-title font-semibold text-[#2C2C2C] mb-4">About</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[#666] font-body hover:text-[#2C2C2C] transition-colors hover:translate-x-1 inline-block duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Assets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-title font-semibold text-[#2C2C2C] mb-4">Assets</h4>
            <ul className="space-y-2">
              {footerLinks.assets.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[#666] font-body hover:text-[#2C2C2C] transition-colors hover:translate-x-1 inline-block duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Platform */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-title font-semibold text-[#2C2C2C] mb-4">Platform</h4>
            <ul className="space-y-2">
              {footerLinks.platform.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[#666] font-body hover:text-[#2C2C2C] transition-colors hover:translate-x-1 inline-block duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-title font-semibold text-[#2C2C2C] mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[#666] font-body hover:text-[#2C2C2C] transition-colors hover:translate-x-1 inline-block duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="font-title font-semibold text-[#2C2C2C] mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[#666] font-body hover:text-[#2C2C2C] transition-colors hover:translate-x-1 inline-block duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="border-t border-[#F9E5C1] mt-12 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-md">
            <h4 className="font-title font-semibold text-[#2C2C2C] mb-4">Stay Updated</h4>
            <p className="text-[#666] font-body mb-4">
              Get the latest updates on new assets and platform features.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-[#F9E5C1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E97451] focus:border-transparent"
              />
              <motion.button
                className="bg-[#E97451] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#D65A3A] transition-colors inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-[#F9E5C1] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-[#666] font-body text-sm">
            © 2024 Veltra. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {footerLinks.legal.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-[#666] font-body text-sm hover:text-[#2C2C2C] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
