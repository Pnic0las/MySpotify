import React, { useEffect } from 'react';
import logo from '../assets/Logo.png'
import { connect } from "react-redux";
import {GetCode, GetToken, GetUserInfos} from '../redux/action/Token_Action'
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 100,
    width: 200,
    padding: '0 30px',
  },
});

function Home(props) {
  const classes = useStyles();


  return (
      <div className="App">
      <header className="App-header">
        <img src={logo}  alt="logo" />
        <Button className={classes.root} onClick={()=> props.Spotify_Code()}>Let's Get Fun</Button>
        
        <span> </span>
      </header>
    </div>
)
}

function mapStateToProps(state){
    return{};
    }

  
  const actionCreators = {
    Spotify_Code: GetCode,
    Spotify_Token: GetToken,
    UserInfos: GetUserInfos,
  }
  
  const connectedHome = connect(mapStateToProps, actionCreators)(Home)

  export default connectedHome;

