"use client";

import React from "react";
import PostsContainer from "../homeComponents/PostsContainer";
import { Pagination } from "./Pagination";
import { usePostsPagination } from "@/context/PostsPagination";

function AllPostsOfPagination() {
  const { paginatedPosts } = usePostsPagination();

  return (
    <div>
      <section className="grid grid-cols-1 sm:grid-cols-2 sm:grid-flow-row md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:grid-flow-row pt-10 gap-14 pb-20">
        <PostsContainer postsData={paginatedPosts} />
      </section>

      <div className="flex justify-center">
        <Pagination />
      </div>
    </div>
  );
}

export default AllPostsOfPagination;
