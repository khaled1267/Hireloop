"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const plans = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
      </svg>
    ),
    name: "Starter",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
    highlighted: false,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 17V13M12 17V9M16 17V11" />
      </svg>
    ),
    name: "Growth",
    monthlyPrice: 17,
    yearlyPrice: 12,
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
    highlighted: true,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    name: "Premium",
    monthlyPrice: 99,
    yearlyPrice: 79,
    features: [
      "Everything in Pro",
      "Multi-profile career portfolios",
      "Shared talent rooms",
      "Recruiter view (read-only)",
    ],
    highlighted: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function PricingSection() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="bg-[#0a0a0a] py-20 px-6 min-h-screen">
      {/* Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-sm bg-purple-500 inline-block" />
          <span className="text-xs tracking-[0.2em] uppercase text-gray-400 font-medium">
            Pricing
          </span>
          <span className="w-2 h-2 rounded-sm bg-purple-500 inline-block" />
        </div>
        <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight max-w-xl mx-auto">
          Pay for the leverage, <br /> not the listings
        </h2>
      </motion.div>

      {/* Toggle */}
      <motion.div
        className="flex justify-center mb-12"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <div className="flex items-center gap-1 bg-[#141414] border border-white/[0.08] rounded-full p-1">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              billing === "monthly"
                ? "bg-white text-black"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              billing === "yearly"
                ? "bg-white text-black"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Yearly
            <span className="bg-purple-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              25%
            </span>
          </button>
        </div>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            variants={cardVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className={`relative rounded-2xl p-6 flex flex-col gap-5 border ${
              plan.highlighted
                ? "bg-[#1a1a2e] border-purple-500/40"
                : "bg-[#141414] border-white/[0.06]"
            }`}
          >
            {/* Plan Name & Price */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                    plan.highlighted
                      ? "bg-purple-500/20 text-purple-400"
                      : "bg-[#1f1f1f] text-gray-400"
                  }`}
                >
                  {plan.icon}
                </div>
                <span className="text-white font-semibold text-base">
                  {plan.name}
                </span>
              </div>
              <div className="text-right">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={billing + plan.name}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.25 }}
                    className="text-white font-bold text-3xl"
                  >
                    ${billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                  </motion.span>
                </AnimatePresence>
                <span className="text-gray-500 text-xs ml-1">/month</span>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/[0.06]" />

            {/* Features */}
            <div className="flex flex-col gap-3">
              <p className="text-gray-400 text-xs font-medium mb-1">
                Start building your insights hub:
              </p>
              {plan.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.07 }}
                  className="flex items-center gap-2 text-gray-300 text-sm"
                >
                  <span
                    className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs flex-shrink-0 ${
                      plan.highlighted
                        ? "border-purple-500/50 text-purple-400"
                        : "border-white/20 text-gray-400"
                    }`}
                  >
                    +
                  </span>
                  {feature}
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`mt-auto flex items-center justify-between w-full px-5 py-3.5 rounded-xl text-sm font-medium transition-colors duration-200 ${
                plan.highlighted
                  ? "bg-white text-black hover:bg-gray-100"
                  : "bg-[#1f1f1f] border border-white/[0.08] text-white hover:bg-[#2a2a2a]"
              }`}
            >
              Choose This Plan
              <span>→</span>
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}