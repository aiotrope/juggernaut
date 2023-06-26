import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { Typography } from '@mui/material'

const NotFound = () => {
  return (
    <Box component='main' sx={{ p: 3 }}>
      <Toolbar />
      <Typography variant='h3'>Books</Typography>
      <Typography paragraph={true}>404: This is not the webpage you are looking for</Typography>
    </Box>
  )
}

export default NotFound
