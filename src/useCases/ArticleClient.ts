import { ArticleData } from '../entities/ArticleData'
import { ArticleBD } from './ArticleBD'
import { ArticleClientResponse, ArticlesClientResponse } from './ArticleClientResponse'

export interface IChange {
  id: number
  title?: string
  featured?: boolean
  imageUrl?: string
  url?: string
  newsSite?: string
  summary?: string
  publishedAt?: string
  launches?:
    | {
        id: string
        provider: string
      }[]
    | []

  events?:
    | {
        id: string
        provider: string
      }[]
    | []
  health?: string
}
export interface ArticleClient {
  getArticles(articlesBD: ArticleBD[]): ArticlesClientResponse
  getArticle(articleDB: ArticleBD): ArticleClientResponse
  postArticle(article: ArticleData): ArticleBD
  changeArticle(articleDB: ArticleBD, changes: IChange): ArticleBD
  deleteArticle(id: number): void
  articlesForBD(articles: ArticleData[]): ArticleBD[]
}
