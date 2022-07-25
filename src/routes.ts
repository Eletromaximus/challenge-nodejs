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

routers
  .route('/article')
  .post((req, res) => {
    return adapterDB.postArticle(req, res)
  })
  .delete((req, res) => {
    return adapterDB.deletArticle(req, res)
  })

routers.get('/articles', (req, res) => {
  adapterDB.getArticles(req, res)
})

routers.put('/articles/:id', (req, res) => {
  return adapterDB.putArticle(req, res)
})

export { routers }
