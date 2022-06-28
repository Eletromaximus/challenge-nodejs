import { Router } from 'express'
import { adapterDB } from './database'
const routers = Router()

routers.get('/', (_, res) => {
  return res.status(200).send({ message: 'Back-end Challenge 2021 🏅 - Space Flight News', en: `${String(process.env.MAX)}` })
})

routers.get('/articles/:id', (req, res) => {
  const { id } = req.params
  console.log(id)
  return res.status(200).send({
    message: `A página escolhida é ${id}`
  })
})

routers.get('/articles', (req, res) => {
  adapterDB.ArticlesAdapted(req, res)
})

routers.post('/articles', (req, res) => {
  return res.status(200).json('Em desenvolvimento')
})

routers.put('/articles/:id', (req, res) => {
  return res.status(200).json('Em desenvolvimento')
})

routers.delete('/articles/:id', (req, res) => {
  return res.status(200).json('Em desenvolvimento')
})

export { routers }
