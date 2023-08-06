"use client";

import React, { useContext } from "react";
import { Button } from "./ui/button";
import AuthContext, { AuthContextProps } from "@/context/AuthContext";

const LogInOutBtn = () => {
  const AuthController = useContext<AuthContextProps | null>(AuthContext);

  const handleSignIn = async () => {
    try {
      if (AuthController?.user) {
        AuthController?.logOut();
      } else {
        AuthController?.googleSignIn();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
      onClick={handleSignIn}
      className="bg-black text-white dark:bg-white dark:text-black outline-none border-none dark:hover:bg-white hover:bg-black hover:text-white"
    >
      {AuthController?.user ? "Logout" : "Login"}
    </Button>
  );
};

export default LogInOutBtn;
