import React, { Component } from 'react'
import {  } from './nav.css';


class Nav extends Component {
    render() {
        return (
            <div>
                <div className="topnav">
                    <a className="active" href="#home">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <div className="topnav-right">
                        <a href="#search">Search</a>
                        <a href="#about">About</a>
                    </div>
                </div>
            </div>
        )
    }
}



export default Nav;