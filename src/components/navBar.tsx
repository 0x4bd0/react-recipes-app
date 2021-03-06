import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { 
  BrowserRouter,
  BrowserRouter as Router,
  Link } from 'react-router-dom';

export interface NavBarProps {
    
}
 

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: '50px',
      width: '100vw',
    },
    menuButton: {
      marginLeft : 'auto',
    },
    link : {
      color : 'inherit',
      textDecoration : 'none'
    }
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
                <Link to="/" className={classes.link}> <Button color="inherit">Home</Button> </Link>
              <Link to="/recipes" className={classes.link}><Button color="inherit">Recipes</Button></Link>
               <Link to="/favourites" className={classes.link}><Button color="inherit">Favourites</Button></Link>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
    
}
 
export default NavBar;