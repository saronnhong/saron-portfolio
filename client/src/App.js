
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/contact" component={Contact} />
          <Route component={Home} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
