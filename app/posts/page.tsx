import React from "react";
import AllPostsOfPagination from "@/components/postsComponents/AllPostsOfPagination";

async function Posts() {
  return (
    <div className="px-5">
      <h1 className="text-center text-3xl pt-16 font-thin tracking-widest">
        ALL POSTS
      </h1>

      <AllPostsOfPagination />
    </div>
  );
}

export default Posts;
