import React, { Component } from "react";
import axios from "axios";
import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Thank you for visisitng my portfolio",
      isLoading: false,
      data: []

      }; 

      this.handleFilter = this.handleFilter.bind(this)
      
      
  }

  handleFilter(a) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === a;
      })
    })
  }

  getPortfolioItems() {
    axios.get('https://clovejoy3178.devcamp.space/portfolio/portfolio_items')
    .then(response => {
      console.log(response);
      this.setState({
        data: response.data.portfolio_items
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  portfolioItems() {
    return this.state.data.map(item => {
      
      return(
      <PortfolioItem key={item.id} item={item} />
      )
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
      <div className="portfolio-items-wrapper">

        <button className="btn" onClick={() => this.handleFilter("Military")}>Military</button>
        <button className="btn"onClick={() => this.handleFilter("Shipbuilding")}>Shipbuilding</button>
        <button className="btn"onClick={() => this.handleFilter("")}></button>
        {this.portfolioItems()}
      </div>
    );
  }
}