import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { contextGlobalProvider } from './context/PostContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <contextGlobalProvider>
      <BrowserRouter>
    <App />
    </BrowserRouter>

    </contextGlobalProvider>
    
  </React.StrictMode>
);
