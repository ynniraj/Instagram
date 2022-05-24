import { createStore, combineReducers, applyMiddleware } from "redux";
import { loginReducer } from "./Login/reducer";
import { feedReducer } from "./Feed/reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

const rootReducer = combineReducers({
  login: loginReducer,
  feeds: feedReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
