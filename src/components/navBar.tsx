import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


export interface NavBarProps {
    
}
 

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight : '50px'
    },
    menuButton: {
      marginLeft : 'auto'
    },

  }),
);

const NavBar: React.FC<NavBarProps> = () => {

    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
          <Typography variant="h6" >
              Foody
            </Typography>

            <div  className={classes.menuButton}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Recipes</Button>
            </div>

          </Toolbar>
        </AppBar>
      </div>
    )
    
}
 
export default NavBar;