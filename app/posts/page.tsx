import React from "react";
import AllPostsOfPagination from "@/components/postsComponents/AllPostsOfPagination";
import { getPostForPagination } from "@/graphql/services";

async function Posts() {
  // const pos = await getPostForPagination();
  // console.log(pos);

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
