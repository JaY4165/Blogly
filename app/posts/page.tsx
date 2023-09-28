import { Pagination } from "@/components/homeComponents/Pagination";
import React from "react";
import { getAllPostsForPagination } from "@/graphql/services";
import PostsContainer from "@/components/homeComponents/PostsContainer";

async function Posts() {
  const allPostsData = await getAllPostsForPagination();
  

  return (
    <div>
      <h1 className="text-center text-3xl pt-16 font-thin tracking-widest">
        ALL POSTS
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 sm:grid-flow-row md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:grid-flow-row pt-10 gap-14 pb-20">
        <PostsContainer postsData={allPostsData.edges} />
      </section>
      <div className="flex justify-center">
        <Pagination pageInformation={allPostsData.pageInfo}/>
      </div>
    </div>
  );
}

export default Posts;
