import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Click from './Buton.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Click/>
  </StrictMode>
);

