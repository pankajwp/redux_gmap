import {SEARCH_WEATHER} from '../actions';

function getWeather(state = null, action){
    switch(action.type){
        case SEARCH_WEATHER:
            return action.payload
        default:
            return state
    }
}

export default getWeather;