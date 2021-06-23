import "./App.css";
import Main from "./Pages/Main.jsx";
import Catalog from "./Pages/Catalog.jsx";
import Gallery from "./Pages/Gallery.jsx";

import Apricot from "./Pages/Catalog/Apricot.jsx";
import Cherry from "./Pages/Catalog/Cherry.jsx"
import Plum from "./Pages/Catalog/Plum.jsx";
import Peach from "./Pages/Catalog/Peach.jsx";
import Accessory from "./Pages/Accessory.jsx";
import Nectarine from "./Pages/Catalog/Nectarine";
import Kiwi from "./Pages/Catalog/Kiwi";
import Pear from "./Pages/Catalog/Pear";
import Apple from "./Pages/Catalog/Apple";
import Nut from "./Pages/Catalog/Nut";
import TableGrape from "./Pages/Catalog/TableGrape";
import WineGrape from "./Pages/Catalog/WineGrape";
import FlatPeach from "./Pages/Catalog/FlatPeach";


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
        <Route path="/catalog/nectarine" exact component={() => <Nectarine />} />
        <Route path="/catalog/cherry" exact component={() => <Cherry />} />
        <Route path="/catalog/plum" exact component={() => <Plum />} />
        <Route path="/catalog/peach" exact component={() => <Peach />} />
        <Route path="/catalog/kiwi" exact component={() => <Kiwi />} />
        <Route path="/catalog/pear" exact component={() => <Pear />} />
        <Route path="/catalog/apple" exact component={() => <Apple />} />
        <Route path="/catalog/nut" exact component={() => <Nut />} />
        <Route path="/catalog/table-grape" exact component={() => <TableGrape />} />
        <Route path="/catalog/wine-grape" exact component={() => <WineGrape />} />
        <Route path="/catalog/flat-peach" exact component={() => <FlatPeach />} />
      </Switch>
    </Router>
  );
}

export default App;
