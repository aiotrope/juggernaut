import { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormGroup from '@mui/material/FormGroup'

import bookService from '../services/book'

const AddBookForm = (props) => {
  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [pages, setPages] = useState(0)

  const handleChangeName = (event) => {
    event.persist()
    const target = event.target.value
    setName(target)
  }
  const handleChangeAuthor = (event) => {
    event.persist()
    const target = event.target.value
    setAuthor(target)
  }
  const handleChangePages = (event) => {
    event.persist()
    const target = parseInt(event.target.value)
    setPages(target)
  }

  const createBook = async (dataObj) => {
    try {
      const response = await bookService.create(dataObj)
      if (response) {
        props.setBooks((prevState) => [...prevState, response])
        props.setCounter((c) => c + 1)
      }
    } catch (err) {
      console.error(err)
    }
  }

  const handleSubmit = (event) => {
    if (event) event.preventDefault()

    let data = {
      name,
      author,
      pages,
    }

    console.log(data)

    createBook(data)

    setName('')
    setAuthor('')
    setPages(0)
  }
  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <FormGroup style={{ marginBottom: '20px' }}>
        <TextField id='name' label='Book Name' variant='filled' onChange={handleChangeName} />
      </FormGroup>
      <FormGroup style={{ marginBottom: '20px' }}>
        <TextField id='author' label='Author' variant='filled' onChange={handleChangeAuthor} />
      </FormGroup>
      <FormGroup style={{ marginBottom: '30px' }}>
        <TextField
          id='pages'
          label='Number of pages'
          type='number'
          variant='filled'
          onChange={handleChangePages}
        />
      </FormGroup>
      <Button type='submit' variant='contained'>
        ADD
      </Button>
    </Box>
  )
}

export default AddBookForm
