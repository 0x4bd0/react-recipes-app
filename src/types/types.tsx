export type RecipeData  = {
    name : string,
    imageURL : string,
    author? : string,
    id : number,
    steps: Array<string>,
    ingredients : Array<ingredient>
  }

export type RecipeContextType = {
     recipes: Array<RecipeData>,
      recipe  : RecipeData | null,
     dispatch: any,
     recipeDispatcher : any

}

export type ingredient =  {
  quantity: string,
  name: string,
  type : string
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