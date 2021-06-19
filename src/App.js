import "./App.css";
import Main from "./pages/main";
import Catalog from "./pages/Catalog";
import { Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <Main />} />
        <Route path="/catalog" exact component={() => <Catalog />} />
      </Switch>
    </Router>
  );
}

export default App;
