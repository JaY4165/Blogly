export interface MainType {
    data: Data;
}

export interface Data {
    postsConnection: PostsConnection;
}

export interface PostsConnection {
    edges: Edge[];
}

export interface Edge {
    node: Node;
}

export interface Node {
    author: Author;
    createdAt: Date;
    slug: string;
    title: string;
    excerpt: string;
    featuredImage: FeaturedImage;
    categories: Category[];
}

export interface Author {
    id: string;
    name: string;
    description: string;
    profilePicture: FeaturedImage;
}

export interface FeaturedImage {
    url: string;
}

export interface Category {
    name: string;
    slug: string;
}
