import {SEARCH_WEATHER} from './index';

const search_weather = (cityname) => {
    return {
        type: SEARCH_WEATHER,
        payload: cityname
    }
}

export default search_weather