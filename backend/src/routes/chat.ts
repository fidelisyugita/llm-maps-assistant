import express from "express";
import { askOllama } from "../services/ollamaService.js";
import { findPlaces } from "../services/googleMapsService.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { question } = req.body;

  try {
    const mistralResult = await askOllama(question);

    let results = [];
    await Promise.all(
      mistralResult.places.map(async (place) => {
        const resp = await findPlaces(place.name, place.location);
        results = results.concat(resp);
      })
    );

    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to process prompt" });
  }
});

export default router;
