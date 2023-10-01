"use client";

import { Button } from "../ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  getPostForPagination,
  getPostForPaginationNext,
  getPostForPaginationPrev,
} from "@/graphql/services";
import { usePostsPagination } from "@/context/PostsPagination";
import ReactPaginate from "react-paginate";

export function Pagination() {
  const { setPaginatedPosts } = usePostsPagination();
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPosts, setTotalPosts] = useState<number>(0);
  const [postsPerPage] = useState<number>(3);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        const allData = await getPostForPagination();
        setTotalPosts(allData?.postsConnection?.pageInfo?.pageSize);
        setBlogPosts(allData?.postsConnection?.edges);
        setLoading(false);
        console.log(totalPosts);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
        console.log(totalPosts, "total");
      }
    };
    fetchBlogPosts();
  }, [currentPage, postsPerPage, setPaginatedPosts, totalPosts]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    console.log(postsPerPage);
    if (currentPage !== Math.ceil(totalPosts / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  useEffect(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

    setPaginatedPosts(currentPosts);
  }, [currentPage, blogPosts, setPaginatedPosts]);

  return (
    <>
      {/* <div className="pagination-container">
        <ul className="pagination">
          <Button
            variant={"destructive"}
            onClick={previousPage}
            className="page-number"
          >
            Prev
          </Button>
          {pageNumbers.map((number) => (
            <li
              key={number}
              onClick={() => paginate(number)}
              className={
                "page-number " + (number === currentPage ? "active" : "")
              }
            >
              {number}
            </li>
          ))}
          <Button
            variant={"destructive"}
            onClick={nextPage}
            className="page-number"
          >
            Next
          </Button>
        </ul>
      </div> */}

      <div className="flex items-center gap-4 pb-16">
        <Button
          variant="ghost"
          className="flex items-center gap-2 rounded-full dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
          onClick={previousPage}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          Previous
        </Button>
        <div className="flex items-center gap-2">
          {pageNumbers.map((number) => (
            <Button
              key={number}
              onClick={() => paginate(number)}
              className={`dark:hover:bg-white rounded-full dark:hover:text-black hover:bg-black hover:text-white ${
                number === currentPage ? "bg-black text-white" : ""
              }`}
            >
              {number}
            </Button>
          ))}

          {/* <Button
            {...getItemProps(1)}
            className="dark:hover:bg-white rounded-full dark:hover:text-black hover:bg-black hover:text-white dark:"
          >
            1
          </Button> */}
        </div>
        <Button
          variant="ghost"
          className="flex items-center gap-2 rounded-full dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
          onClick={nextPage}
        >
          Next
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </Button>
      </div>
    </>
  );
}
