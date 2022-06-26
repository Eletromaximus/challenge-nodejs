export interface ArticleData {
  id: number
  title: string
  featured: boolean
  imageUrl: string
  url: string
  newsSite: string
  summary: string
  publishedAt: string
  launches: {
    id: string,
    provider: string
  }[] | []

  events: {
    id: string,
    provider: string
  }[] | []
}
