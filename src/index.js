import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ContextGlobalProvider } from './context/PostContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextGlobalProvider>
      <BrowserRouter>
    <App />
    </BrowserRouter>

    </ContextGlobalProvider>
    
   

    
  </React.StrictMode>
);
