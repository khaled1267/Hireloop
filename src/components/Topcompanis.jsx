const companies = [
  { id: 1, name: "Google Inc.",    meta: "Technology",  location: "Mountain View", jobs: 24, icon: "G",  color: "bg-blue-100 text-blue-600" },
  { id: 2, name: "Meta Platforms", meta: "Social Media",location: "Menlo Park",   jobs: 18, icon: "M",  color: "bg-indigo-100 text-indigo-600" },
  { id: 3, name: "Stripe",         meta: "Fintech",     location: "San Francisco", jobs: 12, icon: "S",  color: "bg-violet-100 text-violet-600" },
  { id: 4, name: "Tesla",          meta: "Automotive",  location: "Austin",        jobs: 31, icon: "T",  color: "bg-rose-100 text-rose-600" },
];

function CompanyAvatar({ icon, color }) {
  return (
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 ${color} ring-1 ring-black/5`}>
      {icon}
    </div>
  );
}

function JobCountBadge({ count }) {
  return (
    <div className="text-right shrink-0">
      <span className="text-base font-bold text-foreground">{count}</span>
      <p className="text-[10px] font-medium text-default-400 uppercase tracking-widest mt-0.5">
        Active Jobs
      </p>
    </div>
  );
}

export default function TopCompanies() {
  return (
    <div className="w-full bg-content1 border border-divider rounded-xl overflow-hidden shadow-small">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-divider">
        <div>
          <h2 className="text-base font-semibold text-foreground">My Top Companies</h2>
          <p className="text-xs text-default-400 mt-0.5">{companies.length} companies tracked</p>
        </div>
        <button className="text-xs font-medium text-primary hover:text-primary-500 transition-colors cursor-pointer">
          View all
        </button>
      </div>

      {/* Company list */}
      <ul className="divide-y divide-divider">
        {companies.map(c => (
          <li
            key={c.id}
            className="flex items-center gap-4 px-5 py-4 hover:bg-default-50/60 transition-colors duration-150 cursor-pointer"
          >
            <CompanyAvatar icon={c.icon} color={c.color} />

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground truncate">{c.name}</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-xs text-default-400">{c.meta}</span>
                <span className="text-default-300 text-xs">·</span>
                <span className="text-xs text-default-400">{c.location}</span>
              </div>
            </div>

            <JobCountBadge count={c.jobs} />
          </li>
        ))}
      </ul>

      {/* Footer button */}
      <div className="px-5 py-4 border-t border-divider bg-default-50/50">
        <button className="w-full py-2 rounded-lg border border-divider text-sm font-medium text-default-600 hover:bg-content1 hover:text-foreground active:scale-[0.98] transition-all duration-150 cursor-pointer">
          View All Companies
        </button>
      </div>

    </div>
  );
}