"use client";

import React from "react";
import { Button } from "./ui/button";
import { useUserAuth } from "@/context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const LogInOutBtn = () => {
  const { user, logOut, signInWithGoogle } = useUserAuth();

  const handleSignIn = async () => {
    try {
      signInWithGoogle();
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      logOut();
    } catch (error: unknown) {
      console.log(error);
    }
  };

  return (
    <>
      {user ? (
        // <Button
        //   onClick={handleSignOut}
        //   className="bg-black text-white dark:bg-white dark:text-black outline-none border-none dark:hover:bg-white hover:bg-black hover:text-white"
        // >
        //   logout
        // </Button>

        <HoverCard openDelay={0}>
          <HoverCardTrigger className="hover:cursor-pointer">
            <Avatar>
              <AvatarImage src={String(user?.photoURL)} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </HoverCardTrigger>
          <HoverCardContent className="flex flex-col w-auto space-y-2 rounded-2xl dark:bg-black/30 dark:border-none dark:outline-none">
            <Button
              variant={"ghost"}
              className="dark:hover:bg-black/30 hover:cursor-default"
              // className="bg-black text-white dark:bg-white dark:text-black outline-none border-none dark:hover:bg-white hover:bg-black hover:text-white"
            >
              logged in as {user?.displayName}
            </Button>
            <Button
              onClick={handleSignOut}
              variant={"ghost"}
              className="dark:hover:bg-black/30"
              // className="bg-black text-white dark:bg-white dark:text-black outline-none border-none dark:hover:bg-white hover:bg-black hover:text-white"
            >
              log out
            </Button>
          </HoverCardContent>
        </HoverCard>
      ) : (
        <Button
          onClick={handleSignIn}
          className="bg-black text-white dark:bg-white dark:text-black outline-none border-none dark:hover:bg-white hover:bg-black hover:text-white"
        >
          login
        </Button>
      )}
    </>
  );
};

export default LogInOutBtn;
