import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {setCounter} from './redux/action/Counter_action'
import { connect } from "react-redux";
import {GetCode, GetToken, GetUserInfos} from './redux/action/Token_Action'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home'
import CallBack from './pages/Callback'
import MainPage from './pages/MainPage'



function App(props) {

  return (
<Router>
    <Switch>
      <Route path="/callback"> <CallBack></CallBack></Route>
      <Route exact path="/" > <Home></Home> </Route>
      <Route path="/mainpage"><MainPage></MainPage></Route>
    </Switch>
    </Router>
  );
}



export default App;
