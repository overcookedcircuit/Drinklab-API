const express = require("express");

const app = express();
const PORT = 3000;

// Parse JSON request bodies
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my API!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
