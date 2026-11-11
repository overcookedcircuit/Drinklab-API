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
  const category = req.query.category;
  if (typeof category === "string") {
    const filteredDrinks = drinks.filter((drink) => {
      return drink.category === category.toLowerCase();
    });

    return res.status(200).json(filteredDrinks);
  }

  return res.status(200).json(drinks);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
