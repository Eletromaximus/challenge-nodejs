import { Router } from 'express'

const routers = Router()

routers.get('/', (_, res) => {
  res.status(200).send({ message: 'Back-end Challenge 2021 🏅 - Space Flight News' })
})

export { routers }
