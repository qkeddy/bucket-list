// Import the React library
import React from 'react';

// TODO DOCUMENT
import ReactDOM from 'react-dom';

// Import `App` so `App` can be rendered 
import App from './App';

ReactDOM.render(
  // Strict Mode is very similar to the use strict; directive in Vanilla JS except here it is React specific. It enforces best practices and gives us suggestive errors when we write code that would technically work, but could be breaking the React-y way of doing things or introduce other bugs down the road. https://reactjs.org/docs/strict-mode.html
  <React.StrictMode>
    {/* Rendering App */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
