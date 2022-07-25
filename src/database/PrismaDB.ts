import { PrismaClient } from '@prisma/client'
import { ArticleBD } from '../useCases/ArticleBD'
import { BadParamsArticleError } from './errors/BadParamsArticleError'

export class PrismaDB {
  constructor(private prisma: PrismaClient) {
    this.prisma = prisma
  }

  async getArticles(start: number): Promise<ArticleBD[] | []> {
    if (start && start <= 0) {
      throw new BadParamsArticleError()
    }

    const articlesDB: ArticleBD[] | [] = await this.prisma.article.findMany({
      skip: 15 * start,
      take: 15,
    })

    return articlesDB
  }

  async getArticlesForApi(articlesForBD: ArticleBD[]) {
    await this.prisma.article.createMany({
      data: articlesForBD,
    })
  }

  async getArticle(id: number) {
    return await this.prisma.article.findUnique({
      where: {
        id,
      },
    })
  }

  async postArticle(articleBd: ArticleBD): Promise<number> {
    const post = await this.prisma.article
      .create({
        data: articleBd,
      })
      .then((response) => {
        return response.id
      })

    return post
  }

  async putArticle(articleBd: ArticleBD): Promise<string> {
    await this.prisma.article.update({
      where: {
        id: articleBd.id,
      },
      data: articleBd,
    })

    return 'ok'
  }

  async delArticle(id: number): Promise<string> {
    await this.prisma.article.delete({
      where: {
        id,
      },
    })

    return 'ok'
  }
}
