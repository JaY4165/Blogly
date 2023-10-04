import { Edge } from "@/types/types";
import PostCard from "./PostCard";
import { Suspense } from "react";

const PostsContainer = ({ postsData }: { postsData: Edge[] }) => {
  return <PostCard postsCardData={postsData} />;
};

export default PostsContainer;
