// import JobListingContainer from "@/components/jobs/JobListingContainer";

import JobListingContainer from "@/components/job/Joblissingcontauner";
import JobCard from "@/components/job/Jobscard";
import { getjobs } from "@/lib/api/jobs";

export default async function Page({searchParams}) {
  // Fetched server-side on the initial request
  const filters = await searchParams;

  const filterobject = {
    ...filters,
    isRemote: filters.isRemote === "true",
  };

  const quarysuarch = new URLSearchParams(filters);
  const quarystring = quarysuarch.toString();
  const jobs = await getjobs(quarystring);
  console.log("jobs", jobs);
  // console.log(jobs);

  return (
    <div className="w-full min-h-screen bg-zinc-950 p-6 md:p-12 text-white">
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Open Positions</h1>
        <p className="text-zinc-400 mt-2">
          Discover your next engineering challenge.
        </p>
      </div>
        <JobListingContainer filter={filterobject} jobs={jobs || []} />

      {/* <div className="min-h-screen bg-black flex items-center justify-center p-6 grid grid-cols-3 gap-8">
        {jobs.map((data, index) => (
          <JobCard key={index} data={data} />
        ))}
      </div>  */}
    </div>
  );
}
