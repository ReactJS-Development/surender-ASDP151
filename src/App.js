import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import RefMain from './refs/RefMain';


class App extends Component {
  render() {
    return (
      <div >
       <Router><div>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <ul className="navbar-nav" >
                  <li className="nav-item nav-link"><Link to={'/RefMain'}>RefMain</Link></li>
                  </nav>
                  <Route path='/RefMain' component={RefMain} />
            </div>
         </Router>        
      </div>
    );
  }
}
export default App;
