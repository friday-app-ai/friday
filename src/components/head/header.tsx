import React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  import design from "../../assets/designer_logo.jpg"
  import Image from "next/image";
  import Link from "next/link";
const Header:React.FC = () => {
    return (
//fixed bg-white top-0 left-0 right-0
        <div className=" bg-white  flex justify-between items-center h-[10vh] px-4 md:px-[2rem] lg:px-[5rem] text-black">
            <div className="flex items-center gap-[1rem]">
                <Link href="/" className="hidden sm:flex items-center gap-[1rem]">
            <Image  src={design}  alt="design" className="w-12 h-12 rounded-full hover:transform hover:scale-105" width={80} height={80} priority>
            </Image>
            <span className="hidden md:inline-block text-xl font-bold hover:transform hover:scale-105">Friday</span>
            </Link>

            </div>

            <NavigationMenu>
                <NavigationMenuList className="flex items-center xl:space-x-[15rem] lg:space-x-[10rem] md:space-x-[5rem]" >
                    <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink  className={navigationMenuTriggerStyle() }>
                            Home
                        </NavigationMenuLink>
                    </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                    <Link href="/courses" legacyBehavior passHref>
                        <NavigationMenuLink  className={navigationMenuTriggerStyle() }>
                            My Courses
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

            <NavigationMenu >
        <NavigationMenuList className="gap-[2rem]">
        <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-slate-300 text-black hover:bg-slate-700 hover:text-white `}>
                            Account
                        </NavigationMenuLink>
                    </Link>
                    </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/auth" legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-blue-500 text-white hover:bg-blue-700 hover:text-white `}>
                Logout
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

        </div>

        
    )
}

export default Header;
