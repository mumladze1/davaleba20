import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './styles.css'; // Ensure this path matches your styles.css file location

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);


