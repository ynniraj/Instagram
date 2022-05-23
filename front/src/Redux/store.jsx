import { createStore, combineReducers, applyMiddleware } from 'redux';
import { loginReducer } from './Login/reducer';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

const rootReducer = combineReducers({
    login: loginReducer,
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);