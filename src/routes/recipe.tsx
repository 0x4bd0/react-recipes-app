import { Box, Container } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export interface RecipeProps {
    
}
 
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
          textAlign: 'center',
          maxWidth: '100vw',
          padding: '30px',
          margin : '0 auto'
      },
      image: {
          width: '80vw',
          height : '20vh'
      },
    li: {
         textAlign: 'left'
      }
  }),
);

const Recipe: React.FC<RecipeProps> = () => {
      const classes = useStyles();

    return (
        <Box className={classes.root}>
            <img className={classes.image} src="http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg"></img>
            <h1>Tittle of the recipe</h1>
            <h3>Ingredients</h3>
            <ol>
                <li className={classes.li}>do dis</li>
            </ol>
            <hr></hr>
            <h3>Steps</h3>
            <ol>
                <li className={classes.li}>do dis</li>
            </ol>
            <hr></hr>

        </Box>
      );
}
 
export default Recipe;