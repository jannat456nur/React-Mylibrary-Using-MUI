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
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider'

export default function Header() {

  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const { user, signOutUser, admin } = React.useContext(AuthContext)

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
          {/* //book icon */}
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
                display: {
                  xs: 'block',
                  md: 'none',
                  width: '300px',
                  textAlign: 'left',
                },
              }}
            >
              <Button
                sx={{
                  fontSize: 18,
                  display: 'block',
                  width: '300px',
                  textAlign: 'left',
                }}
              >
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: 'black',
                        }
                      : { color: '#0d284e' }
                  }
                  to="/"
                  className="headerLink"
                >
                  Home
                </NavLink>
              </Button>
              <Button
                sx={{
                  fontSize: 18,
                  display: 'block',
                  width: '300px',
                  textAlign: 'left',
                }}
              >
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: 'black',
                        }
                      : { color: '#0d284e' }
                  }
                  to="/books"
                  className="headerLink"
                >
                  Books
                </NavLink>
              </Button>

              <Button
                sx={{
                  fontSize: 18,
                  display: 'block',
                  width: '300px',
                  textAlign: 'left',
                }}
              >
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: 'black',
                        }
                      : { color: '#0d284e' }
                  }
                  to="/feedback"
                  className="headerLink"
                >
                  Feedback
                </NavLink>
              </Button>
              <Button
                sx={{
                  fontSize: 18,
                  display: 'block',
                  width: '300px',
                  textAlign: 'left',
                }}
              >
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: 'black',
                        }
                      : { color: '#0d284e' }
                  }
                  to="/contact"
                  className="headerLink"
                >
                  Contact
                </NavLink>
              </Button>
              <Button
                sx={{
                  fontSize: 18,
                  display: 'block',
                  width: '300px',
                  textAlign: 'left',
                }}
              >
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: 'black',
                        }
                      : { color: '#0d284e' }
                  }
                  to="/signup"
                  className="headerLink"
                >
                  SignUp
                </NavLink>
              </Button>

              {user?.email ? (
                <Button
                  sx={{
                    fontSize: 18,
                    display: 'block',
                    width: '300px',
                    textAlign: 'left',
                  }}
                >
                  <NavLink
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: 'black',
                          }
                        : { color: '#0d284e' }
                    }
                    to="/signin"
                    onClick={signOutUser}
                    className="headerLink"
                  >
                    SignOut
                  </NavLink>
                </Button>
              ) : (
                <Button
                  sx={{
                    fontSize: 18,
                    display: 'block',
                    width: '300px',
                    textAlign: 'left',
                  }}
                >
                  <NavLink
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: 'black',
                          }
                        : { color: '#0d284e' }
                    }
                    to="/signin"
                    className="headerLink"
                  >
                    SignIn
                  </NavLink>
                </Button>
              )}
            </Menu>
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
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      color: 'black',
                    }
                  : { color: '#fff' }
              }
              to="/"
              className="headerLink"
            >
              Home
            </NavLink>

            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      color: 'black',
                    }
                  : { color: '#fff' }
              }
              to="/books"
              className="headerLink"
            >
              Books
            </NavLink>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      color: 'black',
                    }
                  : { color: '#fff' }
              }
              to="/feedback"
              className="headerLink"
            >
              Feedback
            </NavLink>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      color: 'black',
                    }
                  : { color: '#fff' }
              }
              to="/contact"
              className="headerLink"
            >
              Contact
            </NavLink>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      color: 'black',
                    }
                  : { color: '#fff' }
              }
              to="/signup"
              className="headerLink"
            >
              SignUp
            </NavLink>
            

            {user?.email ? (
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: 'black',
                      }
                    : { color: '#fff' }
                }
                to="/signin"
                onClick={signOutUser}
                className="headerLink"
              >
                SignOut
              </NavLink>
            ) : (
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: 'black',
                      }
                    : { color: '#fff' }
                }
                to="/signin"
                className="headerLink"
              >
                SignIn
              </NavLink>
            )}
          </Box>
          {/* user menu */}
          {admin && (
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
                <MenuItem onClick={handleCloseUserMenu}>
                  <Button
                    sx={{
                      display: 'block',
                    }}
                  >
                    <NavLink
                      style={({ isActive }) =>
                        isActive
                          ? {
                              color: 'black',
                            }
                          : { color: '#0d284e' }
                      }
                      to="/dashboard"
                      className="headerLink"
                    >
                     Dashboard
                    </NavLink>
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
