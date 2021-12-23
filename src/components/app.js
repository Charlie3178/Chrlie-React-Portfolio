import React, { Component } from 'react';
import moment from "moment";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import PortfolioContainer from './portfolio/porfolio-container';
import NavContainer from "./navigation/nav-container.js"
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact-mee';
import Blog from './pages/blog';
import PortfolioDetail from './portfolio/portfolio-detail';




export default class App extends Component {
  render() {
    return (
      <div className='app'>
        

          <Router>
            <div>
            <NavContainer />

            <Switch>
              <Route exact path={"/"} component={Home} />
              <Route exact path={"/about"} component={About} />
              <Route exact path={"/contact-me"} component={Contact} />
              <Route exact path={"/blog"} component={Blog} />
              <Route path="/portfolio/:slug" component={PortfolioDetail} />
            </Switch>
            </div>
          </Router>

        <h1>Charlie Lovejoy</h1>
        <div>
          <h3>
          {moment().format('MMMM Do YYYY, h:mm:ss A')}
          </h3>
          
        </div>
      </div>
    );
  }
}
