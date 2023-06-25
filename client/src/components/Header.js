import * as React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const drawerWidth = 240

const Header = (props) => {
  const { window } = props

  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} component='header'>
      <Typography variant='h6' sx={{ my: 2 }}>
        Juggernaut
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding component={Link} to='/'>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText disableTypography>Home</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding component={Link} to={'/about'}>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText disableTypography>About</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding component={Link} to={'/contact'}>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText disableTypography>Contact</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }} component='header'>
      <CssBaseline />
      <AppBar component='nav'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            noWrap
            component={Link}
            to='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              flexGrow: 0,
              fontFamily: 'monospace',
              fontWeight: 600,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Juggernaut
          </Typography>
          {/* Logo text */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} component='header'>
            <Button sx={{ color: '#fff' }} component={Link} to='/'>
              Home
            </Button>
            <Button sx={{ color: '#fff' }} component={Link} to={'/about'}>
              About
            </Button>
            <Button sx={{ color: '#fff' }} component={Link} to={'/contact'}>
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}

export default Header
