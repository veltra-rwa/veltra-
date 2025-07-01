import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import ContractStrip from '@/components/contract-strip'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Veltra - Professional Trading Platform',
  description: 'Trade with confidence using Veltra\'s intuitive platform designed for modern investors',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen antialiased bg-white font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ContractStrip />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
