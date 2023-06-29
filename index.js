import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDatabase from "./src/config/database.js";
import {
  errorResponserHandler,
  invalidPathHandler,
} from "./src/middleware/errorHandler.js";
// Routes import
import userRoute from "./src/routes/userRoutes.js";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// initialize
dotenv.config();
connectToDatabase();
const app = express();

// middleware before routes
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoute);

// static assets
app.use("/uploads", express.static(path.join(__dirname, "src/uploads")));
// app.use(
//   "/uploads",
//   express.static(path.join(process.cwd(), "src/uploads"), {})
// );

// middleware after routes
app.use(invalidPathHandler);
app.use(errorResponserHandler);

app.listen(5000, () => {
  console.log("Server is already running...");
});
