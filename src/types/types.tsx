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
     recipeDispatcher : any,
     favoriteRecipeDispatcher: any
     favoriteRecipes : Array<RecipeData>
}

export type ingredient =  {
  quantity: string,
  name: string,
  type : string
}

export  enum RecipeActionKind {
    fetch = 'fetch',
}

export  enum FavoriteRecipeActionKind {
    add = 'add',
    remove = 'remove',
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

    export type FavoriteRecipeAction = {
    type: FavoriteRecipeActionKind,
    payload: RecipeData
  }