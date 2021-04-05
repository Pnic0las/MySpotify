import {CounterConstants} from "../constants/counter";

let initialState = {
    counter : 0
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case CounterConstants.SET_COUNTER:
            return {
                counter : state.counter + action.data
            };
        default:
            return state;
    }
}