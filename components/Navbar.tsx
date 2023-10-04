"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { Input } from "@/components/ui/input";

import Link from "next/link";
import { ModeToggle } from "./ui/themeToggleButton";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import LogInOutBtn from "./LogInOutBtn";
import { cn } from "@/lib/utils";
import React from "react";

const components: { title: string; href: string }[] = [
  {
    title: "Posts",
    href: "/posts",
  },
  {
    title: "Authors",
    href: "/authors",
  },
];

const Navbar = () => {
  return (
    <header className="pt-5 max-sm:max-w-full max-md:flex max-md:items-center">
      <NavigationMenu className="flex justify-start max-w-full  md:flex items-center md:justify-between">
        <NavigationMenuList className="max-md:hidden">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-[rgb(243,244,246,0.3)] rounded-xl dark:bg-black/30">
              <ul className="grid w-[10vw] text-center gap-3 p-4 grid-cols-1 ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                    className="hover:bg-slate-100"
                  ></ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>

        <div className="max-md:pl-4">
          <Link href={"/"}>
            <h1 className=" text-lg sm:text-2xl tracking-[1em]">BLOGLY</h1>
          </Link>
        </div>

        <div className="md:hidden max-md:ml-auto max-md:pr-3">
          {mobileModal()}
        </div>

        <NavigationMenuList className="max-md:hidden ">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className="hover:bg-none">
                <HoverCard openDelay={0}>
                  <HoverCardTrigger asChild>
                    <Button
                      size={"icon"}
                      className="dark:hover:bg-black/30 dark:hover:border-none dark:outline-none"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="dark:bg-black/30 dark:border-none dark:outline-none rounded-2xl">
                    <div>
                      <Input
                        type="text"
                        placeholder="Search"
                        className="w-full dark:bg-black/30 dark:border-none "
                      />
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
          <NavigationMenuItem className="px-3">
            <NavigationMenuLink className={"bg-none"}>
              <LogInOutBtn />
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Navbar;
const mobileNav = (
  <>
    <Link href="/" legacyBehavior passHref>
      Home
    </Link>
    <Link href="/posts" legacyBehavior passHref>
      Posts
    </Link>
    <Link href="/authors" legacyBehavior passHref>
      Authors
    </Link>
  </>
);

const mobileModal = () => {
  return (
    <Sheet>
      <SheetTrigger className="pt-2">
        <svg
          width="20"
          height="20"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 4C2.22386 4 2 4.22386 2 4.5C2 4.77614 2.22386 5 2.5 5H12.5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4H2.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </SheetTrigger>
      <SheetContent className=" dark:bg-black/30 dark:border-none flex flex-col">
        {mobileNav}
      </SheetContent>
    </Sheet>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:bg-[rgb(243,244,246) dark:hover:bg-black/40",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
