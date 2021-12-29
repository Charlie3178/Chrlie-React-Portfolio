import React, { Component } from "react";

import loginImg from "../../../static/assets/images/Auth/image.jpg";

export default class Auth extends Component {
    render() {
        return (
            <div className="suth-page-wrapper">
                <div 
                    className="left-column"
                    style={{
                        backgroundImage: `url(${loginImg})`
                    }}
                />

                <div className="right-column">
                    Login Component Goes Here...
                </div>
             
            </div>
        )
    }
}