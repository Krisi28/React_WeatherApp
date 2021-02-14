import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Weather from './WeatherApp';
import reportWebVitals from './reportWebVitals';
import SearchEngine from "./SearchEngine.js";
import Heading from "./heading.js";

ReactDOM.render(
  <React.StrictMode>
    <Heading />
    <SearchEngine />
    <Weather city="Vienna" />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
