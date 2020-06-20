import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { right } from '@popperjs/core';
import ResponsivePlayer from './ResponsivePlayer';
import Component from 'react';//

import img01 from './img/img-01.jpg'
import img02 from './img/img-02.jpg'
import img03 from './img/img-03.jpg'
import img04 from './img/img-04.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  
}));

// class ComplexGrid extends React.Component {//
export default function ComplexGrid(props) {
    console.log(props.title);
const classes = useStyles();
const abc = props.title;

// render() {//
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} >
          <Grid item>
          
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={require(`./assets/${props.title}.jpg`)} />
              {/* <img src={abc}/> */}
              {/* <img src={props.title} /> */}
              

            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                Steve Squerie and Rick Bananas
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Conversation
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Conversation</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );

// }//
}


// export default  ComplexGrid;//