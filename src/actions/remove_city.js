import { UPDATED_LIST } from "./index";

const removeCity = (cityId, cityWeather) => {
    //console.log(cityId)
    const updatedCityList = cityWeather.filter((element) => element.city.id !== cityId)
    //console.log('action', updatedCityList);
   return {
        type: UPDATED_LIST,
        payload: updatedCityList
   }
}

export default removeCity;