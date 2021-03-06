import { Box, Container } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RecipeContext } from "../contexts/recipes";
import { FavoriteRecipeActionKind, RecipeActionKind, RecipeContextType, RecipeData } from "../types/types";

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
          height: '20vh',
           borderRadius : '10px'
      },
    li: {
         textAlign: 'left'
      },
      div: {
          height: '-webkit-fill-available',
          margin: '0 auto',
          position: 'relative',
          top: '50%'
      },
      space: {
          height : '50px'
      },
      title: {
          backgroundColor: '#c4cafea6',
          borderRadius: '10px',
          padding : '10px 0'
      },
      favorite: {
          color: '#3f51b5',
          cursor : 'cell'
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
        recipeDispatcher,
        favoriteRecipeDispatcher,
        favoriteRecipes
    } = recipeReducer

    useEffect(() => {

        let tmp = {
            type: RecipeActionKind.fetch,
            payload:  parseInt(params.id)
        }

    recipeDispatcher(tmp)
    },[])
    
    const hundleFavoriteBtn = (data : RecipeData) => {

        if (recipe) {

            if (favoriteRecipes.find(item => item.id == recipe.id)) {
                favoriteRecipeDispatcher({
                    type: FavoriteRecipeActionKind.remove ,
                    payload : data
                })
            } else {
                 favoriteRecipeDispatcher({
                    type: FavoriteRecipeActionKind.add ,
                    payload : data
                })
            }
           
        }
        
    }

    return (
        
            recipe ? <Box className={classes.root}>
            <img className={classes.image} src={recipe.imageURL} alt={recipe.name}></img>
            <h1 className={classes.title}  >{recipe.name}</h1>
            <Box>
                {
                    favoriteRecipes.find(item=>item.id === recipe.id)
                        ? <Favorite className={classes.favorite} onClick={() => hundleFavoriteBtn(recipe)}></Favorite>
                        :  <FavoriteBorder className={classes.favorite} onClick={() => hundleFavoriteBtn(recipe)}></FavoriteBorder>
                }
            </Box>
             <div className={classes.space} ></div>
            <h3 className={classes.li}>Ingredients</h3>
            <ol>
                {
                    recipe.ingredients.map((item, i) => (
                        <li className={classes.li} key={i}>{`${item.quantity} ${item.name}`}</li>
                    ))
                }
            </ol>
            <hr></hr>
             <div className={classes.space} ></div>
            <h3 className={classes.li}>Steps</h3>
            <ol>
                {
                    recipe.steps.map((item, i) => (
                        <li className={classes.li} key={i}>{item}</li>
                    ))
                }
            </ol>
            <hr></hr>
        </Box> :
            <div className={classes.div}>Loading ...</div>
        
      );
}
 
export default Recipe;