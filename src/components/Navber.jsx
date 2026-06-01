"use client";

import React from "react";
import { Link, Button } from "@heroui/react";
import { 
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenu, 
  NavbarMenuItem 
} from "@heroui/navbar";

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar 
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      // এখানে absolute পজিশন এবং bg-transparent দেওয়া হয়েছে যাতে Hero Section-এর ওপর সুন্দরভাবে বসে
      className="absolute top-0 left-0 w-full bg-transparent z-50" 
      classNames={{
        base: "text-white py-4", // ব্যাকগ্রাউন্ড কালার এবং বর্ডার রিমুভ করা হয়েছে
        wrapper: "px-4 sm:px-8 justify-between items-center bg-transparent",
      }}
    >
      {/* বামপাশে লোগো এবং মোবাইল রেসপন্সিভ মেনু বাটন */}
      <NavbarContent className="flex-grow-0 gap-0">
        
        {/* কাস্টম পিওর টেইলউইন্ড বাটন */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white mr-3 p-1.5 hover:bg-neutral-800/60 rounded-lg transition-colors focus:outline-none"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        
        {/* লোগো সেকশন */}
        <NavbarBrand className="gap-3 cursor-pointer">
          <div className="w-9 h-9 bg-gradient-to-tr from-[#701aef] via-[#a816e3] to-[#ed0b6e] rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/10">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 5l12 7-12 7V5z"/>
              <path opacity="0.3" d="M5 5h2v14H5V5z"/>
            </svg>
          </div>
          <div className="flex flex-col justify-center leading-none">
            <span className="font-bold text-[17px] tracking-wide text-white">Programming</span>
            <span className="font-bold text-[17px] tracking-wide text-white mt-0.5">Hero</span>
          </div>
        </NavbarBrand>
      </NavbarContent>

      {/* ডানপাশের মেনু (Desktop View) */}
      <NavbarContent className="hidden sm:flex gap-5" justify="end">
        {/* মাঝখানের রাউন্ডেড ক্যাপসুল কন্টেইনার */}
        <div className="flex items-center bg-[#18181b]/80 px-6 py-2 rounded-full border border-neutral-800/40 gap-6 backdrop-blur-md">
          <NavbarItem>
            <Link className="text-neutral-300 hover:text-white text-[13px] font-normal transition-colors duration-200" href="#">
              Browse Jobs
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-neutral-300 hover:text-white text-[13px] font-normal transition-colors duration-200" href="#">
              Company
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-neutral-300 hover:text-white text-[13px] font-normal transition-colors duration-200" href="#">
              Pricing
            </Link>
          </NavbarItem>
          
          {/* Vertical Divider Line */}
          <div className="h-4 w-[1px] bg-neutral-800" />

          {/* Sign In Button */}
          <NavbarItem>
            <Link className="text-[#6366f1] hover:text-[#818cf8] text-[13px] font-medium transition-colors duration-200" href="#">
              Sign In
            </Link>
          </NavbarItem>
        </div>

        {/* Get Started Button */}
        <NavbarItem>
          <Button 
            as={Link} 
            href="#" 
            className="bg-white text-black font-semibold px-5 h-9 rounded-xl text-[13px] hover:bg-neutral-200 transition-all shadow-sm"
          >
            Get Started
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* মোবাইল রেসপন্সিভ ড্রপডাউন মেনু */}
      <NavbarMenu className="bg-[#0b0b0c]/98 backdrop-blur-md pt-6 gap-4 border-t border-neutral-900">
        <NavbarMenuItem>
          <Link className="w-full text-neutral-300 py-2 text-base hover:text-white" href="#" onClick={() => setIsMenuOpen(false)}>Browse Jobs</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full text-neutral-300 py-2 text-base hover:text-white" href="#" onClick={() => setIsMenuOpen(false)}>Company</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full text-neutral-300 py-2 text-base hover:text-white" href="#" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
        </NavbarMenuItem>
        
        <div className="w-full h-[1px] bg-neutral-900 my-2" />
        
        <NavbarMenuItem>
          <Link className="w-full text-[#6366f1] py-2 text-base font-semibold" href="#" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="pt-2">
          <Button as={Link} href="#" className="w-full bg-white text-black font-bold h-11 rounded-xl" onClick={() => setIsMenuOpen(false)}>
            Get Started
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}