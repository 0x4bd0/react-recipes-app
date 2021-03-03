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