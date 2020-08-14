import React, { Component } from 'react';
import Navbar from './components/header/Navbar.js'

class App extends Component {
  render() {
    return (
      <Navbar></Navbar>
      // <Router>
      //   <div>
      //     <h2>Welcome to React Router Tutorial</h2>
      //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //       <ul className="navbar-nav mr-auto">
      //         <li><Link to={'/'} className="nav-link"> Home </Link></li>
      //         <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
      //         <li><Link to={'/about'} className="nav-link">About</Link></li>
      //       </ul>
      //     </nav>
      //     <hr />
      //     <Switch>
      //       <Route exact path='/' component={Home}/>
      //       <Route exact path='/'>
      //         { logIn ? <Redirect to='/contact' /> :  <Redirect to='/about' />}
      //       </Route>
      //       <Route path='/contact' component={Contact} />
      //       <Route path='/about'><About /></Route> />
      //     </Switch>
      //   </div>
      // </Router>
    );
  }

}


export default App;