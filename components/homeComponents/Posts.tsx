import PostCard from "./PostCard";
// import { Edge } from "@/types";

const Posts = ({ postsData }: { postsData: any }) => {
  return <PostCard postsCardData={postsData} />;
};

export default Posts;
