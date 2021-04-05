import {SpotifyConstant} from "../constants/Spotify_constant"
import axios from "axios";
import qs from "querystring"

export function GetCode() {
    var scopes = 'user-read-private user-read-email user-top-read';
    return dispatch => {
            window.open('https://accounts.spotify.com/authorize' + '?response_type=code' + '&client_id=' + 'bbf9283438bd45afa8897673aa63c043' + (scopes ? '&scope=' + encodeURIComponent(scopes): '')+'&redirect_uri=' + encodeURIComponent('http://localhost:3000/callback'),"_self")
        }
    }

export function GetToken(code) {
    const spotify_data = Buffer.from("bbf9283438bd45afa8897673aa63c043:7622230d970148558878cca0acbbe79a").toString('base64');

    return dispatch => {
        axios({
            method: 'post',
            url: "https://accounts.spotify.com/api/token",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + spotify_data
            },
            data: qs.stringify({
                'grant_type': 'authorization_code',
                'code': code,
                'redirect_uri': 'http://localhost:3000/callback',
            })
        })
        .then(reponse => {
            dispatch({type: SpotifyConstant.SET_TOKEN, token: reponse.data})
            //window.open('http://localhost:3000/mainpage', "_self")

        })
        .catch(err => {
            console.log("token error : ", err.message)
        })
    }
}

export function GetUserInfos() {
    return (dispatch, getState) => {
        if (getState().token.token != null) {
            
            var token = getState().token.token.access_token;
            var token_type = getState().token.token.token_type;
            console.log("tokentype ==",token_type,"accesstoken === ", token)
            axios({
                method: 'get',
                url: "https://api.spotify.com/v1/me",
                headers: {
                    'Authorization':"Bearer "+token,
                }
            })
            .then(reponse => {
                dispatch({type: SpotifyConstant.SET_USERS, user: reponse.data})
            })
        }
    }
}

export function GetTopTracksShort() {
    return(dispatch, getState) => {
        if (getState().token.token != null) {
            var token = getState().token.token.access_token;
            var token_type = getState().token.token.token_type;
            axios({
                method:'get',
                url:"https://api.spotify.com/v1/me/top/tracks?limit=15&time_range=short_term",
                headers: {
                    'Authorization':"Bearer "+token,
                }
        })
        .then(response => {
            dispatch({type: SpotifyConstant.SET_TOPTRACKSSHORT, top_tracksshort: response.data.items})
        })
        }
    }
}

export function GetTopTracksMid() {
    return(dispatch, getState) => {
        if (getState().token.token != null) {
            var token = getState().token.token.access_token;
            var token_type = getState().token.token.token_type;
            axios({
                method:'get',
                url:"https://api.spotify.com/v1/me/top/tracks?limit=15&time_range=medium_term",
                headers: {
                    'Authorization':"Bearer "+token,
                }
        })
        .then(response => {
            dispatch({type: SpotifyConstant.SET_TOPTRACKSMID, top_tracksmid: response.data.items})
        })
        }
    }
}

export function GetTopTracksLong() {
    return(dispatch, getState) => {
        if (getState().token.token != null) {
            var token = getState().token.token.access_token;
            var token_type = getState().token.token.token_type;
            axios({
                method:'get',
                url:"https://api.spotify.com/v1/me/top/tracks?limit=15&time_range=long_term",
                headers: {
                    'Authorization':"Bearer "+token,
                }
        })
        .then(response => {
            dispatch({type: SpotifyConstant.SET_TOPTRACKSLONG, top_trackslong: response.data.items})
        })
        }
    }
}

export function GetRelated(){
    return (dispatch, getState) =>{
        if (getState().token.token != null) {
            var token = getState().token.token.access_token;
            console.log("TEEEEST")
            if (getState().token.top_trackslong != null) {
                var id = getState().token.top_trackslong[0].artists[0].id;
                console.log(id)
                axios({
                    method:'get',
                    url:"https://api.spotify.com/v1/artists/"+id+"/related-artists",
                    headers: {
                        'Authorization':"Bearer "+token,
                    }
            })
            .then(response => {
                dispatch({type: SpotifyConstant.SET_RELATED, related: response.data.artists})
            })
            }
        }
    }
}

