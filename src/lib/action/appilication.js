"use server";
import { serverMutation } from "../core/server";


export const submitapplication = async (application) => {
    return serverMutation('/api/application', application);
    
}