import {CounterConstants} from "../constants/counter"

export function setCounter(counter) {
    return dispatch => {
        dispatch({type: CounterConstants.SET_COUNTER, data: counter})
    }
}
