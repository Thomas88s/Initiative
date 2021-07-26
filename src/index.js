import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Foster } from './components/Foster';
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Foster />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

