import { createContext, useState,useReducer } from "react";
import data  from '../data/recipes'
import { RecipeContextType, RecipeData } from "../types/types";



  enum ActionKind {
    Increase = 'search',
  }

  type Action = {
    type: ActionKind,
    payload: string
  }

  const recipesReducer = (state:Array<RecipeData>, action : Action) : Array<RecipeData> => {
    switch(action.type) {
        case 'search' : 
        {
          if(action.payload == '') {
            return data
          }
          return [...data.filter(item=>item.name.toLowerCase().search(action.payload.toLowerCase()) !== -1)]
        }
        default :
        return state
    }
}

const contextDefaultValue : RecipeContextType = {
  recipes : [],
  dispatch : recipesReducer
}

 export const RecipeContext  = createContext(contextDefaultValue);

const RecipeContextProvider: React.FC = (props) => {
    let [recipes, dispatch] = useReducer(recipesReducer,data)

    return ( 
      <RecipeContext.Provider value={{recipes,dispatch}}>
       {props.children}
      </RecipeContext.Provider>
     );

}
 
export default RecipeContextProvider;