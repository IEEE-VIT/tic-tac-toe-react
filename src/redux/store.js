/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/Root Reducer";

const initialState = {};
const middleware = [thunk];

// Use the DevTools extension's compose when it's installed, otherwise fall
// back to plain redux compose. `window.__REDUX_DEVTOOLS_EXTENSION__ && ...()`
// crashed the store on creation whenever the extension wasn't installed,
// since it passed `undefined` as an enhancer to `compose`.
const composeEnhancers =
    (process.env.NODE_ENV !== "production" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
);

export default store;
