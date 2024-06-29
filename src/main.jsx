import React from 'react';
import ReactDOM from 'react-dom'; // Correct import for ReactDOM
import App from './App.jsx';
import './index.css';

ReactDOM.render( // Using ReactDOM.render instead of createRoot
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
