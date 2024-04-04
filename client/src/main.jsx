import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Suspense } from 'react';
import './css/reset.css';
import './css/main.css';
import './i18n/i18n.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
);
