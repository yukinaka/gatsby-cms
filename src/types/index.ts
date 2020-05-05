export interface PostsResponse {
  posts: Post[]
}

export interface Post {
  node: {
    publishedAt: string
    id: string
    slug: string
    title: string
    tags: string[]
  }
}
