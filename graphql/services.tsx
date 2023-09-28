import { GraphQLClient } from "graphql-request";
import {
  queryToGetAllPosts,
  queryToGetAllPostsForPagination,
  queryToGetPostBySlug,
} from "./queries";
import { Data, Edge, Post } from "@/types/types";

export const client = new GraphQLClient(
  String(process.env.HYGRAPH_CMS_ENDPOINT)
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

export const getAllPostsForPagination = async (
  pageSize: number,
  after: string
) => {
  const response: any = await client.request(queryToGetAllPostsForPagination, {
    pageSize,
    after,
  });
  const res: any = response.postsConnection;
  return res;
};
