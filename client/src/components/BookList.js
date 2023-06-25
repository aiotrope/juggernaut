import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

const BookList = (props) => {
  const list = props.books
  return (
    <Box sx={{ mt: 5 }}>
      <List>
        {list.map(({ id, name, author }) => (
          <ListItem key={id} disablePadding>
            <ListItemText primary={`${name} by ${author}`} />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default BookList
