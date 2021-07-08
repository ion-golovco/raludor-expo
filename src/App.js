import "./App.css";
import Main from "./Pages/Main.jsx";
import Catalog from "./Pages/Catalog.jsx";
import Gallery from "./Pages/Gallery.jsx";

import Fruit from "./Pages/Fruit.jsx";
import Sorturi from "./assets/sorturi.js";
import Accessory from "./Pages/Accessory.jsx"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let sorts = Sorturi;
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <Main />} />
        <Route path="/catalog" exact component={() => <Catalog />} />
        <Route path="/gallery" exact component={() => <Gallery />} />
        <Route path="/accessory" exact component={() => <Accessory />} />

        {sorts.map((n) => {
          return (
            <Route
              path={`/catalog/${n.category}`}
              exact
              component={() => <Fruit fruit={n.id} />}
            />
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
