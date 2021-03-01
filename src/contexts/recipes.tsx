import { createContext, useState } from "react";
import data  from '../data/recipes'
import { RecipeContextType, RecipeData } from "../types/types";

  const contextDefaultValue : RecipeContextType = {
      recipes : []
  }

 export const RecipeContext  = createContext(contextDefaultValue);

const RecipeContextProvider: React.FC = (props) => {
    let [recipes, setRecipes] = useState<Array<RecipeData>>(data)

    return ( 
      <RecipeContext.Provider value={{recipes}}>
       {props.children}
      </RecipeContext.Provider>
     );

}
 
export default RecipeContextProvider;