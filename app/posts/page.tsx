import { Pagination } from "@/components/homeComponents/Pagination";
import React from "react";
import { getAllPostsForPagination } from "@/graphql/services";
import PostsContainer from "@/components/homeComponents/PostsContainer";
import AllPostsOfPagination from "@/components/postsComponents/AllPostsOfPagination";

async function Posts() {
  return (
    <div>
      <h1 className="text-center text-3xl pt-16 font-thin tracking-widest">
        ALL POSTS
      </h1>
      <AllPostsOfPagination />
    </div>
  );
}

export default Posts;
