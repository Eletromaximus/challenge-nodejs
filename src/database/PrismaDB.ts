import { PrismaClient } from '@prisma/client'
import { ArticleBD } from '../useCases/ArticleBD'
import { BadParamsArticleError } from './errors/BadParamsArticleError'

export class PrismaDB {
  constructor (private prisma: PrismaClient) {
    this.prisma = prisma
  }

  async getArticles (start?: number): Promise<ArticleBD[] | []> {
    if (start && start <= 0) {
      throw new BadParamsArticleError()
    }

    const articlesDB: ArticleBD[] | [] = await this.prisma.article.findMany({
      skip: 15 * (start || 1),
      take: 15
    })

    return articlesDB
  }
}
