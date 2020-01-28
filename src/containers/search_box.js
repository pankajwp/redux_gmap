import React, {useState} from 'react'
import {connect} from 'react-redux'
import searchWeather from '../actions/search_weather';

function SearchBox(props){
    const [cityname, setCityname] = useState('');


    function handleType(event){
        setCityname(event.target.value)
    }

    return (
        <div className="row pt-3">
            <div className="col-lg-12">
               <form>
                   <div className="form-inline">
                   <input 
                    type="text"
                    className="form-control mr-1"
                    placeholder="Enter city name"
                    onKeyDown = {handleType}
                    />
                    <button type="button" className="btn btn-primary" onClick={() => props.city({cityname})}>Search</button>
                    {!props.cityWeather ? (<h2>No enterd</h2>) : (<h2>{props.cityWeather}</h2>)}
                   </div>
               </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cityWeather: state.cityWeather
    }
}

const mapDispatchToProps = dispatch => {
    return{
        city: (cityname) => dispatch(searchWeather(cityname)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);