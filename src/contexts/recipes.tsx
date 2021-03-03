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


    enum RecipeActionKind {
    Increase = 'fetch',
  }

  type RecipeAction = {
    type: RecipeActionKind,
    payload: number
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

    const recipeReducer = (state:RecipeData | null, action : RecipeAction) : RecipeData  | null => {
    switch(action.type) {
        case 'fetch' : 
        {
          return data.filter(item=>item.id == action.payload)[0]
        }
        default :
        return null
    }
}

const contextDefaultValue : RecipeContextType = {
  recipes: [],
  recipe: null,
  dispatch: recipesReducer,
  recipeDispatcher : recipeReducer
}

 export const RecipeContext  = createContext(contextDefaultValue);

const RecipeContextProvider: React.FC = (props) => {
    let [recipes, dispatch] = useReducer(recipesReducer,data)
    let [recipe, recipeDispatcher] = useReducer(recipeReducer,null)

    return ( 
      <RecipeContext.Provider value={{recipes,dispatch,recipe,recipeDispatcher}}>
       {props.children}
      </RecipeContext.Provider>
     );

}
 
export default RecipeContextProvider;