import React from "react";
import { FileText, Users, Zap, CheckCircle2 } from "lucide-react";

export default function DashboardCards() {
  const cardData = [
    {
      title: "Total Job Posts",
      value: "48",
      icon: FileText,
      iconColor: "text-zinc-400",
    },
    {
      title: "Total Applicants",
      value: "1,284",
      icon: Users,
      iconColor: "text-zinc-400",
    },
    {
      title: "Active Jobs",
      value: "18",
      icon: Zap,
      iconColor: "text-zinc-400",
    },
    {
      title: "Jobs Closed",
      value: "32",
      icon: CheckCircle2,
      iconColor: "text-zinc-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900/80"
        >
          {/* আইকন বক্স */}
          <div className="w-10 h-10 bg-zinc-800/60 rounded-xl flex items-center justify-center border border-zinc-700/30">
            <card.icon className={`size-5 ${card.iconColor}`} />
          </div>

          {/* টেক্সট সেকশন */}
          <div className="flex flex-col gap-1.5">
            <span className="text-zinc-400 text-sm font-medium tracking-wide">
              {card.title}
            </span>
            <span className="text-white text-3xl font-bold tracking-tight">
              {card.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}