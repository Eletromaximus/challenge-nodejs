import { PrismaClient } from '@prisma/client'

export async function verifyAgenda () {
  const prisma = new PrismaClient()

  const isEmpityBd = await prisma.article.findFirst()

  if (!isEmpityBd) {
    console.log('banco de dados está vazio')
  }
}
