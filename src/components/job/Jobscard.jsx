import { ArrowRightIcon, BriefcaseIcon, CircleDollarSign, MapPinIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function JobCard({ data }) {
  // ডাটা ক্লিনিং (যদি ডামি ডাটা থাকে তবে ব্যাকআপ টেক্সট দেখাবে)
  const displayTitle = !data?.jobTitle || data.jobTitle.length < 5 || data.jobTitle.includes('jbj') 
    ? "Frontend Developer" 
    : data.jobTitle;

    const jobid = data?._id?.$oid || data?._id || "12345"; // ডামি আইডি

  const displayLocation = data?.location === "bng" ? "Bangladesh" : (data?.location || "New York, USA");
  const companyName = data?.companyName || "Acme Corporation";
  
  // কোম্পানির নামের প্রথম অক্ষর (লোগো প্লেসহোল্ডারের জন্য)
  const logoPlaceholder = companyName.charAt(0).toUpperCase();
  
  // সেলারি ফরম্যাটিং
  const minSal = data?.minSalary ? parseInt(data.minSalary).toLocaleString() : "25";
  const maxSal = data?.maxSalary ? parseInt(data.maxSalary).toLocaleString() : "40";
  const currencySymbol = data?.currency === "USD" ? "$" : (data?.currency || "€");

  return (
    <div className="max-w-[420px] bg-[#121212] border border-neutral-900 rounded-[28px] p-8 text-white font-sans shadow-2xl transition-all duration-300 hover:border-neutral-800">
      
      {/* Company Logo & Info Section */}
      <div className="flex items-center gap-4 mb-6">
        {/* Logo Container */}
        <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-xl font-bold overflow-hidden shrink-0">
          {data?.companyLogo ? (
            <img src={data.companyLogo} alt={companyName} className="w-full h-full object-cover" />
          ) : (
            <span>{logoPlaceholder}</span>
          )}
        </div>
        
        {/* Company Name & Category */}
        <div>
          <h4 className="text-neutral-200 font-medium text-[15px]">{companyName}</h4>
          <p className="text-neutral-500 text-xs capitalize">{data?.jobCategory || "Design"}</p>
        </div>
      </div>

      {/* Job Title */}
      <h2 className="text-3xl font-medium tracking-tight text-neutral-100 mb-3">
        {displayTitle}
      </h2>

      {/* Description */}
      <p className="text-neutral-400 text-[15px] leading-relaxed font-light mb-8 max-w-[90%]">
        Showcase your commitment to diversity and inclusion by highlighting initiatives.
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2.5 mb-10">
        
        {/* Location Tag */}
        <div className="inline-flex items-center gap-2 bg-[#1c1b1f] hover:bg-neutral-800 transition-colors px-4 py-2 rounded-full text-[14px] font-medium text-neutral-200 border border-neutral-800/40">
          <MapPinIcon className="w-4 h-4 text-purple-400" />
          <span>{displayLocation}</span>
        </div>

        {/* Job Type Tag */}
        <div className="inline-flex items-center gap-2 bg-[#1c1b1f] hover:bg-neutral-800 transition-colors px-4 py-2 rounded-full text-[14px] font-medium text-neutral-200 border border-neutral-800/40 capitalize">
          <BriefcaseIcon className="w-4 h-4 text-purple-400" />
          <span>{data?.jobType || "Hybrid"}</span>
        </div>

        {/* Salary Tag */}
        <div className="inline-flex items-center gap-2 bg-[#1c1b1f] hover:bg-neutral-800 transition-colors px-4 py-2 rounded-full text-[14px] font-medium text-neutral-200 border border-neutral-800/40">
          <CircleDollarSign className="w-4 h-4 text-purple-400" />
          <span>{currencySymbol}{minSal}–{currencySymbol}{maxSal}/{data?.minSalary ? 'year' : 'hour'}</span>
        </div>
        
      </div>

      {/* Apply Button */}
      <Link
      href={`/browserjobs/${jobid}`}
       className="group inline-flex items-center gap-2 text-[15px] font-medium text-white hover:text-purple-400 transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer">
        <span>Apply Now</span>
        <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>

    </div>
  );
}