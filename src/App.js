import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  Route,
  Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { routerReducer, routerMiddleware, ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import Home from './components/Home';
import About from './components/About';
import Foo from './components/Foo';
import Footer from './components/Footer';
import Persons from './components/Persons';
import './App.css';
import logo from './assets/images/logo.png';
import persons from './store/persons';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    route: routerReducer,
    persons,
  }),

  composeWithDevTools(
    applyMiddleware(
      ...middleware,
    ),
  ),
);

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <div className="container">
          <nav className="navbar">
            <Link to="/" className="navbar-item">
              <img src={logo} alt="AppDirect" />
            </Link>

            <div id="navMenuExample" className="navbar-menu">
              <div className="navbar-start">
                <Link className="navbar-item" to="/">
                  Home
                </Link>

                <Link className="navbar-item" to="/about">
                  About
                </Link>

                <Link className="navbar-item" to="/foo">
                  Foo
                </Link>
              </div>
            </div>
          </nav>
        </div>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/persons" component={Persons} />
        <Route path="/foo/:id" component={Foo} />

        <Footer />
      </div>
    </ConnectedRouter>
  </Provider>
);

export { ReactDOM };
