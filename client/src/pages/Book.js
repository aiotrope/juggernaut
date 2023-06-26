import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { Typography } from '@mui/material'

import bookService from '../services/book'

const Book = ({ setBook, setCounter, book }) => {
  const { name } = useParams()

  useEffect(() => {
    let mounted = true
    const setBookState = async () => {
      try {
        const response = await bookService.fetchByName(name)
        if (response && mounted) {
          setBook(response)
          setCounter((c) => c + 1)
        }
      } catch (err) {
        console.error(err)
      }
    }
    setBookState()

    return () => {
      mounted = false
    }
  }, [name, setBook, setCounter])

  return (
    <Box component='main' sx={{ p: 3 }}>
      <Toolbar />
      <Typography variant='h3'>Books</Typography>
      <Typography paragraph={true}>{book.name}</Typography>
      <Typography paragraph={true}>{book.author}</Typography>
      <Typography paragraph={true}>{book.pages}</Typography>
    </Box>
  )
}

export default Book
