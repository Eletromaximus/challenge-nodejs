import express from 'express'
import cors from 'cors'
import 'express-async-errors'
import helmet from 'helmet'

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()

app.use(express.json())
app.use(helmet())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, HOST)
