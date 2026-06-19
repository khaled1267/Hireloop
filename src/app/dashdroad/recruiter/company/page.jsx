import React from 'react';
// import { getRecruiterCompany } from '@/lib/api/companies';
import CompanyProfile from '@/app/dashdroad/recruiter/company/Companiprofile';
import { getUserSession } from '@/lib/core/session';
import { getRecruiterCompany } from '@/lib/api/company';

const CompanyPage = async () => {

    const user = await getUserSession();
    const company = await getRecruiterCompany(user?.id);
    return (  
        <div>
            <CompanyProfile recruiter={user} recruiterCompany={company}></CompanyProfile>
        </div>
    );
};

export default CompanyPage;