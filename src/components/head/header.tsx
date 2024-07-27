"use client";
import React from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import design from "../../assets/designer_logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const Header: React.FC = () => {
    const { status } = useSession();
    const router = useRouter();
    return (
        //fixed bg-white top-0 left-0 right-0
        <div className=" bg-white  flex justify-between items-center h-[10vh] px-4 md:px-[2rem] lg:px-[5rem] text-black shadow-custom">
            <div className="flex items-center gap-[1rem]">
                <Link href="/" className="hidden sm:flex items-center gap-[1rem]">
                    <i className="fa-solid fa-person-chalkboard fa-2x text-cyan-600"></i>
                    <span className="hidden md:inline-block text-xl font-sans  hover:transform hover:scale-105">
                        Friday
                    </span>
                </Link>
            </div>

            <NavigationMenu>
                <NavigationMenuList className="flex items-center xl:space-x-[15rem] lg:space-x-[10rem] md:space-x-[5rem]">
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/courses" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Courses
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                About
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
                <NavigationMenuList className="gap-[2rem]">
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            onClick={() => {
                                if (status === "authenticated") {
                                    signOut();
                                } else {
                                    router.push("/auth");
                                }
                            }}
                            className={`${navigationMenuTriggerStyle()} bg-blue-500 text-white hover:bg-blue-700 hover:text-white cursor-pointer `}
                        >
                            {status === "authenticated" ? "Logout" : "Login"}
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
};

export default Header;
