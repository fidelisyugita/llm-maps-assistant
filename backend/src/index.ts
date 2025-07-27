import express from "express";
import cors from "cors";
import mapsRoutes from "./routes/maps.js";
import chatRoutes from "./routes/chat.js";
import { PORT } from "./config/index.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/maps", mapsRoutes);
app.use("/api/chat", chatRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
