import { GraphQLClient } from "graphql-request";
import {
  queryToGetAllPosts,
  queryToGetAllPostsForPagination,
  queryToGetPostBySlug,
} from "./queries";
import { Data, Edge, Post, PostsConnection } from "@/types/types";
import Slug from "@/app/post/[slug]/page";

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

export const getAllPostsForPagination = async () => {
  const response: any = await client.request(queryToGetAllPostsForPagination);
  const res: any = response.postsConnection.edges;
  return res;
};
