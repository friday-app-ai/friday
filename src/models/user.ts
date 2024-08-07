import { User } from "@/types";
import mongoose, { Schema } from "mongoose";


const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  courses: { type: [String], default: [] },
});

const UserModel =
  mongoose?.models?.User || mongoose.model<User>("User", userSchema);

export default UserModel;
