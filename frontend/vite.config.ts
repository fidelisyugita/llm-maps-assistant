import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import path from "path";

// Load .env from the parent directory
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This allows external access
    port: parseInt(process.env.VITE_FRONTEND_PORT || "5173"),
  },
});
