import React from 'react';
import Card from 'react-bootstrap/Card';
import { right } from '@popperjs/core';
import ResponsivePlayer from './ResponsivePlayer';
import ReactPlayer from 'react-player';


class MyCard extends React.Component {
    render(props) {
        return (
            <Card style={{ width: '28rem',height:'' }}>
                <Card.Body>
                   
                        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                       
                </Card.Body>
            </Card>
        );
    }
}

export default MyCard;