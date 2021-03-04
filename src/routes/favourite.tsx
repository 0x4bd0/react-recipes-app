import { Container } from "@material-ui/core";
import { useContext } from "react";
import TitlebarGridList from "../components/grid";
import Search from "../components/search";
import { RecipeContext } from "../contexts/recipes";
import { RecipeContextType } from "../types/types";

export interface FavouriteProps {
    
}
 
const Favourite: React.FC<FavouriteProps> = () => {

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
 
export default Favourite;