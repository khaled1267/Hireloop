"use client";

import { motion } from "framer-motion";

const jobs = [
  {
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    title: "Backend Engineer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "Berlin, Germany",
    type: "Remote",
    salary: "€30–€50/hour",
  },
  {
    title: "UI/UX Designer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "London, UK",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    title: "DevOps Engineer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "Amsterdam, NL",
    type: "On-site",
    salary: "€35–€55/hour",
  },
  {
    title: "Product Manager",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "Paris, France",
    type: "Hybrid",
    salary: "€40–€60/hour",
  },
  {
    title: "Mobile Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Remote",
    salary: "€25–€45/hour",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function JobDiscoverySection() {
  return (
    <section className="min-h-screen bg-[#0a0a0a] py-20 px-6">
      {/* Header */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-sm bg-purple-500 inline-block" />
          <span className="text-xs tracking-[0.2em] uppercase text-gray-400 font-medium">
            Smart Job Discovery
          </span>
          <span className="w-2 h-2 rounded-sm bg-purple-500 inline-block" />
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight max-w-xl mx-auto">
          The roles youd never find by searching
        </h1>
      </motion.div>

      {/* Job Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              backgroundColor: "#1e1e1e",
              transition: { duration: 0.2 },
            }}
            className="bg-[#141414] border border-white/[0.06] rounded-2xl p-6 flex flex-col gap-4 cursor-pointer group"
          >
            {/* Title & Description */}
            <div>
              <h2 className="text-white text-xl font-semibold mb-2">
                {job.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                {job.description}
              </p>
            </div>

            {/* Badges */}
            <motion.div
              className="flex flex-wrap gap-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span
                variants={badgeVariants}
                className="flex items-center gap-1.5 bg-[#1f1f1f] border border-white/[0.07] text-gray-300 text-xs px-3 py-1.5 rounded-full"
              >
                <span className="text-purple-400">◎</span>
                {job.location}
              </motion.span>
              <motion.span
                variants={badgeVariants}
                className="flex items-center gap-1.5 bg-[#1f1f1f] border border-white/[0.07] text-gray-300 text-xs px-3 py-1.5 rounded-full"
              >
                <span className="text-purple-400">⌘</span>
                {job.type}
              </motion.span>
              <motion.span
                variants={badgeVariants}
                className="flex items-center gap-1.5 bg-[#1f1f1f] border border-white/[0.07] text-gray-300 text-xs px-3 py-1.5 rounded-full"
              >
                <span className="text-purple-400">$</span>
                {job.salary}
              </motion.span>
            </motion.div>

            {/* Apply Button */}
            <motion.button
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mt-auto flex items-center gap-2 text-sm text-gray-300 group-hover:text-white transition-colors duration-200 w-fit"
            >
              Apply Now
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Button */}
      <motion.div
        className="mt-14 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <motion.button
          whileHover={{ scale: 1.04, backgroundColor: "#f5f5f5" }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white text-black text-sm font-medium px-8 py-3.5 rounded-full transition-colors duration-200"
        >
          View all job open
        </motion.button>
      </motion.div>
    </section>
  );
}