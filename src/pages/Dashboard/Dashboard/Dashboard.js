import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MakeAdmin from '../MakeAdmin/MakeAdmin'
import { Link, Outlet } from 'react-router-dom'
import GridViewIcon from '@mui/icons-material/GridView'
import './Dashboard.css'
import HomeIcon from '@mui/icons-material/Home'
import ImportContactsIcon from '@mui/icons-material/ImportContacts'
import ManageCourse from '../ManageCourse/ManageCourse'
import ManageReview from '../ManageReview/ManageReview'
import ManageUser from '../ManageUser/ManageUser'
import { Button } from '@mui/material'

const drawerWidth = 240

const Dashboard = (props) => {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const drawer = (
    <div>
    <Box className="dashboardLogo">
        <ImportContactsIcon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          />
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
    </Box>
      <Divider />
      <Box>
        <List>

          <ListItem disablePadding>
            <ListItemButton className="dashboardButton">
              <GridViewIcon />
              <Link className="dashboardLink" to='/dashboard/home' >
              Dashboard
              </Link>
            </ListItemButton>

          </ListItem>
           <Divider />
          <ListItem disablePadding>
            <ListItemButton className="dashboardButton">
              <GridViewIcon />
              <Link className="dashboardLink" to="/dashboard/makeadmin">
                MakeAdmin
              </Link>
            </ListItemButton>

          </ListItem>
           <Divider />
          <ListItem disablePadding>
            <ListItemButton className="dashboardButton">
              <GridViewIcon />
              <Link className="dashboardLink" to="/dashboard/manageBooks">
                ManageBooks
              </Link>
            </ListItemButton>

          </ListItem>
           <Divider />
          <ListItem disablePadding>
            <ListItemButton className="dashboardButton">
              <GridViewIcon />
              <Link className="dashboardLink" to="/dashboard/manageReview">
               ManageReview
              </Link>
            </ListItemButton>

          </ListItem>
           <Divider />
          <ListItem disablePadding>
            <ListItemButton className="dashboardButton">
              <GridViewIcon />
              <Link className="dashboardLink" to="/dashboard/manageUser">
               ManageUser
              </Link>
            </ListItemButton>

          </ListItem>
           <Divider />

        </List>

      </Box>
    </div>
  )
  // const drawer = (
  //   <div>
  //     <Toolbar />
  //     <Divider />
  //     <Link to="/appointment">
  //       <Button color="inherit">Appointment</Button>
  //     </Link>
  //     <Link to="/dashboard">
  //       <Button color="inherit">Dashboard</Button>
  //     </Link>

  //     <Link to={`/dashboard/makeAdmin`}>
  //       <Button color="inherit">Make Admin</Button>
  //     </Link>
  //     <Link to={`/dashboard/addDoctor`}>
  //       <Button color="inherit">Add Doctor</Button>
  //     </Link>

  //     <Link to="/dashboard/manageCourse">
  //       <Button color="inherit">Manage Course</Button>
  //     </Link>
  //     <Link to="/dashboard/manageCourse">
  //       <Button color="inherit">Manage Course</Button>
  //     </Link>
  //   </div>
  // )
  const container =
    window !== undefined ? () => window().document.body : undefined
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Outlet></Outlet>
      </Box>
    </Box>
  )
}

export default Dashboard