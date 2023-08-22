import PostCard from "@/components/homeComponents/PostCard";
import React from "react";

function Posts() {
  return (
    <div>
      <h1>Posts</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 sm:grid-flow-row md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:grid-flow-row pt-10 gap-14 pb-20">
        {/* <Posts postsData={otherPosts} /> */}
      </section>
    </div>
  );
}

export default Posts;
