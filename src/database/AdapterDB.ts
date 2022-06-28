import { Request, Response } from 'express'
import { ArticleClientApi } from '../useCases/ArticleClientApi'
import { PrismaDB } from './PrismaDB'

export class AdapterDB {
  constructor (
    private articleClientApi: ArticleClientApi,
    private prismaDB: PrismaDB
  ) {
    this.articleClientApi = articleClientApi
    this.prismaDB = prismaDB
  }

  async ArticlesAdapted (req: Request, res: Response) {
    try {
      const { start } = req.query

      const articlesDb = await this.prismaDB.getArticles(Number(start))

      const articles = this.articleClientApi.getArticles(articlesDb)

      return res.status(200).json(articles)
    } catch (error: any) {
      return res.status(400).json(error.message || 'Unexpected error')
    }
  }
}
