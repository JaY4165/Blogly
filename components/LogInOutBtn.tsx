"use client";

import React from "react";
import { Button } from "./ui/button";
import { useUserAuth } from "@/context/AuthContext";

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
      console.log(user, "user logged out");
      logOut();
    } catch (error: unknown) {
      console.log(error);
    }
  };

  console.log(user);
  return (
    <>
      {user ? (
        <Button
          onClick={handleSignOut}
          className="bg-black text-white dark:bg-white dark:text-black outline-none border-none dark:hover:bg-white hover:bg-black hover:text-white"
        >
          logout
        </Button>
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
