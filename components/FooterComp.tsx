import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function FooterComp() {
  return (
    <footer className="dark:bg-black/30 px-1 lg:px-32 pt-14 pb-5 bg-gray-100">
      <div className="px-5 sm:px-10 flex flex-col items-center space-y-7">
        <h1 className="dark:text-white text-black text-3xl text-center">
          Lets get started on something great.
        </h1>
        <h3 className="dark:text-white text-black text-center">
          Join over 40000+ developers already growing with blogly
        </h3>
        {/* <Button
          variant={"outline"}
          className="rounded-3xl dark:border-white dark:bg-none dark:outline-none border-black bg-none"
        >
          Start your free trial
        </Button> */}
      </div>
      <div className="flex items-center px-5 sm:px-10 justify-center py-7 space-x-5">
        <Button variant={"link"}>
          <Link href={"/"}>Home </Link>
        </Button>
        <Button variant={"link"}>
          <Link href={"/"}>About</Link>
        </Button>
        <Button variant={"link"}>
          <Link href={"/"}>Contact</Link>
        </Button>
      </div>
      <div className="flex items-center px-5 sm:px-10 justify-between pt-1 space-x-5">
        <h1 className=" text-sm sm:text-md tracking-[1em]">BLOGLY</h1>
        <p className="dark:text-white text-sm text-black text-center">
          &copy; 2023 Blogly. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default FooterComp;
