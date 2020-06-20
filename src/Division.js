import React, { Component } from 'react'
import './division.css';
import TryDemo from './TryDemo';
import ResponsivePlayer from './ResponsivePlayer';
import Navigbar from './Navigbar';

class Division extends Component {
    render(props) {
        return (
            <div>
                {/* <Navigbar></Navigbar> */}

                <ul>
                    <li><a class="active" href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                    <li><input class="search__input" type="text" placeholder="Search"/></li>
                </ul> 

                <div className="split left">
                    <ResponsivePlayer name="toystory"></ResponsivePlayer>
                </div>

                <div className="split right">
                    {/* <div class="centered"> */}
                    <TryDemo></TryDemo>
                    {/* <img src="img_avatar.png" alt="Avatar man" />
                        <h2>John Doe</h2>
                        <p>Some text here too.</p> */}
                    {/* </div> */}
                </div>


            </div>
        )
    }
}


export default Division;