import React, { useContext } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { RecipeContextType } from '../types/types';
import { RecipeContext } from '../contexts/recipes';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      marginBottom : '50px'
    },
    gridList: {
      width: '80vw',
      height: 'auto',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    title : {
        backgroundColor : '#3f51b5',
        color : 'white'
    }
  }),
);

export default function TitlebarGridList() {
  const classes = useStyles();
  const recipesContext : RecipeContextType = useContext(RecipeContext)
 
  const {
      recipes
  }  = recipesContext

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div" className={classes.title}>All recipes</ListSubheader>
        </GridListTile>
        {recipes.map((tile,i) => (
          <GridListTile key={i}>
            <img src={tile.imageURL} alt={tile.name} />
            <GridListTileBar
              title={tile.name}
              subtitle={<span>by: { tile.author ? tile.author : 'anonym' }</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.name}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
