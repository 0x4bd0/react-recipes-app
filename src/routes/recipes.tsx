import { Container } from "@material-ui/core";
import Search from "../components/search";

export interface RecipesProps {
    
}
 
const Recipes: React.FC<RecipesProps> = () => {
    return ( 
        <Container>
            <Search></Search>
        </Container>
     );
}
 
export default Recipes;