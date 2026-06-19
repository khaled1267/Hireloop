import {  protectedFetch } from "../core/server";

export const getapplication = async (applicationId) => {
  return protectedFetch(`/api/applications?applicationId=${applicationId}`);
};
