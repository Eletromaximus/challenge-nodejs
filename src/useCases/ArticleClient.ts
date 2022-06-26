import { ArticleData } from '../entities/ArticleData'
import { ArticleClientResponse, ArticlesClientResponse } from './ArticleClientResponse'

export interface ArticleClient {
  getArticles(limit: number, start: number): Promise<ArticlesClientResponse>
  getArticle(id: number): Promise<ArticleClientResponse>
  postArticle(article: ArticleData): Promise<void>
  changeArticle(id: number): Promise<void>
  deleteArticle(id: number): Promise<void>
}
