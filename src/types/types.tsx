export type RecipeData  = {
    name : string,
    imageURL : string,
    author? : string,
    id : number
  }

export type RecipeContextType = {
     recipes: Array<RecipeData>,
      recipe  : RecipeData | null,
     dispatch: any,
     recipeDispatcher : any

}


export  enum RecipeActionKind {
    fetch = 'fetch',
}
  export  enum ActionKind {
    search = 'search',
  }

 export  type Action = {
    type: ActionKind,
    payload: string
  }

  export type RecipeAction = {
    type: RecipeActionKind,
    payload: number
  }