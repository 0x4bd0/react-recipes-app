import { Box, Container, Input } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Label } from "@material-ui/icons";
import { useContext, useReducer, useState } from "react";
import { RecipeContext } from "../contexts/recipes";
import { RecipeContextType } from "../types/types";

export interface SearchProps {
    
}
 
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign :'center',
    },
    input  : {
    margin : '60px',
    minWidth : '50vw'
    }
  }),
);


const Search: React.FC<SearchProps> = () => {
    const classes = useStyles();
    
    const recipeReducer : RecipeContextType = useContext(RecipeContext)
    const [searchInput,setSearchInput] = useState('')

    const {
      dispatch
    } = recipeReducer

    return ( 
        <Container className={classes.root}>
            <Input className={classes.input} placeholder="Search your favorite food" onChange={(e)=>
            {
              setSearchInput(e.target.value)
              dispatch({type:'search',payload:e.target.value})
            }
              }></Input>
        </Container>
     );
}
 
export default Search;