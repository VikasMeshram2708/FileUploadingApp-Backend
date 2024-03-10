const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");

const app = express();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routing for static files
app.use("/", express.static(path.join(__dirname, "views")));

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
