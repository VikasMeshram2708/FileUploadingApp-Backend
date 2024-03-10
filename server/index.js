const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.json({
    message: "hello,world!",
  });
});

// listening
const port = 5000 || 5001;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});