import * as React from 'react'
import './Header.css'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import ImportContactsIcon from '@mui/icons-material/ImportContacts'
import { Menu } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Header() {
  const pages = ['Home', 'Books', 'Feedback', 'Contact', 'SignUp', 'SignIn']
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout']
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  return (
    <AppBar position="static" style={{ backgroundColor: '#0d284e' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* icon for large screen */}

          <ImportContactsIcon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          />
          {/* logo for large screen */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            myLibrary
          </Typography>
          {/* pages for small screen */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Link to="/" className="headerLink">
                Home
              </Link>
              <Link to="/books" className="headerLink">
                Books
              </Link>
              <Link to="/feedback" className="headerLink">
                Feedback
              </Link>
              <Link to="/contact" className="headerLink">
                Contact
              </Link>
              <Link to="/signin" className="headerLink">
                SignIn
              </Link>
              <Link to="/signup" className="headerLink">
                SignUp
              </Link>
            </Menu>
            <Link></Link>
          </Box>
          {/* icon for small screen */}
          <ImportContactsIcon
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
          />

          {/* logo for small screen */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            myLibrary
          </Typography>
          {/* pages for large screen */}
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: 'none', md: 'flex' },
              margin: 'auto',
            }}
          >
            <Link to="/" className="headerLink">
              Home
            </Link>
            <Link to="/books" className="headerLink">
              Books
            </Link>
            <Link to="/feedback" className="headerLink">
              Feedback
            </Link>
            <Link to="/contact" className="headerLink">
              Contact
            </Link>
            <Link to="/signin" className="headerLink">
              SignIn
            </Link>
            <Link to="/signup" className="headerLink">
              SignUp
            </Link>
          </Box>
          {/* user menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
