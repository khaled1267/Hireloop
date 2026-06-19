import { serverFetch } from "../core/server";

export const getplans = async (planId) => {
    return serverFetch(`/api/plans?plan_id=${planId}`);
};