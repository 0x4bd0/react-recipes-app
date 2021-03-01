import { Container } from "@material-ui/core";
import TitlebarGridList from "../components/grid";
import Search from "../components/search";

export interface RecipesProps {
    
}
 
const Recipes: React.FC<RecipesProps> = () => {
    return ( 
        <Container>
            <Search></Search>
            <TitlebarGridList></TitlebarGridList>
        </Container>
     );
}
 
export default Recipes;