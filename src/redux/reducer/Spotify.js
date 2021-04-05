import {SpotifyConstant} from "../constants/Spotify_constant";

let initialState = {
    user: null,
    token: null,
    top_tracksshort: null,
    top_tracksmid: null,
    top_trackslong: null,
    related: null
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case SpotifyConstant.SET_TOKEN:
            return {
                ...state,
                token: action.token
            };
            case SpotifyConstant.SET_USERS:
            return {
                ...state,
                user: action.user
            };
            case SpotifyConstant.SET_TOPTRACKSSHORT:
                return {
                    ...state,
                    top_tracksshort: action.top_tracksshort
                };
            case SpotifyConstant.SET_TOPTRACKSMID:
                return {
                    ...state,
                    top_tracksmid: action.top_tracksmid
                };
            case SpotifyConstant.SET_TOPTRACKSLONG:
                return {
                    ...state,
                    top_trackslong: action.top_trackslong
                };
                case SpotifyConstant.SET_RELATED:
                return {
                    ...state,
                    related: action.related
                };
        default:
            return state;
    }
}