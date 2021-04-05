import { createStore, compose, applyMiddleware } from "redux";
import reducers from './reducer';
import thunkMiddleware from "redux-thunk";
// import { createLogger } from "redux-logger";

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
// const loggerMiddleware = createLogger();

const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(
            thunkMiddleware,
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);

export default store;