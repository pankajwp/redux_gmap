import { createStore, combineReducers, applyMiddleware } from "redux";
import getWeather from "./reducers/get_weather";
import ReduxPromise from "redux-promise";

const rootReducer = combineReducers({
	cityWeather: getWeather
});

const store = createStore(rootReducer, applyMiddleware(ReduxPromise));

export default store;