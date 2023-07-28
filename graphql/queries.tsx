import { gql } from "graphql-request";

export const queryToGetAllPosts = gql`
  query Authors {
    postsConnection {
      edges {
        node {
          author {
            id
            name
            description
            profilePicture {
              url
            }
          }
          createdAt
          slug
          title
          excerpt
          featuredImage {
            url
          }
          categories {
            name
            slug
          }
        }
      }
    }
  }
`;
