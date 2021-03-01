export type RecipeData  = {
    name : string,
    imageURL : string,
  }

export type RecipeContextType = {
    recipes  : Array<RecipeData>
}