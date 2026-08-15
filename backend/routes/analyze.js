import express from "express";
import multer from "multer";

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

router.post("/food", upload.single("image"), (req, res) => {
  const food = req.body?.food?.trim();
  const image = req.file;

  if (!food && !image) {
    return res.status(400).json({
      success: false,
      message: "Please enter a food or upload an image to continue.",
    });
  }

  return res.status(200).json({
    success: true,
    result: {
      food: food || image.originalname,
      verdict: "safe",
      summary:
        "This is a temporary response. Gemini analysis will be connected next.",
      reasons: [
        "PawSafe received your input successfully.",
        "Gemini analysis will be connected next.",
      ],
      warnings: [],
      alternative: null,
    },
  });
});

export default router;
