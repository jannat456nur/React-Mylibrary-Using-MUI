import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link, Outlet } from 'react-router-dom'
import GridViewIcon from '@mui/icons-material/GridView'
import RateReviewIcon from '@mui/icons-material/RateReview';
import DeleteIcon from '@mui/icons-material/Delete'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AddIcon from '@mui/icons-material/Add'
import './Dashboard.css'
import ImportContactsIcon from '@mui/icons-material/ImportContacts'

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
              <DashboardIcon />
              <Link className="dashboardLink" to="/dashboard/home">
                Dashboard
              </Link>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton className="dashboardButton">
              <AdminPanelSettingsIcon />
              <Link className="dashboardLink" to="/dashboard/makeadmin">
                MakeAdmin
              </Link>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton className="dashboardButton">
              <DeleteIcon />
              <Link className="dashboardLink" to="/dashboard/deleteBooks">
                DeleteBooks
              </Link>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton className="dashboardButton">
              <AddIcon />
              <Link className="dashboardLink" to="/dashboard/addBooks">
                AddBooks
              </Link>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton className="dashboardButton">
              <RateReviewIcon />
              <Link className="dashboardLink" to="/dashboard/manageReview">
                ManageReview
              </Link>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton className="dashboardButton">
              <VerifiedUserIcon />
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
