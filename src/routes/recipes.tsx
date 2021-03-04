import { Container } from "@material-ui/core";
import { useContext } from "react";
import TitlebarGridList from "../components/grid";
import Search from "../components/search";
import RecipeContextProvider, { RecipeContext } from "../contexts/recipes";
import { RecipeContextType } from "../types/types";

export interface RecipesProps {
    
}
 
const Recipes: React.FC<RecipesProps> = () => {

    const recipesContext : RecipeContextType = useContext(RecipeContext)
 
  const {
    recipes
  } = recipesContext

    return ( 
        
                <Container>
                    <Search></Search>
                    <TitlebarGridList recipes={recipes}></TitlebarGridList>
                </Container>
     );
}
 
export default Recipes;