import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HighchartPage } from './HighchartPage';

function App() {

  const data = [
    {value: 6702, key: 'de'},
    {value: 4810, key: 'nl'},
    {value: 4747, key: 'gb'},
    {value: 3644, key: 'us'},
    {value: 3439, key: 'fr'},
    {value: 2762, key: 'cz'},
    {value: 2389, key: 'it'},
    {value: 1593, key: 'ru'},
    {value: 1466, key: 'tr'},
    {value: 1445, key: 'es'},
    {value: 809, key: 'pl'},
    {value: 726, key: 'lk'},
    {value: 488, key: 'ca'},
    {value: 470, key: 'sk'},
    {value: 464, key: 'be'},
    {value: 462, key: 'ar'},
    {value: 406, key: 'pt'},
    {value: 377, key: 'hr'},
    {value: 349, key: 'cn'},
    {value: 347, key: 'ch'},
    {value: 336, key: 'br'},
    {value: 327, key: 'au'},
    {value: 304, key: 'se'},
    {value: 291, key: 'il'},
    {value: 218, key: 'cl'},
    {value: 190, key: 'si'},
    {value: 163, key: 'pe'},
    {value: 98, key: 'za'},
    {value: 83, key: 'lv'},
    {value: 71, key: 'mx'},
    {value: 60, key: 'bg'},
    {value: 34, key: 'my'},
    {value: 30, key: 'vn'},
    {value: 27, key: 'ie'},
    {value: 27, key: 'nz'},
    {value: 26, key: 'tz'},
    {value: 11, key: 'mu'},
    {value: 5, key: 'et'},
  ];

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <HighchartPage data={data}/>
    </div>
  );
}

export default App;
