"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
    ),
    title: "Smart Search",
    description: "Find your ideal job with advanced filters.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Salary Insights",
    description: "Get real salary data to negotiate confidently.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 17V13M12 17V9M16 17V11" />
      </svg>
    ),
    title: "Top Companies",
    description: "Apply to vetted companies that are hiring.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Saved Jobs",
    description: "Manage apps & favorites on your dashboard.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "One-Click Apply",
    description: "Simplify your job applications for an easier process!",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Resume Builder",
    description: "Create professional resumes with modern templates.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <hexagon points="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "Career Growth Resources",
    description: "Boost your career with quick interview tips.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function FeaturesSection() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6">
      {/* Header */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-sm bg-purple-500 inline-block" />
          <span className="text-xs tracking-[0.2em] uppercase text-gray-400 font-medium">
            Features Job
          </span>
          <span className="w-2 h-2 rounded-sm bg-purple-500 inline-block" />
        </div>
        <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight max-w-xl mx-auto">
          Everything you need <br /> to succeed
        </h2>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="flex items-start gap-4 group"
          >
            {/* Icon Box */}
            <motion.div
              whileHover={{ scale: 1.08, backgroundColor: "#2a2a2a" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#1a1a1a] border border-white/[0.07] flex items-center justify-center text-purple-400"
            >
              {feature.icon}
            </motion.div>

            {/* Text */}
            <div>
              <h3 className="text-white text-sm font-semibold mb-1 group-hover:text-purple-300 transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}