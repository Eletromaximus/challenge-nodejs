import { PrismaClient } from '@prisma/client'
import { ArticleClientApi } from '../useCases/ArticleClientApi'
import { AdapterDB } from './AdapterDB'
import { PrismaDB } from './PrismaDB'

const prisma = new PrismaClient()
const articleClientApi = new ArticleClientApi()
const prismaDB = new PrismaDB(prisma)
const adapterDB = new AdapterDB(articleClientApi, prismaDB)

export { adapterDB }
