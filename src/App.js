import "./App.css";
import Main from "./pages/Main";
import Catalog from "./pages/Catalog";
import Gallery from "./pages/Gallery";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <Main />} />
        <Route path="/catalog" exact component={() => <Catalog />} />
        <Route path="/gallery" exact component={() => <Gallery />} />
      </Switch>
    </Router>
  );
}

export default App;
