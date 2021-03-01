export type RecipeData  = {
    name : string,
    imageURL : string,
    author? : string
  }

export type RecipeContextType = {
    recipes  : Array<RecipeData>
}