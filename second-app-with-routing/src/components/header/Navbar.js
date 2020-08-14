import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import Home from '../Home'
import About from '../About';
import Contact from '../Contact';
class Navbar extends Component {
  constructor(probs){
    super(probs);
    this.state={
      logIn: true
    }
  }

  render() {
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
          <Route exact path='/' component={Home}/>
          <Route exact path='/'>
            { this.state.logIn ? <Redirect to='/contact' /> :  <Redirect to='/about' />}
          </Route>
          <Route path='/contact' component={Contact} />
          <Route path='/about'><About /></Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default Navbar;