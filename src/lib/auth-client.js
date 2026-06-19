import { adminClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // সেম ডোমেইন (লোকালহোস্ট) হলে baseURL না দিলেও চলে, অথবা নিচের মতো দিতে পারেন:
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  plugins: [
    adminClient(),
  ],
});

// উপর তৈরি করা 'authClient' থেকেই মেথডগুলো এক্সপোর্ট করতে হবে
export const { signIn, signUp, signOut, useSession } = authClient;