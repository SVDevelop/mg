import { createStore, applyMiddleware, combineReducers, compose } from "redux";

import createSagaMiddleware from "redux-saga"
import apiSaga from "./modules/api/saga";
import apiReducer from "./modules/api/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

const reducers = combineReducers({
    api: apiReducer
}) 

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(apiSaga)

export default store