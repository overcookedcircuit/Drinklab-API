import express from "express";
import { drinks } from "./data/drinks.js";

const app = express();
const PORT = 3000;

// Parse JSON request bodies
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my API!" });
});

// Route for fetching all the drinks
app.get("/drinks", (req, res) => {
  const { category, name, ingredients } = req.query;
  let filteredDrinks = drinks;

  // Category filter
  if (typeof category === "string") {
    filteredDrinks = filteredDrinks.filter((drink) => {
      return drink.category.toLowerCase() === category.toLowerCase();
    });
  }

  // Name filter
  if (typeof name === "string") {
    filteredDrinks = filteredDrinks.filter((drink) => {
      return drink.name.toLowerCase().includes(name.toLowerCase());
    });
  }

  // Ingredients filter
  if (typeof ingredients === "string") {
    filteredDrinks = filteredDrinks.filter((drink) => {
      return drink.ingredients.some((item) =>
        item.toLowerCase().includes(ingredients.toLowerCase())
      );
    });
  }

  return res.status(200).json(filteredDrinks);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
