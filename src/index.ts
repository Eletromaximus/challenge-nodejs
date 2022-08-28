import express from 'express'
import cors from 'cors'
import 'express-async-errors'
import helmet from 'helmet'
import { routers } from './routes'
import 'dotenv/config'
import { verifyAgenda } from './utils/verifyAgenda'

// const HOST = process.env.HOST || '0.0.0.0'

const app = express()

app.use(express.json())
app.use(helmet())
app.use(cors())
verifyAgenda()
app.use(routers)

app.listen(process.env.PORT || 3000, () => {
  console.log('Bem vindo ao server')
})
