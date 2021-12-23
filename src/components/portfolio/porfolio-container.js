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
        dates: "1996-2003",
        slug:"845th"}, 
        {title: "HAM Marine",
        category: "Shipbuilging",
        slug:"ham"}, 
        {title: "FGO",
        category: "Shipbuilging",
        slug:"fgo"}, 
        {title: "HII",
        category: "Shipbuilging",
        slug:"hii"}, 
        {title: "1181st DDSB",
        category: "Military",
        slug:"1181st"}, 
        {title: "Austal USA",
        category: "Shipbuilging",
        slug:"ausa"}, 
        {title: "1184th DDSB",
        category: "Military",
        slug:"1184th"}
      ]

      }; 

      this.handlefilter = this.handlefilter.bind(this)
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem title = {item.title} slug={item.slug} />;
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