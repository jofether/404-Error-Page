import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
/* 4. TYPO BUG A: Importing the wrong CSS file name (intentional build/style fail) */
/* FIX: import './index.css'; */
import './index.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);