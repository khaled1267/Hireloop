"use client";
import DashboardCards from '@/components/Dashboad';
import RecentApplicationsTable from '@/components/RecentApplications';
import RecentApplicationsDashboard from '@/components/RecentApplications';
import TopCompanies from '@/components/Topcompanis';
// import { ColumnResizing } from '@/components/RecentApplications';
import { useSession } from '@/lib/auth-client';
import React from 'react';

const Recruter = () => {
    const {data: session,ispanding} = useSession();
    const user = session?.user;

    if(ispanding){
        return <div>Loading...</div>
    }
    return (
        <div>
            
            <h1 className='text-3xl '>Welcome, {user?.name}!</h1>
        <DashboardCards />
         <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-4 p-4">
      {/* <RecentApplicationsTable /> */}
      <TopCompanies />
    </div>
        </div>
    );
};

export default Recruter;