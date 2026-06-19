"use client";

import React from "react";
import { Link, Button } from "@heroui/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const { data: session, isPending } = useSession();
  const user = session?.user;

  // ড্যাশবোর্ড লিংকের অবজেক্ট ম্যাপিং
  const dashboardLinks = {
    admin: "/dashdroad/admin",
    seeker: "/dashdroad/seeker",
    recruiter: "/dashdroad/recruiter",
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Logged out successfully! 👋");
    } catch (err) {
      console.error(err);
      toast.error("Failed to log out");
    }
  };

  const isLoginPage = pathname === "/signin" || pathname === "/login";
  const authLink = isLoginPage ? "/signup" : "/signin";
  const authLabel = isLoginPage ? "Sign Up" : "Sign In";

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className="sticky top-0 left-0 w-full bg-transparent z-50"
      classNames={{
        base: "text-white py-4",
        wrapper: "px-4 sm:px-8 justify-between items-center bg-transparent",
      }}
    >
      <NavbarContent className="flex-grow-0 gap-0">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white mr-3 p-1.5 hover:bg-neutral-800/60 rounded-lg transition-colors focus:outline-none"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        <NavbarBrand className="gap-3 cursor-pointer" as={Link} href="/">
          <div className="w-9 h-9 bg-gradient-to-tr from-[#701aef] via-[#a816e3] to-[#ed0b6e] rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/10">
            <svg
              className="w-5 h-5 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7 5l12 7-12 7V5z" />
              <path opacity="0.3" d="M5 5h2v14H5V5z" />
            </svg>
          </div>
          <div className="flex flex-col justify-center leading-none">
            <span className="font-bold text-[17px] tracking-wide text-white">
              Programming
            </span>
            <span className="font-bold text-[17px] tracking-wide text-white mt-0.5">
              Hero
            </span>
          </div>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation */}
      <NavbarContent className="hidden sm:flex gap-5" justify="end">
        <div className="flex items-center bg-[#18181b]/80 px-6 py-2 rounded-full border border-neutral-800/40 gap-6 backdrop-blur-md">
          <NavbarItem>
            <Link
              className="text-neutral-300 hover:text-white text-[13px] font-normal transition-colors duration-200"
              href="browserjobs"
            >
              Browse Jobs
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="text-neutral-300 hover:text-white text-[13px] font-normal transition-colors duration-200"
              href="#"
            >
              Company
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="text-neutral-300 hover:text-white text-[13px] font-normal transition-colors duration-200"
              href="plan"
            >
              Pricing
            </Link>
          </NavbarItem>

          {/* যদি ইউজার লগইন থাকে, তবে ড্যাশবোর্ড লিংক দেখাবে */}
          {!isPending && user?.email && (
            <NavbarItem>
              <Link
                className="text-neutral-300 hover:text-white text-[13px] font-semibold text-[#a816e3] transition-colors duration-200"
                href={dashboardLinks[user?.role || "seeker"]}
              >
                Dashboard
              </Link>
            </NavbarItem>
          )}

          {/* Vertical Divider Line */}
          <div className="h-4 w-[1px] bg-neutral-800" />

          {!isPending && session ? (
            <NavbarItem>
              <span className="text-neutral-200 text-[13px] font-medium selection:bg-transparent">
                Hi,{" "}
                <span className="text-[#6366f1] font-bold">
                  {session.user.name.split(" ")[0]}
                </span>
              </span>
            </NavbarItem>
          ) : (
            <NavbarItem>
              <Link
                className="text-[#6366f1] hover:text-[#818cf8] text-[13px] font-medium transition-colors duration-200"
                href={authLink}
              >
                {authLabel}
              </Link>
            </NavbarItem>
          )}
        </div>

        <NavbarItem>
          {!isPending && session ? (
            <Button
              onClick={handleSignOut}
              className="bg-red-500/10 text-red-400 border border-red-500/20 font-semibold px-5 h-9 rounded-xl text-[13px] hover:bg-red-500 hover:text-white transition-all shadow-sm cursor-pointer"
            >
              Sign Out
            </Button>
          ) : (
            <Button
              as={Link}
              href="/register"
              className="bg-white text-black font-semibold px-5 h-9 rounded-xl text-[13px] hover:bg-neutral-200 transition-all shadow-sm"
            >
              Get Started
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Navigation Menu */}
      <NavbarMenu className="bg-[#0b0b0c]/98 backdrop-blur-md pt-6 gap-4 border-t border-neutral-900">
        {!isPending && session && (
          <div className="px-2 py-1 text-sm text-neutral-400 font-medium border-b border-neutral-900 pb-3">
            Signed in as:{" "}
            <span className="text-white font-bold">{session.user.name}</span>
          </div>
        )}

        <NavbarMenuItem>
          <Link
            className="w-full text-neutral-300 py-2 text-base hover:text-white"
            href="#"
            onClick={() => setIsMenuOpen(false)}
          >
            Browse Jobs
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full text-neutral-300 py-2 text-base hover:text-white"
            href="#"
            onClick={() => setIsMenuOpen(false)}
          >
            Company
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full text-neutral-300 py-2 text-base hover:text-white"
            href="plan"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
        </NavbarMenuItem>

        {/* মোবাইলের জন্যও কন্ডিশনাল ড্যাশবোর্ড লিংক */}
        {!isPending && user?.email && (
          <NavbarMenuItem>
            <Link
              className="w-full text-[#a816e3] py-2 text-base font-semibold"
              href={dashboardLinks[user?.role || "seeker"]}
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
          </NavbarMenuItem>
        )}

        <div className="w-full h-[1px] bg-neutral-900 my-2" />

        {!isPending && session ? (
          <NavbarMenuItem>
            <button
              onClick={() => {
                handleSignOut();
                setIsMenuOpen(false);
              }}
              className="w-full text-left text-red-400 py-2 text-base font-semibold transition-colors"
            >
              Sign Out
            </button>
          </NavbarMenuItem>
        ) : (
          <>
            <NavbarMenuItem>
              <Link
                className="w-full text-[#6366f1] py-2 text-base font-semibold"
                href={authLink}
                onClick={() => setIsMenuOpen(false)}
              >
                {authLabel}
              </Link>
            </NavbarMenuItem>
            <NavbarMenuItem className="pt-2">
              <Button
                as={Link}
                href="/register"
                className="w-full bg-white text-black font-bold h-11 rounded-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Button>
            </NavbarMenuItem>
          </>
        )}
      </NavbarMenu>
    </Navbar>
  );
}
