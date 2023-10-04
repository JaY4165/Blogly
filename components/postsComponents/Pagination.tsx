"use client";

import { getPostForPaginationData } from "@/graphql/services";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { usePostsPagination } from "@/context/PostsPagination";

export function Pagination() {
  const first: number = 3;
  const [afterCursor, setAfterCursor] = useState<string | null>(null);
  const { setPaginatedPosts, paginatedPosts } = usePostsPagination();
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

  // useEffect(() => {
  //   fetcher(first, afterCursor)
  //     .then((postsData) => {
  //       console.log(postsData?.postsConnection?.pageInfo?.endCursor);
  //       setAfterCursor(postsData?.postsConnection?.pageInfo?.endCursor);
  //       setPaginatedPosts([
  //         ...paginatedPosts,
  //         ...postsData?.postsConnection?.edges,
  //       ]);
  //       if (postsData?.postsConnection?.pageInfo?.endCursor === null) {
  //         console.log("äll posts done");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [act, setPaginatedPosts]);

  return (
    <>
      {hasNext === true ? (
        <div ref={loaderRef} className="spin-in-0">
          <div className="flex justify-center items-center">
            <div className="w-6 h-6 border-2 border-gray-500 rounded-full animate-spin"></div>
          </div>
        </div>
      ) : null}
    </>
  );
}
