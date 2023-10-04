import { GraphQLClient } from "graphql-request";
import {
  queryToGetAllAuthors,
  queryToGetAllPosts,
  queryToGetPostBySlug,
  queryToGetPostsForPaginationData,
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

export const getPostForPaginationData = async (
  first: number,
  after: string | null
) => {
  const response: any = await cl.request(queryToGetPostsForPaginationData, {
    first: first,
    after: after,
  });
  const res: any = response;
  return res;
};

export const getAllAuthors = async () => {
  const response: any = await client.request(queryToGetAllAuthors);
  return response
};
