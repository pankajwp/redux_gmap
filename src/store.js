import {createStore, combineReducers} from 'redux';
import getWeather from './reducers/get_weather';

const rootReducer = combineReducers({
    cityWeather:getWeather
});

const store = createStore(rootReducer);

export default store;