import React, { Component } from "react";
import { NavLink } from "react-router-dom";



export default class NavContainer extends Component {
    constructor() {
        super()
    }

    render() {
        return ( 
        <div className="nav-wrapper">
            <div className="left-side">
                <div className="link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active">
                        Home
                    </NavLink>
                </div>
                <div className="link-wrapper">
                    <NavLink to="/about" activeClassName="nav-link-active">About</NavLink>
                </div>
                <div className="link-wrapper">
                    <NavLink exact to="/contact-me" activeClassName="nav-link-active">Contact</NavLink>
                </div>
                <div className="link-wrapper">
                    <NavLink to="/blog" activeClassName="nav-link-active">Blog</NavLink>
                </div>

                
            </div>
            <div className="right-side">
                Charlie

            </div>
        </div>
        )}
}