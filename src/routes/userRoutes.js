import { Router } from "express";
// Controllers import
import {
  loginUser,
  registerUser,
  updateProfile,
  userProfile,
} from "../controllers/userControllers.js";

import { authGuard } from "../middleware/authMiddleware.js";

const userRoute = Router();

userRoute.post("/register", registerUser);
userRoute.post("/login", loginUser);
userRoute.get("/profile", authGuard, userProfile);
userRoute.put("/updateProfile", authGuard, updateProfile);

export default userRoute;
