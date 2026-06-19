import React from "react";
import Link from "next/link";
import { ShieldAlert, ArrowLeft, Home } from "lucide-react";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট (Gradient Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-red-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-md w-full text-center z-10 space-y-6">
        
        {/* আইকন বক্স */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/10 border border-red-500/20 rounded-2xl shadow-xl shadow-red-500/5 animate-pulse mb-2">
          <ShieldAlert className="w-10 h-10 text-red-500" />
        </div>

        {/* টেক্সট কন্টেন্ট */}
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
            401 - Unauthorized
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-sm mx-auto leading-relaxed">
            Oops! এই পেজটি দেখার অনুমতি আপনার নেই। দয়া করে সঠিক অ্যাকাউন্ট দিয়ে লগইন করুন।
          </p>
        </div>

        {/* অ্যাকশন বাটন সমূহ */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          
          {/* লগইন বা ড্যাশবোর্ডে ফেরার বাটন */}
          <Link 
            href="/signin" 
            className="w-full sm:w-auto bg-white text-black font-semibold px-6 py-2.5 rounded-xl text-sm hover:bg-zinc-200 transition-all shadow-md text-center"
          >
            Sign In Again
          </Link>

          {/* হোমে ফেরার বাটন */}
          <Link 
            href="/" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800 hover:bg-zinc-800 font-medium px-6 py-2.5 rounded-xl text-sm transition-all text-center"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          
        </div>

        {/* অতিরিক্ত হেল্প মেসেজ */}
        <p className="text-zinc-600 text-xs pt-8">
          কোনো সমস্যা হলে আপনার অ্যাডমিনের সাথে যোগাযোগ করুন।
        </p>
        
      </div>
    </div>
  );
}