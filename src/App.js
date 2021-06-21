import logo from './logo.svg';
import './App.css';

import Home from '../src/pages/Home';
import ShowTracker from '../src/pages/ShowTracker';
import Noot from '../src/pages/Noot';
import Lightbulb from '../src/pages/Lightbulb';

import ScrollToTop from './comps/ScrollToTop';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
<Router>
  <ScrollToTop></ScrollToTop>
  <Switch>
    <Route exact path="/">
      <Home></Home>
    </Route>
    <Route exact path="/lightbulb">
      <Lightbulb></Lightbulb>
    </Route>
    <Route exact path="/noot">
      <Noot></Noot>
    </Route>
    <Route exact path="/show-tracker">
      <ShowTracker></ShowTracker>
    </Route>
  </Switch>
</Router>
  );
}

export default App;
