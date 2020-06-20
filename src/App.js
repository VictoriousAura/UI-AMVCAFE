import React from 'react';
import Navigbar from './Navigbar';
import ResponsivePlayer from './ResponsivePlayer';
import MyList from './MyList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Jumbotron';
import MyCard from './MyCard';
import ReactPlayer from 'react-player';
import ComplexGrid from './ComplexGrid';
import TryDemo from './TryDemo';
import Division from './Division'


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigbar></Navigbar>
        <Division>
          <TryDemo></TryDemo>
        </Division>
        {/* <Navigbar></Navigbar> */}
        {/* <ResponsivePlayer></ResponsivePlayer> */}

        {/* <Jumbotron fluid> 
             <Container>
              <h1>TownHall 2020</h1>
           <ResponsivePlayer name="toyStory"></ResponsivePlayer>
           </Container> 
           <ComplexGrid></ComplexGrid>
          </Jumbotron> */}

        {/* <MyList></MyList> */}
        {/* <ReactPlayer url='http://192.168.0.180:8080/video/stream/mp4/toystory' /> */}


        {/* <ComplexGrid> </ComplexGrid> */}
        {/* <hr/>
            <ComplexGrid title="img01"> </ComplexGrid><hr/>
            <ComplexGrid title="img02"> </ComplexGrid><hr/>
            <ComplexGrid title="img03"> </ComplexGrid><hr/>
            <ComplexGrid title="img04"> </ComplexGrid> */}

        {/* <TryDemo></TryDemo> */}
        {/* <MyList></MyList> */}
      </React.Fragment>
    );
  }
}

export default App;
