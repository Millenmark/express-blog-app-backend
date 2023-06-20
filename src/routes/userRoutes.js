import { Router } from "express";
// Controllers import
import { loginUser, registerUser } from "../controllers/userControllers.js";

const userRoute = Router();

userRoute.post("/register", registerUser);
userRoute.post("/login", loginUser);

export default userRoute;
