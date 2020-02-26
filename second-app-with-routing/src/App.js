import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useParams, useRouteMatch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact.js';

class App extends Component {
  render() {
    let logIn = true;
    return (
      <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
              <li><Link to={'/about'} className="nav-link">About</Link></li>
            </ul>
          </nav>
          <hr />
          <Switch>
            {/* <Route exact path='/' component={Home} /> */}
            <Route exact path="/">
              { logIn ? <Redirect to='/contact' /> :  <Redirect to='/about' />}
            </Route>
            <Route path='/contact' component={Contact} />
            <Route path='/about'><About /></Route> />
          </Switch>
        </div>
      </Router>
    );
  }

}


export default App;