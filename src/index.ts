import express from 'express'
import cors from 'cors'
import 'express-async-errors'
import helmet from 'helmet'
import { routers } from './routes'

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()

app.use(express.json())
app.use(helmet())
app.use(cors())

// const content = async () => {
//   const result = await api.get('articles', {
//     params: {
//       _limit: 15,
//       _start: 0
//     }
//   }).then(response => {
//     if (response.status === 200) {
//       return response.data
//     }
//   })
//     .catch((response) => {
//       return response
//     })

//   return result
// }
app.use(routers)
app.listen(PORT, HOST)
