import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import analyzeRoutes from "./routes/analyze.js";
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/analyze", analyzeRoutes);

app.get("/api/health", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "PawSafe backend is running",
  });
});

app.listen(PORT, () => {
  console.log(`PawSafe server is running on port ${PORT}`);
});
