import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const PLAN_PRICE_ID ={
    "seeker_pro" : "price_1TgUEpGq7mWLz18QjxKMoxUg",
    "seeker_premium" : "price_1TgUkaGq7mWLz18QjdHLKapY",

    "recruiter_enterprise" :"price_1TgUkaGq7mWLz18QjdHLKapY",
    "recruiter_growth" :"price_1TgUn6Gq7mWLz18Q4Sckl89J",
}