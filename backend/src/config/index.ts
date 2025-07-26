import dotenv from "dotenv";
dotenv.config({ path: "../.env" }); // Make sure this runs exactly once, at the top.

console.log("Port:", process.env.PORT);

export const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY || "";
export const PORT = process.env.PORT || 3000;
