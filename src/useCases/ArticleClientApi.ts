import { ArticleData } from '../entities/ArticleData'
import { ArticleClient } from './ArticleClient'
import { ArticlesClientResponse, ArticleClientResponse } from './ArticleClientResponse'

export class ArticleClientApi implements ArticleClient {
  getArticles (limit: number, start: number): Promise<ArticlesClientResponse> {
    throw new Error('Method not implemented.')
  }

  getArticle (id: number): Promise<ArticleClientResponse> {
    throw new Error('Method not implemented.')
  }

  postArticle (article: ArticleData): Promise<void> {
    throw new Error('Method not implemented.')
  }

  changeArticle (id: number): Promise<void> {
    throw new Error('Method not implemented.')
  }

  deleteArticle (id: number): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
