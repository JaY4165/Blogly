"use client";

import React, { useContext } from "react";
import { Button } from "./ui/button";

const LogInOutBtn = () => {
  return (
    <Button
      //   onClick={handleSignIn}
      className="bg-black text-white dark:bg-white dark:text-black outline-none border-none dark:hover:bg-white hover:bg-black hover:text-white"
    >
      {true ? "Logout" : "Login"}
    </Button>
  );
};

export default LogInOutBtn;
