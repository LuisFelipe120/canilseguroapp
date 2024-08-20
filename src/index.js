import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ContextGlobalProvider } from './context/PostContext';
import { QueryClient, QueryClientProvider } from 'react-query';


const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} contextSharing>
    <ContextGlobalProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ContextGlobalProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
