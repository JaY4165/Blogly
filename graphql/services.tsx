import { GraphQLClient } from "graphql-request";
import {
  queryToGetAllPosts,
  queryToGetPostBySlug,
  queryToGetPostsForPaginationData,
  queryToGetPostsForPaginationNextData,
  queryToGetPostsForPaginationPrevData,
} from "./queries";
import { Data, Edge, Post } from "@/types/types";

export const client = new GraphQLClient(
  String(process.env.HYGRAPH_CMS_ENDPOINT)
);

export const cl = new GraphQLClient(
  String(process.env.NEXT_PUBLIC_HYGRAPH_CMS_ENDPOINT)
);

export const getAllPosts = async () => {
  const response: Data = await client.request(queryToGetAllPosts);
  const res: Edge[] = response.postsConnection.edges;
  return res;
};

export const getPostBySlug = async (slugName: string) => {
  const response: any = await client.request(queryToGetPostBySlug, {
    slug: slugName,
  });
  const res: Post = response.post;
  return res;
};

export const getPostForPaginationNext = async (
  first: number,
  after: string | null
) => {
  const response: any = await cl.request(queryToGetPostsForPaginationNextData, {
    first: first,
    after: after,
  });
  const res: any = response;
  return res;
};

export const getPostForPaginationPrev = async (
  first: number,
  before: string | null
) => {
  const response: any = await cl.request(queryToGetPostsForPaginationPrevData, {
    first: first,
    before: before,
  });
  const res: any = response;
  return res;
};

export const getPostForPagination = async () => {
  const response: any = await cl.request(queryToGetPostsForPaginationData);
  const res: any = response;
  return res;
};
