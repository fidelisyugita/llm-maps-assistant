import express from "express";
import { findPlaces } from "../services/googleMapsService";

const router = express.Router();

router.post("/search", async (req, res) => {
  const { query, location } = req.body;

  if (!query || !location) {
    return res.status(400).json({ error: "Missing query or location" });
  }

  try {
    const results = await findPlaces(query, location);
    res.json(results);
  } catch (error) {
    console.error("Google Maps API error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
