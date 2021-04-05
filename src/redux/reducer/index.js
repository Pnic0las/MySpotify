import {combineReducers  } from "redux";
import  counter  from "../reducer/counter";
import token from "../reducer/Spotify";

const reducer = combineReducers ({counter : counter,
     token : token,
    })

export default reducer;