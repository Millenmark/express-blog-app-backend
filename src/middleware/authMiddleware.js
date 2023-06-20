import { verify } from "jsonwebtoken";
import User from "../models/User";

export const authGuard = async (req, res, next) => {
  if (
    req.headers.authorization &&
    res.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const { id } = verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(id).select("-password");
      next();
    } catch (error) {
      const err = new Error("Not authorized. Token failed to identify");
      err.statusCode = 401;
      next(err);
    }
  } else {
    const error = new Error("Not authorized. No taken to identify");
    error.statusCode = 401;
    next(error);
  }
};
