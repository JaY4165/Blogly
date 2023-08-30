import { Edge } from "@/types/types";
import PostCard from "./PostCard";
// import { Edge } from "@/types";

const PostsContainer = ({ postsData }: { postsData: Edge[] }) => {
  return <PostCard postsCardData={postsData} />;
};

export default PostsContainer;
