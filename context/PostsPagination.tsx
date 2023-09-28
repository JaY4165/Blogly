import { Edge } from "@/types/types";
import React, { ReactNode, createContext, useContext, useState } from "react";

// interface PostsPaginationContextValue {
//     paginatedPosts: any[];
//     setPaginatedPosts: React.Dispatch<React.SetStateAction<any[]>>;
// }

const PostsPaginationContext = createContext<any | null>(null);

export const PostsPaginationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [paginatedPosts, setPaginatedPosts] = useState<any[]>([]);

  return (
    <PostsPaginationContext.Provider
      value={{ paginatedPosts, setPaginatedPosts }}
    >
      {children}
    </PostsPaginationContext.Provider>
  );
};

export const usePostsPagination = () => {
  const context = useContext(PostsPaginationContext);
  if (context === undefined) {
    throw new Error("Context not provided");
  }
  return context;
};

export default PostsPaginationProvider;
