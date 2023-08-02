import { GraphQLClient } from "graphql-request";
import { queryToGetAllPosts } from "./queries";
import { Data, Edge, PostsConnection } from "@/types/types";

export const client = new GraphQLClient(
  String(process.env.HYGRAPH_CMS_ENDPOINT)
);

export const getAllPosts = async () => {
  const response: Data = await client.request(queryToGetAllPosts);
  const res: Edge[] = response.postsConnection.edges;
  return res;
};
