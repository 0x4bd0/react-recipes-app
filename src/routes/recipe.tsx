import { Box, Container } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RecipeContext } from "../contexts/recipes";
import { RecipeActionKind, RecipeContextType } from "../types/types";

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
      },
      div: {
          height: '-webkit-fill-available',
          margin: '0 auto',
          position: 'relative',
          top: '50%'
    }
  }),
);

interface ParamBody {
    id : string 
}

const Recipe: React.FC<RecipeProps> = () => {
    const classes = useStyles();
    
    const params  : ParamBody = useParams()

const recipeReducer : RecipeContextType = useContext(RecipeContext)

    const {
        recipe,
        recipeDispatcher
    } = recipeReducer

    useEffect(() => {

        let tmp = {
            type: RecipeActionKind.fetch,
            payload:  parseInt(params.id)
        }

       console.log(recipeReducer)
    recipeDispatcher(tmp)
    },[])
    

    return (
        
            recipe ? <Box className={classes.root}>
            <img className={classes.image} src={recipe.imageURL} alt={recipe.name}></img>
            <h1>{recipe.name}</h1>
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
        </Box> :
            <div className={classes.div}>Loading ...</div>
        
      );
}
 
export default Recipe;