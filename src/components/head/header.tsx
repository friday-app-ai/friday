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

        <div className=" fixed bg-white top-0 left-0 right-0 flex justify-between items-center h-[10vh] px-4 md:px-[2rem] lg:px-[5rem] text-black">
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
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Features
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
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/auth" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Signup/Login
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

        </div>

        
    )
}

export default Header;
