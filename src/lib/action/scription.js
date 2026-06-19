"use server";
import { serverMutation } from "../core/server";


export const createScription = async (subinfo) => {
    return serverMutation('/api/subscription', subinfo);
    
}