import dotenv from "dotenv";
dotenv.config({ path: "../.env" }); // Make sure this runs exactly once, at the top.

export const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY || "";
export const PORT = process.env.BACKEND_PORT || 3000;
export const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL || "";
