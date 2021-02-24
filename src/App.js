import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

import ReactToolTip from 'react-tooltip'
import { MdCopyright } from 'react-icons/md';

const thisyear = new Date();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <nav className="Nav-style">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>
          
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
        
        <footer>
          <p>Bishow Thapa <span data-tip="copyright"><MdCopyright/></span> {thisyear.getFullYear()}</p>
        </footer>
        <ReactToolTip/>
      </BrowserRouter>
    </div>
  );
}

export default App;
