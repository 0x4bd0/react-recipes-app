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
    favoriteRecipes
  } = recipesContext
    
    const title = 'My Favourites'
    
    return ( 
                <Container>
                    <Search></Search>
                    <TitlebarGridList recipes={favoriteRecipes} title={title}></TitlebarGridList>
                </Container>
     );
}
 
export default Favourite;