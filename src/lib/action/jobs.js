"use server";
const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000";

// কার্লি ব্রেস বা থার্ড ব্র্যাকেট ছাড়া সরাসরি parameter নিন
export const createJobs = async (newjobsdata) => { 
    try {
        const res = await fetch(`${API_BASE_URL}/api/addjob`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newjobsdata), // এখন পুরো অবজেক্টটি সঠিকভাবে যাবে
        });

        // রেসপন্স ঠিকঠাক না আসলে হ্যান্ডেল করার জন্য
        if (!res.ok) {
            throw new Error(`Server responded with status: ${res.status}`);
        }

        return await res.json();
    } catch (error) {
        console.error("Fetch error in Server Action:", error);
        return { success: false, error: error.message };
    }
};