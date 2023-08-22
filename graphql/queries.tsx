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

export const queryToGetPostBySlug = gql`
  query postBySlug($slug: String!) {
    post(where: { slug: $slug }) {
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
        json
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

export const getAllPostsForPagination = gql`
  query allPosts {
    postsConnection(first: 5) {
      edges {
        node {
          author {
            id
            name
            description
          }
          createdAt
          slug
          title
          excerpt
          featuredImage {
            url
          }
        }
      }
      pageInfo {
        hasNextPage
        pageSize
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;
