import express from 'express'

import bookController from '../controllers/book'

const router = express.Router()

router.get('/', bookController.getAllBooks)

router.post('/', bookController.createBook)

router.get('/:name', bookController.getBook)

export default router
