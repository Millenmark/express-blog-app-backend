import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  avatar: { type: String, default: "" },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  verificationCode: { type: String, required: false },
  isAdmin: { type: Boolean, default: false },
});
