import { Router } from "express";
// Controllers import
import {
  loginUser,
  registerUser,
  userProfile,
} from "../controllers/userControllers.js";

import { authGuard } from "../middleware/authMiddleware.js";

const userRoute = Router();

userRoute.post("/register", registerUser);
userRoute.post("/login", loginUser);
userRoute.get("/profile", authGuard, userProfile);

export default userRoute;
