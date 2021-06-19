import "./App.css";
import Main from "./pages/Main";
import Catalog from "./pages/Catalog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

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
