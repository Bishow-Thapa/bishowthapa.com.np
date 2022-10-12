import React from 'react';
import './App.css';
// import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
// import About from './components/About'
// import Contact from './components/Contact'
import NotFound from './components/NotFound'

import ReactToolTip from 'react-tooltip'
import { MdCopyright } from 'react-icons/md';
// import { useEffect } from 'react';

import { FaHeart } from "react-icons/fa";

const thisyear = new Date();

function App() {

  // React Hooks
  // https://devdojo.com/krissanawat101/3-ways-to-set-a-document-title-in-react
  
  // useEffect(() => {
  //   document.title = "Bishow Thapa";
  // }, [])

  

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <nav className="Nav-style">
            <p className="myLogo">Bishow Thapa</p>
            
            <div className="headerNav">
              {/* <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link> */}
            </div>
          </nav>
        </header>
          
        <Switch>
          {/* <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route> */}
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
        
        <footer>
          <p>Made with <FaHeart color= "red" /> by Bishow Thapa <span data-tip="copyright"><MdCopyright/></span> {thisyear.getFullYear()}</p>
        </footer>
        <ReactToolTip/>
      </BrowserRouter>
    </div>
  );
}

export default App;
