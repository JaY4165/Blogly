import { gql } from "graphql-request";

export const queryToGetAllPosts = gql`
  query allPosts {
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

export const getPostBySlug = gql`
  query postBySlug {
    post(where: { slug: String! }) {
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
      content {
        html
      }
      featuredImage {
        url
      }
      categories {
        name
        slug
      }
    }
  }
`;

export const getAllCategories = gql`
  query allCategories {
    categories {
      name
      slug
    }
  }
`;
