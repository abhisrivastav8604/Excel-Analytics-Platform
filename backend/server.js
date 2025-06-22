const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectDB = require("./config/db");

// Load .env file
dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // Serve static files

// ✅ Root Route
app.get("/", (req, res) => {
  res.send("✅ Backend is live and working!");
});

// Multer setup
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, "uploads/");
  },
  filename: (_req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (_req, file, cb) => {
  const allowedTypes = [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-excel",
    "text/csv",
  ];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only .xlsx, .xls, and .csv allowed"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});

// ✅ File Upload Route
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  res.status(200).json({
    message: "File uploaded successfully",
    file: req.file,
  });
});

// ✅ JWT Protected Route Example
app.get("/api/protected", (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: "Token required" });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    res.json({ message: "Access granted", user: decoded });
  } catch (error) {
    res.status(403).json({ message: "Invalid or expired token" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
