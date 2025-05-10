import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import authRoutes from "../../routes/authRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config();  // Load .env variables

const app = express();
const PORT = process.env.PORT || 5000;

// For __dirname equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// --- Middleware ---

// Logging Middleware
app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request to ${req.url}`);
  next();
});

// CORS Middleware
app.use(cors({
  origin: "*",  // Adjust to match frontend port
  credentials: true
}));

app.use(cookieParser());
// Body Parser
app.use(express.json());

// Serve static files (optional, adjust folder)
app.use(express.static(path.join(__dirname, "../public")));

// --- Database Connection ---
mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/myDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// --- Routes ---

// Root route handler
app.get("/", (req, res) => {
  res.send("Welcome to the Course Reservation System API!");
});

// API Routes
app.use("/api/auth", authRoutes);

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
