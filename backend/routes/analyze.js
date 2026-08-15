import express from "express";
import multer from "multer";
import { analyzeWithGemini } from "../services/gemini.js";

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

router.post("/food", upload.single("image"), async (req, res) => {
  try {
    const food = req.body?.food?.trim();
    const image = req.file;

    if (!food && !image) {
      return res.status(400).json({
        success: false,
        message: "Please enter a food or upload an image to continue.",
      });
    }

    const result = await analyzeWithGemini({
      food,
      image,
    });

    return res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    console.error("Gemini analysis error:", error);

    return res.status(500).json({
      success: false,
      message: "PawSafe couldn't analyze that right now. Please try again.",
    });
  }
});

export default router;
