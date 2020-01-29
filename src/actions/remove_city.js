import { UPDATED_LIST } from "./index";

const removeCity = (cityId, cityWeather) => {
    //console.log(cityWeather)
    const updatedCityList = cityWeather.filter((element) => element.id !== cityId)
    console.log('action', updatedCityList);
   return {
        type: UPDATED_LIST,
        payload: updatedCityList
   }
}

export default removeCity;