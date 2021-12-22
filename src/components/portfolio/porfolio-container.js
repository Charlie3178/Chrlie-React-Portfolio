import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Charlie's Portfolio",
      isLoading: false,
      data: [
        {title: "845th Signal BN",
        category: "Military",
        dates: "1996-2003"}, 
        {title: "HAM Marine",
        category: "Shipbuilging"}, 
        {title: "FGO",
        category: "Shipbuilging"}, 
        {title: "HII",
        category: "Shipbuilging"}, 
        {title: "1181st DDSB",
        category: "Military"}, 
        {title: "Austal USA",
        category: "Shipbuilging"}, 
        {title: "1184th DDSB",
        category: "Military"}
      ]

      }; 

      this.handlefilter = this.handlefilter.bind(this)
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem title = {item.title}/>;
    });
  }

  handlefilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    })
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading....</div>
    }
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>
        <hr/>
        <button onClick={() => this.handlefilter('Military')}>Military</button>
        <button onClick={() => this.handlefilter('Shipbuilging')}>Shilbuilding</button>
        <hr/>
        {this.portfolioItems()}
      </div>
    );
  }
}