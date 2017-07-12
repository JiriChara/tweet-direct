import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import './App.css';
import logo from './assets/images/logo.png';

export default () => (
  <Router>
    <div className="container">
      <nav className="navbar">
        <a className="navbar-item">
          <img src={logo} alt="AppDirect" />
        </a>

        <div id="navMenuExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Home
            </Link>

            <Link className="navbar-item" to="/about">
              About
            </Link>
          </div>
        </div>
      </nav>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);
