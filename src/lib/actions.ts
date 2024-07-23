"use server";

import bcrypt from "bcryptjs";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import dbConnect from "./dbConnect";
import UserModel from "@/models/user";

const signInAction = async (email: string, password: string) => {
  try {
    const formData = new FormData();
    formData.set("email", email);
    formData.set("password", password);
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      throw new Error(error.cause?.err?.message as string);
    }
  }
};

const signUpAction = async (email: string, password: string, name: string) => {
  try {
    await dbConnect();
    const userFromDb = await UserModel.findOne({ email });
    if (userFromDb) {
      throw new Error("User already exists");
    }
    const secPass = await saltAndHash(password);
    await UserModel.create({ email, name, password: secPass });
    await signInAction(email, password);
  } catch (error: any) {
    if (error instanceof AuthError) {
      throw new Error(error.cause?.err?.message as string);
    }
    throw new Error(error.message);
  }
};

async function saltAndHash(password: string) {
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(password, salt);
  return secPass;
}

export { signInAction, signUpAction };
