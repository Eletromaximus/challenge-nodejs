import { PrismaClient } from '@prisma/client'
import { ArticleBD } from '../useCases/ArticleBD'
import { ArticleClientApi } from '../useCases/ArticleClientApi'
import { api } from './api'
const CronJob = require('cron').CronJob
const prisma = new PrismaClient()

export async function verifyAgenda() {
  try {
    const isEmpityBd = await prisma.article.findFirst()
    const job = new CronJob('0 9 * * *', () => update())
    job.start()

    if (!isEmpityBd) {
      await update()
    }
  } catch (error) {
    console.log(error)
    return console.log('Erro na aplicação')
  }
}

async function update() {
  const articleClientApi = new ArticleClientApi()
  const articlesExternal = await api.get('/articles', {
    params: {
      _limit: 15,
    },
  })

  const articlesApi: ArticleBD[] = articleClientApi.articlesForBD(articlesExternal.data)

  const articlesId = articlesApi.map((article) => article.id)

  const equals = await prisma.article.findMany({
    where: {
      id: { in: articlesId },
    },
  })

  const newArticles = articlesApi.filter((article) => {
    const comparator = equals.find((articleBd) => articleBd.id === article.id)

    return article.id !== comparator?.id
  })

  if (newArticles.length > 0) {
    await prisma.article.createMany({
      data: newArticles,
    })
  }
}
