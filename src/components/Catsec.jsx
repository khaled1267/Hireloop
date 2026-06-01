"use client";

import { motion } from "framer-motion";
import catsec from "../asserts/cta-bg.png";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative w-full bg-[#0a0a0a] overflow-hidden min-h-[480px] flex flex-col items-center justify-center py-44 px-6">
      
      {/* Globe Grid SVG Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1400px] h-[580px] pointer-events-none select-none">
        {/* Purple glow blob */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[320px] rounded-full bg-purple-700/50 blur-[180px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] rounded-full bg-indigo-600/40 blur-[60px]" />

        {/* SVG Globe Grid */}
        <Image src={catsec} alt="earth" width={1400} height={580} />

      </div>

      {/* Top fade */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto flex flex-col items-center gap-6">
        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-white leading-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          Your next role is <br /> already looking for you
        </motion.h2>

        <motion.p
          className="text-gray-400 text-sm md:text-base max-w-md"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.55, ease: "easeOut" }}
        >
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </motion.p>

        <motion.div
          className="flex items-center gap-3 mt-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
        >
          <motion.button
            whileHover={{ scale: 1.04, backgroundColor: "#f0f0f0" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white text-black text-sm font-medium px-6 py-3 rounded-full"
          >
            Create a free account
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04, backgroundColor: "#1f1f1f" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-[#141414] border border-white/10 text-white text-sm font-medium px-6 py-3 rounded-full"
          >
            View pricing
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}