"use client";

import { Edge } from "@/types/types";
import React, { ReactNode, createContext, useContext, useState } from "react";

interface PostsPaginationContextValue {
  paginatedPosts: Edge[];
  setPaginatedPosts: React.Dispatch<React.SetStateAction<Edge[]>>;
}

const defaultContextValue: PostsPaginationContextValue = {
  paginatedPosts: [],
  setPaginatedPosts: () => {},
};

const PostsPaginationContext = createContext(defaultContextValue);

export const PostsPaginationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [paginatedPosts, setPaginatedPosts] = useState<Edge[]>([]);

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
