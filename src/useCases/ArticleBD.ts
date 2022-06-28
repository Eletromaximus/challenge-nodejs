export interface ArticleBD {
  id: number,
  title: string,
  featured: boolean,
  imageUrl: string,
  url: string,
  newsSite: string,
  summary: string,
  publishedAt: string,
  launchesId: string[],
  launchesProvider: string[],
  eventsId: string[],
  eventsProvider: string[]
}
