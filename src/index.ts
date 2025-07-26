import express from "express";
import cors from "cors";
import mapsRoutes from "./routes/maps";
import { PORT } from "./config";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/maps", mapsRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
