import { serverFetch } from "../core/server";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000";

export const getjobs =  async (quarystring) => {
    return await serverFetch(`/api/jobs?${quarystring}`);
}


export const getjobbyid = async (jobId) => {
    const iddetails = await serverFetch(`/api/jobs/${jobId}`);
    return iddetails}
export const getcompaniesjobs = async ({companyid,status="active"}) => {
    const res = await fetch(`${baseUrl}/api/jobs?companyid=${companyid}&status=${status}`);
    return await res.json();

}