import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import AddBookForm from '../components/AddBookForm'
import BookList from '../components/BookList'
import bookService from '../services/book'

const Home = (props) => {
  const [books, setBooks] = useState([])
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    let mounted = true
    const getAllBooks = async () => {
      try {
        const response = await bookService.fetchAll()
        if (response && mounted) {
          setBooks(response)
          setCounter((counter) => counter + 1)
        }
      } catch (err) {
        console.error(err)
      }
    }

    getAllBooks()

    return () => {
      mounted = false
    }
  }, [])

  return (
    <Box component='main' sx={{ p: 3 }}>
      <Toolbar />
      <Typography>Add Book</Typography>
      <AddBookForm counter={counter} setBooks={setBooks} setCounter={setCounter} />
      <BookList books={books} />
    </Box>
  )
}

export default Home
