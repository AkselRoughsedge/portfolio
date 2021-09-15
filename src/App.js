import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

import Home from '../src/pages/Home';
import ShowTracker from '../src/pages/ShowTracker';
import Noot from '../src/pages/Noot';
import Lightbulb from '../src/pages/Lightbulb';

import ScrollToTop from './comps/ScrollToTop';

import AOS from "aos";
import "aos/dist/aos.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  useEffect(()=>{
    AOS.init({
        duration : 2000
      });
},[])

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
