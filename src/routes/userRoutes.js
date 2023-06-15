import { Router } from "express";
// Controllers import
import { registerUser } from "../controllers/userControllers.js";

const userRoute = Router();

userRoute.post("/register", registerUser);

export default userRoute;
