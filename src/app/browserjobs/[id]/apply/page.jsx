import { getjobbyid } from '@/lib/api/jobs';
import { getUserSession } from '@/lib/core/session';
import { Briefcase, AlertTriangle, ArrowRight, User } from 'lucide-react';
import { redirect } from 'next/navigation';
import React from 'react';
import Jobapply from './Jobapply';
import { getapplication } from '@/lib/api/aplication';
import Link from 'next/link';
import { getplans } from '@/lib/api/plans';

const Applypage = async ({ params }) => {
    const { id } = await params;
    const applyjob = await getUserSession();
    console.log("applyjob", applyjob);

    if (!applyjob) {
        return redirect(`/signin?redirect=/browserjobs/${id}/apply`);
    }

    if (applyjob.role !== "seeker") {
        return (
            <div className="flex flex-col justify-center items-center min-h-[70vh] p-4 text-center">
                <div className="bg-red-50 text-red-600 p-4 rounded-full mb-4">
                    <AlertTriangle className="h-8 w-8" />
                </div>
                <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-2">Access Denied</h1>
                <p className="text-zinc-500 max-w-sm">You must be logged in as a job seeker to apply for jobs.</p>
            </div>
        );
    }

    const job = await getjobbyid(id); 
    console.log("job", job);
    const appliction = await getapplication(applyjob.id);
    console.log("appliction", appliction);
    const plan = await getplans(applyjob?.plan || "free");

    // console.log("plan1", plan1);

    // const plan = {
    //     name: "Free Plan",
    //     maxpermonth: 5,
    // };

    const totalApplied = appliction?.length || 0;
    const canApply = totalApplied < plan.
maxApplicationPerMonth
;

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            {/* Header Box */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400 mb-2">
                            {plan.name}
                        </span>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                            Application Usage
                        </h2>
                        <p className="text-sm text-zinc-500 mt-1">
                            You have applied to <span className="font-bold text-zinc-800 dark:text-zinc-200">{totalApplied}</span> out of <span className="font-bold text-zinc-800 dark:text-zinc-200">{plan.
maxApplicationPerMonth
}</span> jobs this month.
                        </p>
                    </div>

                    {/* Progress Bar (Visual representation) */}
                    <div className="w-full sm:w-48 bg-zinc-100 dark:bg-zinc-800 h-2.5 rounded-full overflow-hidden">
                        <div 
                            className={`h-full rounded-full transition-all duration-300 ${
                                (totalApplied / plan.
maxApplicationPerMonth
) >= 1 ? 'bg-red-500' : 'bg-blue-600'
                            }`}
                            style={{ width: `${Math.min((totalApplied / plan.
maxApplicationPerMonth
) * 100, 100)}%` }}
                        />
                    </div>
                </div>

                {/* Limit reached/Pricing Notice */}
                {!canApply && (
                    <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 rounded-xl flex gap-3 items-start">
                        <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                            <h4 className="text-sm font-medium text-amber-800 dark:text-amber-400">Monthly Limit Reached</h4>
                            <p className="text-xs text-amber-700 dark:text-amber-500 mt-0.5">
                                Upgrade your plan to apply for unlimited jobs.
                            </p>
                        </div>
                    </div>
                )}

                {/* Pricing Link */}
                <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between text-sm">
                    <span className="text-zinc-500">Need more applications?</span>
                    <Link 
                        href="/plan" 
                        className="inline-flex items-center gap-1 font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 transition-colors"
                    >
                        View Pricing <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>

            {/* Application Form Section */}
            {canApply ? (
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
                    <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-zinc-400" /> Complete Your Application
                    </h3>
                    <Jobapply job={job} applicant={applyjob} />
                </div>
            ) : (
                <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 text-center">
                    <p className="text-zinc-500 text-sm">
                        Please upgrade your subscription to unlock further job applications.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Applypage;