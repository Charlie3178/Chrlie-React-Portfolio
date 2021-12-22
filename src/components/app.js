import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from './portfolio/porfolio-container';
import NavContainer from "./navigation/nav-container.js"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavContainer />
        <h1>Charlie Lovejoy</h1>
        <div>
          <h3>
          {moment().format('MMMM Do YYYY, h:mm:ss A')}
          </h3>
          <PortfolioContainer />
        </div>
      </div>
    );
  }
}
