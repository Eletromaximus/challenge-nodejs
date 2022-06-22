import { Router } from 'express'
const routers = Router()

routers.get('/', (req, res) => {
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
  try {
    const page: number = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10

    const jump = (page - 1) * limit

    if (page < 0 && limit < 0) {
      throw new Error('Bad Request')
    }
    return res.status(200).send({
      message: `${page}, ${limit} e ${jump}`
    })
  } catch (error) {
    return res.send({
      status: 400,
      message: error
    })
  }
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
