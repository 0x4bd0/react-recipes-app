export type RecipeData  = {
    name : string,
    imageURL : string,
    author? : string,
    id : number
  }

export type RecipeContextType = {
    recipes  : Array<RecipeData>,
    dispatch : any
}