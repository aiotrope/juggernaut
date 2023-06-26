require('express-async-errors')
import Book from '../models/book'
import { bookSchema } from '../utils/validators'

//import logger from '../utils/logger'

const createBook = async (req, res) => {
  let { body } = req
  try {
    const foundBook = await Book.findOne({ name: req.body.name })

    if (foundBook) throw Error('Cannot use this book name')

    const bookObj = await bookSchema.validate(body)

    const book = new Book(bookObj)

    const newBook = await Book.create(book)

    return res.status(200).json(newBook)
  } catch (err) {
    return res.status(400).json({ error: err.message })
  }
}

const getAllBooks = async (req, res) => {
  try {
    const response = await Book.find({})

    return res.status(200).json(response)
  } catch (err) {
    return res.status(400).json({ error: err.message })
  }
}

const getBook = async (req, res) => {
  let { name } = req.params

  try {
    const book = await Book.findOne({ name: name })

    if (!book) throw Error('Book not found')

    return res.status(200).json(book)
  } catch (err) {
    return res.status(400).json({ error: err.message })
  }
}

export default {
  getAllBooks,
  createBook,
  getBook,
}
