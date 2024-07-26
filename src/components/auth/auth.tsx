"use client";
import React, { useState } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../components/ui/tabs";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { toast } from "sonner";
import Image from "next/image";
import background from "../../assets/designer.jpg";
import books from "../../assets/stack-of-books.png";
import { signInAction, signUpAction } from "@/lib/actions";

const validateSignup = (
  email: string,
  password: string,
  confirmPassword: string,
  name: string,
): boolean => {
  if (!name) {
    toast.error("Name is required");
  }

  if (!email.length) {
    toast.error("Email is required");
    return false;
  }
  if (!password.length) {
    toast.error("Password is required");
    return false;
  }
  if (!confirmPassword.length) {
    toast.error("Confirm Password is required");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }
  return true;
};

const validateLogin = (email: string, password: string): boolean => {
  if (!email.length) {
    toast.error("Email is required");
    return false;
  }
  if (!password.length) {
    toast.error("Password is required");
    return false;
  }
  return true;
};

const Auth: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const handleLogin = async () => {
    const validate = validateLogin(email, password);
    if (validate) {
      try {
        await signInAction(email, password);
        window.location.reload();
      } catch (error: any) {
        toast.error(error.message);
      }
    }
  };

  const handleSignup = async () => {
    const validate = validateSignup(email, password, confirmPassword, name);
    if (validate) {
      try {
        await signUpAction(email, password, name);
        window.location.reload();
      } catch (error: any) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-1">
        <div className="flex flex-row gap-10 items-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center gap-5">
              <h1 className="text-5xl font-bold md:text-6xl">Welcome</h1>
              <Image src={books} alt="books" className="" width={80}></Image>
            </div>
            <p className="font-medium text-center">
              Fill in the details to get started with the best AI based
              education app!
            </p>
            <div className="flex items-center justify-center w-full">
              <Tabs className="w-3/4">
                <TabsList className="bg-transparent rounded-none w-full">
                  <TabsTrigger
                    value="login"
                    className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300  hover:shadow-lg"
                  >
                    Login
                  </TabsTrigger>
                  <TabsTrigger
                    value="signup"
                    className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300 hover:shadow-lg"
                  >
                    Signup
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  className="flex flex-col gap-5 mt-10"
                  value="login"
                >
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    className="rounded-full p-6"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    className="rounded-full p-6"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button className="rounded-full p-6" onClick={handleLogin}>
                    Login
                  </Button>
                </TabsContent>
                <TabsContent className="flex flex-col gap-5" value="signup">
                  <Input
                    type="text"
                    placeholder="Name"
                    value={name}
                    className="rounded-full p-6"
                    onChange={(e) => setName(e.target.value)}
                  />

                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    className="rounded-full p-6"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    className="rounded-full p-6"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    className="rounded-full p-6"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <Button className="rounded-full p-6" onClick={handleSignup}>
                    Signup
                  </Button>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          <div className="hidden xl:flex justify-center items-center">
            <Image
              src={background}
              alt="background login"
              className="h-[70vh] w-[20vw] rounded-2xl shadow-md shadow-cyan-500"
              width={200}
              priority
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
