import React, { Component } from 'react'
import './division.css';
import TryDemo from './TryDemo';
import ResponsivePlayer from './ResponsivePlayer';

class Division extends Component {
    render(props) {
        return (
            <div>


                <div class="split left">
                    <div class="centered">
                        {/* <img src="img_avatar2.png" alt="Avatar woman" />
                        <h2>Jane Flex</h2>
                        <p>Some text.</p> */}
                        <ResponsivePlayer></ResponsivePlayer>
                    </div>
                </div>

                <div class="split right">
                    <div class="centered">
                        <TryDemo></TryDemo>
                        {/* <img src="img_avatar.png" alt="Avatar man" />
                        <h2>John Doe</h2>
                        <p>Some text here too.</p> */}
                    </div>
                </div>


            </div>
        )
    }
}


export default Division;