const API_URL = "http://localhost:5000/api";

export async function analyzeFood(food, imageFile) {
  const formData = new FormData();

  if (food) {
    formData.append("food", food);
  }

  if (imageFile) {
    formData.append("image", imageFile);
  }

  const response = await fetch(`${API_URL}/analyze/food`, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong.");
  }

  return data;
}
