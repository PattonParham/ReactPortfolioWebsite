import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Navbar from "../src/components/Navbar/Navbar"

import './App.css';

function App() {
  return (
    <Router>
    <div className="bodydiv">
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" exact component={About}></Route>
        <Route exact path="/about" exact component={About}></Route>
        <Route exact path="/contact" exact component={Contact}></Route>
        <Route exact path="/portfolio" exact component={Portfolio}></Route>
      </Switch>


    </div>
    </Router>
  );
}

export default App;
