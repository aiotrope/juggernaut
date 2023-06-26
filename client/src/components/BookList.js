import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { Link } from 'react-router-dom'

const BookList = ({ books }) => {
  console.log(books)
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant='h2'>Books</Typography>
      <List>
        {books?.map((book, idx) => {
          return (
            <ListItem key={idx} disablePadding>
              <Link to={`/book/${book.name}`}>
                <ListItemText primary={`${book.name} by ${book.author}`} />
              </Link>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}

export default BookList
