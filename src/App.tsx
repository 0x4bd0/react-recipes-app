import NavBar from "./components/navBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import Home from "./routes/home";
import Footer from "./components/footer";
import Recipes from "./routes/recipes";
import Recipe from "./routes/recipe";
import RecipeContextProvider from "./contexts/recipes";
import Favourite from "./routes/favourite";

const App: React.FC = () => {
  return (
    <Router>
    <div className="App">
        <NavBar></NavBar>
        <RecipeContextProvider>
        <div className="bodyContent">
              <Switch>
                <Route exact path="/">
                <Home></Home>
            </Route>
             <Route path="/recipes/:id">
                  <Recipe></Recipe>
              </Route>
                <Route path="/recipes">
                  <Recipes></Recipes>
              </Route>
               <Route path="/favourites">
                  =<Favourite></Favourite>
                </Route>
                <Route path="/dashboard">
                </Route>
              </Switch>
          </div>
          </RecipeContextProvider>
    <Footer></Footer>
    </div>
    </Router>
    );
}
 
export default App;

