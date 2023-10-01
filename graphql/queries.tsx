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

export const queryToGetAllCategories = gql`
  query allCategories {
    categories {
      name
      slug
    }
  }
`;

export const queryToGetPostsForPaginationNextData = gql`
  query allPoststoPaginate($first: Int, $after: String) {
    postsConnection(first: $first, after: $after) {
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
          categories {
            name
            slug
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

export const queryToGetPostsForPaginationPrevData = gql`
  query allPoststoPaginate($first: Int, $before: String) {
    postsConnection(first: $first, before: $before) {
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
          categories {
            name
            slug
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

export const queryToGetPostsForPaginationData = gql`
  query allPoststoPaginate() {
    postsConnection() {
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
          categories {
            name
            slug
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
