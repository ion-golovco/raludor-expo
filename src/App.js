import "./App.css";
import Main from "./pages/Main.jsx";
import Catalog from "./pages/Catalog.jsx";
import Gallery from "./pages/Gallery.jsx";
import Apricot from "./pages/Catalog/Apricot.jsx";
import Cherry from "./pages/Catalog/Cherry.jsx"
import Plum from "./pages/Catalog/Plum.jsx";
import Peach from "./pages/Catalog/Peach.jsx";
import Accessory from "./pages/Accessory.jsx";

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
