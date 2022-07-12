import { ArticleData } from '../entities/ArticleData'
import { ArticleBD } from './ArticleBD'
import { ArticleClientResponse, ArticlesClientResponse } from './ArticleClientResponse'

export interface IChange {
  [prop: string]:
    | string
    | number
    | {
        id: string
        provider: string
      }[]
}
export interface ArticleClient {
  getArticles(articlesBD: ArticleBD[]): ArticlesClientResponse
  getArticle(articleDB: ArticleBD): ArticleClientResponse
  postArticle(article: ArticleData): ArticleBD
  changeArticle(prop: IChange): void
  deleteArticle(id: number): void
  articlesForBD(articles: ArticleData[]): ArticleBD[]
}
