const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Health Information System API is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
