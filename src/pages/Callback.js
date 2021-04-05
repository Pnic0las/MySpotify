import React, { useEffect } from 'react';
import { connect } from "react-redux";
import {GetCode, GetToken} from '../redux/action/Token_Action'
import {
    Link, Redirect
  } from "react-router-dom";

function Callback(props) {

    useEffect(()=> {
        console.log(window.location.pathname)
        if ((window.location.pathname) === ("/callback")) {
           const url = new URL(window.location.href);
           var code = null;
           code = url.searchParams.get("code");
           console.log(code);
           props.Spotify_Token(code);
        }
      })


      return(
        <div>

            {props.token && (
                
                <Redirect to="/mainpage"/>
            )}
        </div>
      )
    
}

function mapStateToProps(state){
    console.log("STATE ===>",state)
    if (state.token.token != null) {
      return{token: state.token.token.access_token}}
    }

  
  const actionCreators = {
    Spotify_Code: GetCode,
    Spotify_Token: GetToken,
  }
  
  const connectedCallBack = connect(mapStateToProps, actionCreators)(Callback)

export default connectedCallBack;
