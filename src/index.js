import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDatabase from "./config/database.js";

//initialize
dotenv.config();
connectToDatabase();
const app = express();

//middleware before routes
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.send("Server is already running...");
});

app.listen(5000, () => {
  console.log("Server is already running...");
});
