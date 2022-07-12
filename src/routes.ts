import { Router } from 'express'
import { adapterDB } from './database'
const routers = Router()

routers.get('/', (_, res) => {
  return res.status(200).send({
    message: 'Back-end Challenge 2021 🏅 - Space Flight News',
    en: `${String(process.env.MAX)}`,
  })
})

routers.get('/article/:id', (req, res) => {
  return adapterDB.getArticle(req, res)
})

routers.get('/articles', (req, res) => {
  adapterDB.getArticles(req, res)
})

routers.post('/article', (req, res) => {
  return adapterDB.postArticle(req, res)
})

routers.put('/articles/:id', (req, res) => {
  return res.status(200).json('Em desenvolvimento')
})

routers.delete('/articles/:id', (req, res) => {
  return res.status(200).json('Em desenvolvimento')
})

export { routers }
