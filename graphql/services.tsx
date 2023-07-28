import { GraphQLClient } from "graphql-request";
import { queryToGetAllPosts } from "./queries";
// import { Data, Edge } from "@/types";

export const client = new GraphQLClient(
  String(process.env.HYGRAPH_CMS_ENDPOINT)
);

export const getAllPosts = async () => {
  const response: any = await client.request(queryToGetAllPosts);
  const res : any = response.postsConnection.edges;
  return res;
};
