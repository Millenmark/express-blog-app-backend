import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDatabase from "./config/database.js";
import {
  errorResponserHandler,
  invalidPathHandler,
} from "./middleware/errorHandler.js";
// Routes import
import userRoute from "./routes/userRoutes.js";

// initialize
dotenv.config();
connectToDatabase();
const app = express();

// middleware before routes
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoute);

// middleware after routes
app.use(invalidPathHandler);
app.use(errorResponserHandler);

app.listen(5000, () => {
  console.log("Server is already running...");
});
