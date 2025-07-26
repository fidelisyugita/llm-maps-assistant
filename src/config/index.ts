import dotenv from "dotenv";
dotenv.config(); // Make sure this runs exactly once, at the top.

export const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY || "";
export const PORT = process.env.PORT || 3000;
