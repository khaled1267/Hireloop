import { getapplication } from '@/lib/api/aplication';
import { getUserSession } from '@/lib/core/session';
import React from 'react';

// ছবির মতো স্ট্যাটাস ব্যাজ ডাইনামিক করার ফাংশন
const getStatusStyles = (status) => {
  switch (status?.toLowerCase()) {
    case 'applied':
      return 'border border-gray-500 text-gray-300 bg-gray-800/40';
    case 'review':
      return 'border border-amber-500 text-amber-400 bg-amber-950/20';
    case 'shortlisted':
      return 'border border-emerald-500 text-emerald-400 bg-emerald-950/20';
    case 'rejected':
      return 'border border-red-500 text-red-400 bg-red-950/20';
    case 'offered':
      return 'border border-purple-400 text-purple-300 bg-purple-950/20';
    default:
      // আপনার ডেটাতে আপাতত স্ট্যাটাস নেই, তাই ডিফল্ট হিসেবে 'Applied' এর স্টাইল পাবে
      return 'border border-gray-500 text-gray-300 bg-gray-800/40';
  }
};

// কতদিন বা কত ঘণ্টা আগে অ্যাপ্লাই করা হয়েছে তা বের করার সিম্পল ফাংশন
const formatAppliedTime = (dateString) => {
  if (!dateString) return "Recent";
  const appliedDate = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - appliedDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60));

  if (diffDays === 0) {
    return diffHours <= 0 ? "Just now" : `${diffHours} hours ago`;
  } else if (diffDays === 1) {
    return "1 day ago";
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else {
    return appliedDate.toLocaleDateString(); // ৭ দিনের বেশি হলে ডেট দেখাবে
  }
};

const Applicationseeker = async () => {
  const user = await getUserSession();
  console.log(user.id);
  const jobs = await getapplication(user.id);
  console.log(jobs);

  return (
    <div className="w-full bg-[#131315] p-6 rounded-xl border border-gray-800 text-gray-200">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-800 text-gray-400 text-sm font-medium">
              <th className="pb-4 pt-2 font-normal">Job Title</th>
              <th className="pb-4 pt-2 font-normal">Company</th>
              <th className="pb-4 pt-2 font-normal">Applied</th>
              <th className="pb-4 pt-2 font-normal">Status</th>
              <th className="pb-4 pt-2 font-normal text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800/50 text-sm">
            {jobs && jobs.map((job, index) => (
              <tr key={index} className="hover:bg-gray-900/30 transition-colors">
                
                {/* Job Title */}
                <td className="py-4 pr-4">
                  <div className="flex items-center gap-3">
                    {/* Icon Placeholder */}
                    <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 font-mono text-xs">
                      {"</>"}
                    </div>
                    <div>
                      {/* ডেটাতে jobTitle ফাঁকা থাকলে "Position Applied" দেখাবে */}
                      <div className="font-semibold text-gray-100">
                        {job.jobTitle || "Position Applied"}
                      </div>
                      <div className="text-xs text-gray-400 mt-0.5">Full-time • Remote</div>
                    </div>
                  </div>
                </td>

                {/* Company Name */}
                <td className="py-4 px-2 text-gray-300">
                  {job.companyName || "Unknown Company"}
                </td>

                {/* Applied Time (createdAt.$date অনুযায়ী ডাইনামিক) */}
                <td className="py-4 px-2 text-gray-400">
                 {formatAppliedTime(job.createdAt)}
                </td>

                {/* Status (আপনার ডেটায় স্ট্যাটাস না থাকলে ডিফল্ট 'Applied') */}
                <td className="py-4 px-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${getStatusStyles(job.status || 'applied')}`}>
                    {job.status || 'Applied'}
                  </span>
                </td>

                {/* Action */}
                <td className="py-4 pl-2 text-right">
                  <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors bg-transparent border-none cursor-pointer">
                    Details
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applicationseeker;