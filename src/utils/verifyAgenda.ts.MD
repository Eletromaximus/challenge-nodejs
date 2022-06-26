import { PrismaClient } from '@prisma/client'
import { api } from './api'

interface ISpaceFlightNew {
  id: number,
  featured: false,
  title: string,
  url: string,
  imageUrl: string,
  newsSite: string,
  summary: string,
  publishedAt: string,
  launches?: [
    {
      id: string,
      provider: string
    }
  ],
  events?: [
    {
      id: string,
      provider: string
    }
  ]
}

export async function verifyAgenda () {
  const prisma = new PrismaClient()

  const isEmpityBd = await prisma.article.findFirst()

  try {
    if (!isEmpityBd) {
      const articlesApi: ISpaceFlightNew = await api.get('https://api.spaceflightnewsapi.net/v3/articles')
        .then((response) => {
          if (response.status === 200) {
            return response.data
          }
        })

      if (articlesApi) {
        await prisma.article.createMany({
          data: articlesApi
        })
      }
    } else {
      console.log('não foi')
    }
  } catch (error) {
    return console.log('Erro na aplicação', error)
  }
}
