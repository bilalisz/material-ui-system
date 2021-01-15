import React from "react";
import { AppBar, Badge, Button, Grid, IconButton, TextField, Toolbar } from "@material-ui/core";
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';


const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item sm={10} >
            <TextField variant="outlined" label='serach' placeholder='search'/>
            <Button variant='outlined' color='secondary'>Search</Button>
          </Grid>
          <Grid item sm={2} justify='flex-end' >
            <span>
            <IconButton>
                <Badge badgeContent={4} color='secondary'>
                   <NotificationsIcon style={{color:'#fff'}}/>
                </Badge>
            </IconButton>
            <IconButton>
                <Badge badgeContent={10} color='secondary'>
                    <MessageIcon style={{color:'#fff'}}/>
                </Badge>
            </IconButton>
            <IconButton>
                <Badge>
                    <PowerSettingsNewIcon style={{color:'#fff'}}/>
                </Badge>
            </IconButton>
            </span>
            
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
