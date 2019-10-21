export interface PostsResponse {
  posts: Post[]
}

export interface Post {
  node: {
    createdAt: string
    id: string
    slug: string
    title: string
    tags: string[]
  }
}