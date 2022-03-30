import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import MenuBuilder from './Menu/MenuBuilder';
import RestaurantDetails from './RestaurantDetails/RestaurantDetails';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function RestaurantAdmin() {
  const classes = useStyles();
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [error, setError] = useState('');

  async function handleLogout() {
    setError('');

    try {
      await logout();
      history.push('/');
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Library, Hi {currentUser.email}
          </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <Divider />
          <List>
            <ListItem
              button
              key="Restaurant Details"
              component={Link}
              to="/restaurant-details"
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Restaurant Details" />
            </ListItem>
            <ListItem button key="Menu" component={Link} to="/menu-builder">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Menu" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              button
              key="Account Details"
              component={Link}
              to="/update-profile"
            >
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Account Details" />
            </ListItem>
            <ListItem button key="Sign Out" onClick={handleLogout}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route
              path="/restaurant-details"
              render={() => <RestaurantDetails />}
            />
            <Route path="/menu-builder" render={() => <MenuBuilder />} />
            <Route exact path="/admin" render={() => <MenuBuilder />} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}
