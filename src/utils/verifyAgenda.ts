import { PrismaClient } from '@prisma/client'
import { ArticleBD } from '../useCases/ArticleBD'
import { ArticleClientApi } from '../useCases/ArticleClientApi'
import { api } from './api'

export async function verifyAgenda () {
  const prisma = new PrismaClient()
  const articleClientApi = new ArticleClientApi()

  try {
    const isEmpityBd = await prisma.article.findFirst()

    if (!isEmpityBd) {
      const articlesExternal = await api.get('/articles', {
        params: {
          _limit: 15
        }
      })

      const articlesApi: ArticleBD[] = articleClientApi
        .articlesForBD(articlesExternal.data)

      if (articlesExternal) {
        await prisma.article.createMany({
          data: articlesApi
        })
      } else {
        throw new Error('Unexected Error')
      }
    }
  } catch (error) {
    console.log(error)
    return console.log('Erro na aplicação')
  }
}
