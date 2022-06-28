import { Request, Response } from 'express'
import { ArticleData } from '../entities/ArticleData'
import { ArticleClientApi } from '../useCases/ArticleClientApi'
import { api } from '../utils/api'
import { SendArticleError } from './errors/SendArticleError'
import { PrismaDB } from './PrismaDB'

export class AdapterDB {
  constructor (
    private articleClientApi: ArticleClientApi,
    private prismaDB: PrismaDB
  ) {
    this.articleClientApi = articleClientApi
    this.prismaDB = prismaDB
  }

  async articlesAdapted (req: Request, res: Response) {
    try {
      const { start } = req.query

      const articlesDb = await this.prismaDB.getArticles(Number(start))

      const articles = this.articleClientApi.getArticles(articlesDb)

      return res.status(200).json(articles)
    } catch (error: any) {
      return res.status(400).json(error.message || 'Unexpected error')
    }
  }

  async articlesForApiConverted (req: Request, res: Response) {
    try {
      const articlesFromApi: ArticleData[] = await api.get('/articles', {
        params: {
          _limit: 15,
          _start: 1
        }
      })
        .then(result => {
          if (result.status === 200) {
            return result.data
          }
          throw new SendArticleError()
        })
        .catch(() => {
          throw new Error('Unexpected Error')
        })

      const articlesConverted = this.articleClientApi.articlesForBD(articlesFromApi)
      this.prismaDB.getArticlesForApi(articlesConverted)

      return res.status(200).json({ message: 'ok' })
    } catch (error: any) {
      return res.status(400).json({
        message: error.message || 'Unexpected Error'
      })
    }
  }
}
