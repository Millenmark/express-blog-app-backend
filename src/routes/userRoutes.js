import { Router } from "express";
// Controllers import
import {
  loginUser,
  registerUser,
  updateProfile,
  updateProfilePicture,
  userProfile,
} from "../controllers/userControllers.js";

import { authGuard } from "../middleware/authMiddleware.js";

const userRoute = Router();

userRoute.post("/register", registerUser);
userRoute.post("/login", loginUser);
userRoute.get("/profile", authGuard, userProfile);
userRoute.put("/updateProfile", authGuard, updateProfile);
userProfile.put("/updateProfilePicture", authGuard, updateProfilePicture);

export default userRoute;
