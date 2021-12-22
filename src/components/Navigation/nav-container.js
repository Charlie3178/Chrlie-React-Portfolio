import React, { Component } from "react";
import { NavLink } from "react-router-dom";



export default class NavContainer extends Component {
    constructor() {
        super()
    }

    render() {
        return ( 
        <div>       
            
            <NavLink exact to="/" activeClassName="nav-link-active">
            Home
          </NavLink>

            <NavLink to="/about" activeClassName="nav-link-active">About</NavLink>

            <NavLink exact to="/contact-me" activeClassName="nav-link-active">Contact</NavLink>

            <NavLink to="/blog" activeClassName="nav-link-active">Blog</NavLink>
            
            {true ? <button>Add Blog</button> : null};
        </div>
        )}
}