"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HoverCard } from "@radix-ui/react-hover-card";
import { HoverCardContent, HoverCardTrigger } from "./hover-card";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <HoverCard openDelay={0}>
      <HoverCardTrigger asChild className="dark:outline-none dark:border-none">
        <Button
          size="icon"
          className="dark:outline-none dark:hover:bg-none dark:focus:bg-none dark:border-none"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent
        align="end"
        className="flex flex-col w-auto space-y-2 rounded-2xl dark:bg-black/30 dark:border-none dark:outline-none"
      >
        <Button variant={"ghost"} onClick={() => setTheme("light")}>
          Light
        </Button>
        <Button variant={"ghost"} onClick={() => setTheme("dark")}>
          Dark
        </Button>
        <Button variant={"ghost"} onClick={() => setTheme("system")}>
          System
        </Button>
      </HoverCardContent>
    </HoverCard>
  );
}
