import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/Foster';
import { BrowserRouter as Router } from "react-router-dom";

export const apiUrl = ""
// export const apiUrl = "http://localhost:8088/"

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <App />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

