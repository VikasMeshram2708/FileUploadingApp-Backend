const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const multer = require("multer");

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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, extension);
    cb(null, `${baseName}-${Date.now()}${extension}`);
  },
});

const upload = multer({ storage: storage });

app.post("/", upload.single("imageUpload"), (req, res) => {
  res.send("<h2>Your File has been successfully Uploaded.</h2>");
});

// listening
const port = 5000 || 5001;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
