import { Prisma } from '@prisma/client'
import { Request, Response } from 'express'
import { ArticleData } from '../entities/ArticleData'
import { ArticleClientApi } from '../useCases/ArticleClientApi'
import { api } from '../utils/api'
import { SendArticleError } from './errors/SendArticleError'
import { PrismaDB } from './PrismaDB'

export class AdapterDB {
  constructor(private articleClientApi: ArticleClientApi, private prismaDB: PrismaDB) {
    this.articleClientApi = articleClientApi
    this.prismaDB = prismaDB
  }

  async getArticles(req: Request, res: Response) {
    try {
      let { start } = req.query

      if (!start) {
        start = '1'
      }

      const page = Number(start) <= 0 ? 1 : Number(start) - 1

      if (!Number.isInteger(page)) {
        throw new Error('Bad Request')
      }

      const articlesDb = await this.prismaDB.getArticles(page || 1)

      const articles = this.articleClientApi.getArticles(articlesDb)

      return res.status(200).json(articles)
    } catch (error: any) {
      return res.status(400).json(error.message || 'Unexpected error')
    }
  }

  async articlesForApiConverted(req: Request, res: Response) {
    try {
      const articlesFromApi: ArticleData[] = await api
        .get('/articles', {
          params: {
            _limit: 15,
            _start: 1,
          },
        })
        .then((result) => {
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
        message: error.message || 'Unexpected Error',
      })
    }
  }

  async getArticle(req: Request, res: Response) {
    try {
      const id = req.params.id

      if (!id || Number(id) < 0 || !Number.isInteger(id)) {
        throw new Error('Bad Params')
      }
      const articleDB = await this.prismaDB.getArticle(Number(id))

      if (articleDB) {
        const adaptedArticle = this.articleClientApi.getArticle(articleDB)
        return res.status(200).json(adaptedArticle)
      }
      return res.status(200).json([])
    } catch (error: any) {
      return res.status(400).json({
        message: error.message || 'Unexpected Error',
      })
    }
  }

  async postArticle(req: Request, res: Response) {
    try {
      const article = req.body

      if (!article) {
        throw new Error('Bad Request')
      }

      const articleDB = this.articleClientApi.postArticle(article)

      await this.prismaDB.postArticle(articleDB)

      return res.status(200)
    } catch (error: any) {
      if (error.message === 'Bad Request') {
        return res.status(400).json({ message: error.message })
      }
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        return res.status(400).json({
          message: 'Article already exist',
        })
      }
      return res.status(500).send({
        message: error.message || 'Unexpected Error',
      })
    }
  }
}
