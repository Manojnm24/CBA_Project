import express from "express";
import cors from "cors";
import dotenv from "dotenv" 
import helmet from "helmet"; // security headers
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173", // allow frontend
  credentials: true
}));

// ✅ Add CSP fix for fonts/images
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      fontSrc: ["'self'", "data:"],
      imgSrc: ["'self'", "data:", "blob:"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"]
    },
  })
);

// DB connection
connectDB();

// API endpoints
app.use("/api/food", foodRouter);
app.use("/api/user",userRouter)

// ✅ Serve images from uploads folder
app.use("/images", express.static(path.join(__dirname, "uploads")));

// Root test route
app.get("/", (req, res) => {
  res.send("API Working");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
