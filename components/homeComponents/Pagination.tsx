"use client";

import Link from "next/link";
// import React, { useState } from "react";
import { Button } from "../ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getPostForPagination } from "@/graphql/services";
import { after } from "node:test";

export function Pagination() {
  let path = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  let page: number = Number(searchParams.get("page"));
  // const [currentPage, setCurrentPage] = useState<number>(1);
  const [after, setAfter] = useState<string | "">("");
  // const [before, setBefore] = useState<string | "">("");
  const [posts, setPosts] = useState<any>([]);
  const first: number = 3;

  useEffect(() => {
    async function getData() {
      const pos = await getPostForPagination(first, after);
      console.log(pos);
    }
    getData();
  }, []);

  return (
    <div className="flex justify-between items-stretch gap-4 pb-16 w-full">
      <div>
        <Button
          variant="ghost"
          className="flex items-center gap-2 rounded-full dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
          onClick={() => router.push(path + `?page=${page - 1}`)}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          Previous
        </Button>
      </div>

      {/* <div className="flex items-center gap-2"> */}

      {/* <Button
          // {...getItemProps(1)}
          className="dark:hover:bg-white rounded-full dark:hover:text-black hover:bg-black hover:text-white"
        >
          1
        </Button> */}
      {/* </div> */}

      <div>
        <Button
          variant="ghost"
          className="flex items-center gap-2 rounded-full dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
          onClick={() => router.push(path + `?page=${page + 1}`)}
        >
          Next
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </Button>
      </div>
    </div>
  );
}
