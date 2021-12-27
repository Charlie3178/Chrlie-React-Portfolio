import React, { Component } from "react";
import axios from "axios";
import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Charlie's Portfolio",
      isLoading: false,
      data: []

      }; 

      this.handlefilter = this.handlefilter.bind(this)
      
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return 
        <PortfolioItem 
          key={item.id}
          item={item} 
        />;
    });
  }

  handlefilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    })
  }

  getPortfolioItems() {
    axios.get('https://clovejoy3178.devcamp.space/portfolio/portfolio_items')
    .then(response => {
      // console.log(response);
      this.setState({
        data: response.data.portfolio_items
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  componentDidMount() {
    this.getPortfolioItems();
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