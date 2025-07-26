import express from "express";
import cors from "cors";
import mapsRoutes from "./routes/maps.js";
import { PORT } from "./config/index.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/maps", mapsRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
