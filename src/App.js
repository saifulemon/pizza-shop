import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopBar from "./components/TopBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Router>
      <TopBar />
      <NavBar />
      <Switch>
        <Route path="/about" component={About} exact/>
        <Route path="/contact" component={Contact} exact/>
        <Route path="/policy" component={Policy} exact/>
        <Route path="/" component={HomeScreen} exact/>
      </Switch>
    </Router>
  );
}

export default App;
