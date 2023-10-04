"use client";

import { getPostForPaginationData } from "@/graphql/services";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePostsPagination } from "@/context/PostsPagination";

export function Pagination() {
  const first: number = 3;
  const [afterCursor, setAfterCursor] = useState<string | null>(null);
  const { setPaginatedPosts, paginatedPosts, setUiLoading } =
    usePostsPagination();
  const [hasNext, setHasNext] = useState<boolean>(true);
  const loaderRef = useRef(null);

  const fetcher = useCallback(
    async (postsNo: number, after: string | null) => {
      try {
        if (!hasNext) {
          console.log("fetched all ");
          return;
        }
        const data = await getPostForPaginationData(postsNo, after);
        setAfterCursor(data?.postsConnection?.pageInfo?.endCursor);
        setHasNext(data?.postsConnection?.pageInfo?.hasNextPage);
        setPaginatedPosts([...paginatedPosts, ...data?.postsConnection?.edges]);
        setUiLoading(false);
      } catch (error) {
        console.log("error occured while fetching");
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [afterCursor, paginatedPosts, hasNext]
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const firstEntry = entries[0];
      if (firstEntry.isIntersecting) {
        fetcher(first, afterCursor);
      }
    });
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetcher]);

  return (
    <>
      {hasNext === true ? (
        <div ref={loaderRef} className="spin-in-0">
          <div className="flex justify-center items-center pt-10 pb-20">
            {/* <div className="w-6 h-6 border-2 border-gray-500 rounded-full animate-spin"></div> */}
            <span className="relative flex h-10 w-10">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black/25"></span>
              <span className="relative inline-flex rounded-full h-10 w-10 bg-black/25"></span>
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
}
