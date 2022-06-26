import express from 'express'
import cors from 'cors'
import 'express-async-errors'
import helmet from 'helmet'
import { routers } from './routes'
import 'dotenv/config'

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()

app.use(express.json())
app.use(helmet())
app.use(cors())

app.use(routers)
app.listen(PORT, HOST)
