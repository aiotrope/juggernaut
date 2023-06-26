import express from 'express'
require('express-async-errors')
import cookieParser from 'cookie-parser'
import cors from 'cors'
import helmet from 'helmet'
import mongoSanitize from 'express-mongo-sanitize'

import dbConnection from './utils/db'
import middlewares from './utils/middlewares'

import bookRouter from './routes/book'

const app = express()

dbConnection()

app.use(express.static('../client/build'))

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.use(cookieParser())

if (process.env.NODE_ENV === 'development') {
  let options = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
  }
  app.use(cors(options))
}

app.use(cors())

app.use(helmet())

app.use(require('sanitize').middleware)

app.use(mongoSanitize())

app.use(middlewares.loggingMiddleware)

app.use('/api/book', bookRouter)

app.use(middlewares.endPoint404)

app.use(middlewares.errorHandler)

export default app
