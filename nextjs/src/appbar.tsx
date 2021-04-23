import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';


import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: '10px',
      margin:0,
      padding: 0
    },
    appbar:{
      height: theme.spacing(6),
    },
    icon:{
      paddingTop:0,
      margin:0,

    },
    title: {
      flexGrow: 1,
      marginBottom: '15px'

    },
  }),
);

export default function MenuAppBar({login:login}) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);



  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static" color='secondary'>
        <Toolbar>
      
          <Typography variant="h6" className={classes.title}>
            SGT
          </Typography>
          {login && (
            <div>
              <IconButton
              className={classes.icon}
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                
                color="inherit"
              >
                <AccountCircle/>
              </IconButton>
              <IconButton
                className={classes.icon}
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                
                color="inherit"
              >
                <NotificationsIcon/>
              </IconButton>
              <IconButton
                className={classes.icon}
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                
                color="inherit"
              >
                <MailIcon />
              </IconButton>
              <IconButton edge="end" 
              className={classes.icon} 
              onClick={handleMenu}
              color="inherit" 
              aria-label="menu">
            <MenuIcon />
          </IconButton>
              
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem  onClick={handleClose}>Perfil</MenuItem>
                <MenuItem  onClick={handleClose}>Mi cuenta</MenuItem>
                <MenuItem onClick={handleClose}>Ajustes</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}