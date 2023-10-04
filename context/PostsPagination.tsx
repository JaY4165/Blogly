"use client";

import { Edge } from "@/types/types";
import React, { ReactNode, createContext, useContext, useState } from "react";

interface PostsPaginationContextValue {
  paginatedPosts: Edge[];
  setPaginatedPosts: React.Dispatch<React.SetStateAction<Edge[]>>;
  uiLoading: boolean;
  setUiLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultContextValue: PostsPaginationContextValue = {
  paginatedPosts: [],
  setPaginatedPosts: () => {},
  uiLoading: true,
  setUiLoading: () => {},
};

const PostsPaginationContext = createContext(defaultContextValue);

export const PostsPaginationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [paginatedPosts, setPaginatedPosts] = useState<Edge[]>([]);
  const [uiLoading, setUiLoading] = useState<boolean>(false);

  return (
    <PostsPaginationContext.Provider
      value={{ paginatedPosts, setPaginatedPosts, uiLoading, setUiLoading }}
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
