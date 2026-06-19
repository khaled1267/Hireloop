import React from 'react';
import PostJobForm from './Postjobs';
import { getLoggedInRecruiterCompany, getRecruiterCompany } from '@/lib/api/company';
// import { getLoggedInRecruiterCompany } from '@/lib/api/company';

const PostJobPage = async () => {

    const company = await getLoggedInRecruiterCompany();
    console.log("PostJobPage r:", company);

    return (
        <div>
            <PostJobForm company={company}></PostJobForm>
        </div>
    );
};

export default PostJobPage;