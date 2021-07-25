import logo from './logo.svg';
import './App.css';
import React from 'react';
import Main from './components/MainComponent.js';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
