import React from 'react';
import {connect} from 'react-redux';
import Chart from './spark_chart';
import _ from 'lodash';

function WeatherBoxMap(props){

    function listWeathers(cityWeather){
        console.log(cityWeather)
        const lists = cityWeather.map(element => {
            const tempArr = element.list.map((ele) => Number(ele.main.temp - 273.5).toFixed(0))
            const humidityArr = element.list.map((ele) => ele.main.humidity)
            console.log(tempArr)
            return (
              <tr key={element.city.id} id={element.id}>
                <td>{element.city.name}</td>
                <td><Chart temp={tempArr}/><i>{_.mean(tempArr)}</i></td>
                <td>Map</td>
                <td><button className="btn btn-sm" onClick={() => props.removeCity(element.id, props.cityWeather)}> <i className="fas fa-trash-alt"></i></button></td>
              </tr>
            );
          });
        return lists;
    }

    return(
        <div className="row mt-3">
            <table className="table table-striped">
            <thead>
                <tr>
                <th>City</th>
                <th>Chart</th>
                <th>Map</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>{listWeathers(props.cityWeather)}</tbody>
            </table>
        </div>
    )
}

const mapStatetoProps = state => {
    return{
        cityWeather: state.cityWeather
    }
}

export default connect(mapStatetoProps)(WeatherBoxMap);