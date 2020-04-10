
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App animated fadeInDownBig">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route component={Home} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
