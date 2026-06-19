import React from "react";
import {
  Bell,
  House,
  SearchCode,
  Briefcase,
  FileUser,
  PersonStanding,
  Settings2,
  MagnetIcon,
  Bookmark,
  FileText,
  CreditCard,
  Users,
  Building,
} from "lucide-react";
import Link from "next/link";
import { getUserSession } from "@/lib/core/session";

export default async function Navigation() {
  // সরাসরি সার্ভার সাইডেই সেশন ডাটা চলে আসবে
  const user = await getUserSession();

  const recruiternavItems = [
    { icon: House, href: "/dashdroad/recruiter", label: "Home" },
    { icon: SearchCode, href: "/dashdroad/recruiter/jobs", label: "Jobs" },
    { icon: Bell, href: "/dashdroad/recruiter/jobs/new", label: "Post A Job" },
    { icon: Briefcase, href: "/dashdroad/recruiter/company", label: "Company Profile" },
    { icon: FileUser, href: "/messages", label: "Messages" },
    { icon: PersonStanding, href: "/profile", label: "Profile" },
    { icon: Settings2, href: "/settings", label: "Settings" },
  ];

  const seekerNavLinks = [
    { icon: House, href: "/dashdroad/seeker", label: "dashdroad" },
    { icon: MagnetIcon, href: "/dashdroad/seeker/jobs", label: "Jobs" },
    { icon: Bookmark, href: "/dashdroad/seeker/saved-jobs", label: "Saved Jobs" },
    { icon: FileText, href: "/dashdroad/seeker/applications", label: "Applications" },
    { icon: CreditCard, href: "/dashdroad/seeker/billing", label: "Billing" },
    { icon: Settings2, href: "/settings", label: "Settings" },
  ];

  const adminNavLinks = [
    { icon: House, href: "/dashdroad/admin", label: "dashdroad" },
    { icon: Users, href: "/dashdroad/admin/user", label: "Users" },
    { icon: Building, href: "/dashdroad/admin/companies", label: "Companies" },
    { icon: Briefcase, href: "/dashdroad/admin/jobs", label: "Jobs" },
    { icon: CreditCard, href: "/dashdroad/admin/payments", label: "Payments" },
    { icon: Settings2, href: "/dashdroad/admin/settings", label: "Settings" },
  ];

  const navLinksMap = {
    seeker: seekerNavLinks,
    recruiter: recruiternavItems,
    admin: adminNavLinks,
  };

  // ইউজারের রোল অনুযায়ী ডাইনামিকালি মেনু সিলেক্ট হবে (সার্ভারেই)
  const navItems = navLinksMap[user?.role || "seeker"];

  return (
    <aside className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-10 border-r border-zinc-800 bg-black p-6 z-40">
      <div className="mb-8 px-4">
        <h2 className="text-xl font-bold text-white tracking-wide">Hireloop</h2>
      </div>
      
      <nav className="flex flex-col gap-1">
        {navItems?.map((item) => (
          <Link
            key={item.label}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-zinc-800 hover:text-white"
            href={item.href}
          >
            <item.icon className="size-5 text-muted" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}