import "./App.css";
import Main from "./Pages/Main.jsx";
import Catalog from "./Pages/Catalog.jsx";
import Gallery from "./Pages/Gallery.jsx";
import Apricot from "./Pages/Catalog/Apricot.jsx";
import Cherry from "./Pages/Catalog/Cherry.jsx"
import Plum from "./Pages/Catalog/Plum.jsx";
import Peach from "./Pages/Catalog/Peach.jsx";
import Accessory from "./Pages/Accessory.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <Main />} />
        <Route path="/catalog" exact component={() => <Catalog />} />
        <Route path="/gallery" exact component={() => <Gallery />} />
        <Route path="/accessory" exact component={() => <Accessory />} />
        <Route path="/catalog/apricot" exact component={() => <Apricot />} />
        <Route path="/catalog/cherry" exact component={() => <Cherry />} />
        <Route path="/catalog/plum" exact component={() => <Plum />} />
        <Route path="/catalog/peach" exact component={() => <Peach />} />
      </Switch>
    </Router>
  );
}

export default App;
