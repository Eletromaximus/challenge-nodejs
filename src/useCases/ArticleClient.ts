import { ArticleData } from '../entities/ArticleData'
import { ArticleBD } from './ArticleBD'
import { ArticleClientResponse, ArticlesClientResponse } from './ArticleClientResponse'

export interface ArticleClient {
  getArticles(articlesBD: ArticleBD[]): ArticlesClientResponse
  getArticle(id: number): Promise<ArticleClientResponse>
  postArticle(article: ArticleData): Promise<void>
  changeArticle(id: number): Promise<void>
  deleteArticle(id: number): Promise<void>
}
