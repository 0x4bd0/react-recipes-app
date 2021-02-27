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

const App: React.FC = () => {
  return (
    <div className="App">
        <NavBar></NavBar>
        <div className="bodyContent">
              <Router>
              <Switch>
                <Route exact path="/">
                <Home></Home>
                </Route>
                <Route path="/about">
                </Route>
                <Route path="/dashboard">
                </Route>
              </Switch>
          </Router>
        </div>
    <Footer></Footer>
    </div>
    );
}
 
export default App;

