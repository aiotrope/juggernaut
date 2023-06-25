import express from 'express'
require('express-async-errors')
import path from 'path'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import helmet from 'helmet'
import mongoSanitize from 'express-mongo-sanitize'

import dbConnection from './utils/db'
import middlewares from './utils/middlewares'

//import indexRouter from './routes/index'
//import userRouter from './routes/user'
//import todoRouter from './routes/todo'

const app = express()

dbConnection()

app.set('views', path.join(__dirname, '../views'))

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, '../public')))

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.use(cookieParser())

app.use(cors())

app.use(helmet())

app.use(require('sanitize').middleware)

app.use(mongoSanitize())

app.use(middlewares.loggingMiddleware)

//app.use('/', indexRouter)

//app.use('/api', userRouter)

//app.use('/api', todoRouter)

app.use(middlewares.endPoint404)

app.use(middlewares.errorHandler)

export default app
