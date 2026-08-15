import express from "express";
const router = express.Router();

router.post("/food", (req, res) => {
  const { food } = req.body;

  if (!food || !food.trim()) {
    return res.status(400).json({
      success: false,
      message: "Please provide a food to analyze.",
    });
  }

  res.json({
    success: true,
    result: {
      food: food.trim(),
      verdict: "safe",
      summary: `${food.trim()} is generally considered safe for dogs when prepared appropriately.`,
      reasons: [
        "This is a temporary response from the PawSafe backend.",
        "Gemini analysis will be connected next.",
      ],
      warnings: [],
      alternative: null,
    },
  });
});

module.exports = router;
