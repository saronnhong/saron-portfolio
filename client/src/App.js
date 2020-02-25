
import React, { Component } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from './pages/Contact';
import About from './pages/About';
// import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
