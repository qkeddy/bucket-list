// Import the React library
import React from 'react';

// TODO DOCUMENT
import ReactDOM from 'react-dom';

// Import `App` so `App` can be rendered 
import App from './App';

ReactDOM.render(
  // TODO - what is strictmode?
  <React.StrictMode>
    {/* Rendering App */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
