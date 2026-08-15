import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const PORT = 3000;

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "PawSafe backend is running",
  });
});

app.listen(PORT, () => {
  console.log(`PawSafe server is running on port ${PORT}`);
});
