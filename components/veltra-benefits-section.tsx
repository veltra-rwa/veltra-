"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import IphoneFrame from "./ui/iphone-frame";
import AppScreenBalance from "./ui/app-screen-balance";
import AppScreenGraph from "./ui/app-screen-graph";
import AppScreenList from "./ui/app-screen-list";
import { useRef } from "react";

export default function VeltraBenefitsSection() {
  // Parallax effect for mockups
  const parallax = (intensity = 20) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const handleMouseMove = (e: React.MouseEvent) => {
      const rect = (ref.current as unknown as HTMLElement)?.getBoundingClientRect();
      if (!rect) return;
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
      const percentX = (offsetX / rect.width) * 2 - 1;
      const percentY = (offsetY / rect.height) * 2 - 1;
      x.set(percentX * intensity);
      y.set(percentY * intensity);
    };
    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };
    return { ref, x, y, handleMouseMove, handleMouseLeave };
  };

  // Parallax for each mockup
  const p1 = parallax(16);
  const p2 = parallax(10);
  const p3 = parallax(8);
  const p4 = parallax(8);

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title and Tag */}
        <div className="mb-10">
          <span className="inline-block px-4 py-1 mb-4 bg-gray-100 text-[#E97451] rounded-full text-xs font-semibold tracking-wide shadow-sm">
            Reshape your financial future with Veltra financial technology.
          </span>
          <h2 className="font-title text-3xl md:text-5xl font-bold text-gray-900 text-left leading-tight mb-2">
            Digital frontier is transforming how we interact with value.
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {/* Card 1: Global liquidity at your fingertips */}
          <motion.div
            className="col-span-2 row-span-2 bg-gray-100 rounded-xl p-6 relative overflow-hidden min-h-[340px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            ref={p1.ref}
            onMouseMove={p1.handleMouseMove}
            onMouseLeave={p1.handleMouseLeave}
          >
            <motion.div
              className="absolute left-0 top-0 scale-75 -translate-y-10 -translate-x-8 opacity-80 pointer-events-none"
              style={{ zIndex: 1, x: p1.x, y: p1.y }}
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 0.8 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <IphoneFrame>
                <AppScreenBalance />
              </IphoneFrame>
            </motion.div>
            <div className="relative z-10">
              <h3 className="font-bold text-xl mb-2">Global liquidity at your fingertips</h3>
              <p className="text-gray-600">Instant, borderless transfer of ownership.</p>
            </div>
          </motion.div>
          {/* Card 2: Open Institutional-Grade Opportunities */}
          <motion.div
            className="col-span-2 row-span-1 bg-gray-100 rounded-xl p-6 relative overflow-hidden min-h-[160px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            ref={p2.ref}
            onMouseMove={p2.handleMouseMove}
            onMouseLeave={p2.handleMouseLeave}
          >
            <motion.div
              className="absolute right-0 top-0 scale-50 translate-x-10 -translate-y-6 opacity-80 pointer-events-none"
              style={{ zIndex: 1, x: p2.x, y: p2.y }}
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 0.8 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <IphoneFrame>
                <AppScreenGraph />
              </IphoneFrame>
            </motion.div>
            <div className="relative z-10">
              <h3 className="font-bold text-xl mb-2">Open Institutional-Grade Opportunities</h3>
              <p className="text-gray-600">Exclusive asset classes unbolted to everyone.</p>
            </div>
          </motion.div>
          {/* Card 3: Fractional ownership */}
          <motion.div
            className="col-span-1 row-span-1 bg-gray-100 rounded-xl p-6 relative overflow-hidden min-h-[160px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            ref={p3.ref}
            onMouseMove={p3.handleMouseMove}
            onMouseLeave={p3.handleMouseLeave}
          >
            <motion.div
              className="absolute left-1/2 top-0 scale-40 -translate-x-1/2 -translate-y-8 opacity-80 pointer-events-none"
              style={{ zIndex: 1, x: p3.x, y: p3.y }}
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 0.8 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <IphoneFrame>
                <AppScreenList />
              </IphoneFrame>
            </motion.div>
            <div className="relative z-10">
              <h3 className="font-bold text-xl mb-2">Fractional ownership</h3>
              <p className="text-gray-600">High-value assets, now affordable and accessible.</p>
            </div>
          </motion.div>
          {/* Card 4: Traceability */}
          <motion.div
            className="col-span-1 row-span-1 bg-gray-100 rounded-xl p-6 relative overflow-hidden min-h-[160px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            ref={p4.ref}
            onMouseMove={p4.handleMouseMove}
            onMouseLeave={p4.handleMouseLeave}
          >
            <motion.div
              className="absolute right-0 bottom-0 scale-40 translate-x-4 translate-y-4 opacity-80 pointer-events-none"
              style={{ zIndex: 1, x: p4.x, y: p4.y }}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 0.8 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <IphoneFrame>
                <AppScreenGraph />
              </IphoneFrame>
            </motion.div>
            <div className="relative z-10">
              <h3 className="font-bold text-xl mb-2">Traceability</h3>
              <p className="text-gray-600">Blockchain technology best advantage.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 