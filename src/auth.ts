import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import UserModel from "@/models/user";
import dbConnect from "./lib/dbConnect";
import bcrypt from "bcryptjs";
import { authConfig } from "./authconfig";
export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;
        const password = credentials.password as string;
        const email = credentials.email as string;
        user = await getUserFromDb(email);
        if (!user) {
          throw new Error("User not found.");
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
          throw new Error("Wrong password");
        }

        return user;
      },
    }),
  ],
});

async function getUserFromDb(email: string) {
  await dbConnect();
  const user = await UserModel.findOne({ email });
  return user;
}
