import exxpress from 'express'
require('dotenv').config()
import cors from 'cors'

import initRoutes from './src/routes'

import connectDB from './src/config/connectDB'

const corsOptions = {
   origin: '*',
   credentials: true, //access-control-allow-credentials:true
   optionSuccessStatus: 200,
   methods: ['POST', 'PUT', 'GET', 'DELETE'],
}

const port = process.env.PORT || 8080

const app = exxpress()
app.use(cors(corsOptions))
// app.use(
//    cors({
//       origin: process.env.CLIENT_URL,
//       methods: ['POST', 'PUT', 'GET', 'DELETE'],
//    })
// )
app.use(exxpress.json())
app.use(exxpress.urlencoded({ extended: true }))

initRoutes(app)
connectDB()

app.listen(port, () => {
   console.log('Server is running with port: ', port)
})
