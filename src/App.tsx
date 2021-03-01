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

const App: React.FC = () => {
  return (
    <Router>
    <div className="App">
        <NavBar></NavBar>
        <div className="bodyContent">
              <Switch>
                <Route exact path="/">
                <Home></Home>
                </Route>
                <Route path="/recipes">
                  <Recipes></Recipes>
                </Route>
                <Route path="/dashboard">
                </Route>
              </Switch>
        </div>
    <Footer></Footer>
    </div>
    </Router>
    );
}
 
export default App;

