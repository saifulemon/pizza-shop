import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopBar from "./components/TopBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";

function App() {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route path="/about" component={About} exact/>
        <Route path="/contact" component={Contact} exact/>
        <Route path="/policy" component={Policy} exact/>
      </Switch>
    </Router>
  );
}

export default App;
