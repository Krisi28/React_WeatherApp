import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SearchEngine from "./SearchEngine.js";
import Heading from "./heading.js";
import Footer from "./footer.js";
import HeadingCurrentWeather from "./HeadingsInApp.js"

ReactDOM.render(
  <React.StrictMode>
    <Heading />
    <HeadingCurrentWeather />
    <SearchEngine />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
