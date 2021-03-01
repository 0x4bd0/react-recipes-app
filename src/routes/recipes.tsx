import { Container } from "@material-ui/core";
import TitlebarGridList from "../components/grid";
import Search from "../components/search";
import RecipeContextProvider from "../contexts/recipes";

export interface RecipesProps {
    
}
 
const Recipes: React.FC<RecipesProps> = () => {
    return ( 
        <RecipeContextProvider>
                <Container>
                    <Search></Search>
                    <TitlebarGridList></TitlebarGridList>
                </Container>
        </RecipeContextProvider>
     );
}
 
export default Recipes;