import React from 'react';
import SearchBox from './containers/search_box';
import WeatherBox from './containers/weather_box';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';

function App () {
  return (
    <div className="container">
      <Provider store={store}>
        <SearchBox />
        <WeatherBox />
      </Provider>
    </div>
  );
}

export default App;
